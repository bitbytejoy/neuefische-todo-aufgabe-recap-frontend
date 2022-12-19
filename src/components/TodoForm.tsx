import {ChangeEvent} from "react";
import Todo from "../types/Todo";

export default function TodoForm ({
  onSave,
  onChange,
  todo,
  saveText = "+"
} : {
  onSave: (todo: Todo) => void,
  onChange: (todo: Todo) => void,
  todo: Todo
  saveText?: string,
}) {
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...todo,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  return (
    <form onSubmit={async e => {
      e.preventDefault();
      onSave(todo);
    }}>
      <input
        name={"description"}
        type={"text"}
        value={todo.description}
        onChange={change}
      />
      <button>{saveText}</button>
    </form>
  );
}