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
    <div className={"TodoItem"}>
      {!editing ? (
        <div className={"TodoItemBody"}>
          <div className={"TodoItemStatusWrap"}>
            <p>{todo.status}</p>
          </div>

          <div>
            <p>{todo.description}</p>
          </div>

          <div className={"TodoItemActions"}>
            <button
              className={"button"}
              onClick={() => onEdit(todo)}
            >Edit</button>

            {todo.status !== TodoStatus.DONE && (
              <button
                className={"button"}
                onClick={() => onAdvance(todo)}
              >Advance</button>
            )}

            <button
              className={"button"}
              onClick={() => todo.id ? onDelete(todo.id) : null}
            >Delete</button>
          </div>
        </div>
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