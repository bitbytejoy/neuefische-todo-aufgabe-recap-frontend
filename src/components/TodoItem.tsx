import Todo from "../types/Todo";
import TodoForm from "./TodoForm";

export default function TodoItem ({
  todo,
  editing,
  onSave,
  onChange,
  onEdit,
  onDelete,
} : {
  todo: Todo,
  editing: boolean,
  onSave: (todo: Todo) => void,
  onChange: (todo: Todo) => void,
  onEdit: (todo: Todo) => void,
  onDelete: (id: string) => void
}) {
  return (
    <div>
      {!editing ? (
        <>
          <p>{todo.description}</p>
          <p>{todo.status}</p>
          <button onClick={() => onEdit(todo)}>Edit</button>
          <button>Advance</button>
          <button onClick={() => todo.id ? onDelete(todo.id) : null}>Delete</button>
        </>
      ) : (
        <TodoForm
          todo={todo}
          onSave={onSave}
          onChange={onChange}
          saveText={"Save"}
        />
      )}
    </div>
  );
}