import Todo from "../types/Todo";
import TodoForm from "./TodoForm";
import TodoStatus from "../types/TodoStatus";

export default function TodoItem ({
  todo,
  editing,
  onSave,
  onChange,
  onEdit,
  onDelete,
  onAdvance
} : {
  todo: Todo,
  editing: boolean,
  onSave: (todo: Todo) => void,
  onChange: (todo: Todo) => void,
  onEdit: (todo: Todo) => void,
  onDelete: (id: string) => void,
  onAdvance: (todo: Todo) => void
}) {
  return (
    <div>
      {!editing ? (
        <>
          <p>{todo.description}</p>
          <p>{todo.status}</p>
          <button onClick={() => onEdit(todo)}>Edit</button>
          {todo.status !== TodoStatus.DONE && <button onClick={() => onAdvance(todo)}>Advance</button>}
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