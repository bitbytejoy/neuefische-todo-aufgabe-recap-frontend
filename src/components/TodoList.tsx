import Todo from "../types/Todo";
import TodoItem from "./TodoItem";
import TodoListTodo from "../types/TodoListTodo";

export default function TodoList ({
  todos,
  onChange,
  onSave,
  onEdit,
  onDelete,
  onAdvance
} : {
  todos: TodoListTodo[],
  onChange: (todo: Todo) => void,
  onSave: (todo: Todo) => void,
  onEdit: (todo: Todo) => void,
  onDelete: (id: string) => void,
  onAdvance: (todo: Todo) => void
}) {
  return (
    <div className={"TodoList"}>
      {todos.length
        ? [
          {className: "open", title: "Open"},
          {className: "in_progress", title: "In Progress"},
          {className: "done", title: "Done"}
        ].map(({className: status, title}) => (
          <div key={status} className={`TodoListColumn show-${status}`}>
            <header>
              <h3>{title}</h3>
            </header>
            {todos.map(todo => (
              <div key={todo.id} className={`TodoItemWrap ${todo.status}`}>
                <TodoItem
                  todo={todo}
                  onChange={onChange}
                  onSave={onSave}
                  onEdit={onEdit}
                  editing={todo.editing}
                  onDelete={onDelete}
                  onAdvance={onAdvance}
                />
              </div>
            ))}
          </div>
        ))  : (
          <div className={"TodoListEmpty"}>
            <p>No todos found</p>
          </div>
        )}
    </div>
  );
}