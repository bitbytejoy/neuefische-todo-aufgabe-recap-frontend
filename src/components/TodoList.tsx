import Todo from "../types/Todo";
import TodoItem from "./TodoItem";
import TodoListTodo from "../types/TodoListTodo";
import TodoStatus from "../types/TodoStatus";

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
  const open = todos.filter(todo => todo.status === TodoStatus.OPEN);
  const inProgress = todos.filter(
    todo => todo.status === TodoStatus.IN_PROGRESS
  );
  const done = todos.filter(todo => todo.status === TodoStatus.DONE);

  const columns = [
    { title: "Open", todos: open },
    { title: "In Progress", todos: inProgress },
    { title: "Done", todos: done },
  ];

  return (
    <div className={"TodoList"}>
      {columns.map(({title, todos}) => (
        <div key={title} className={"TodoListColumn"}>
          <h3>{title}</h3>
          <div>
            {todos.map(todo => (
              <div key={todo.id} className={"TodoItemWrap"}>
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
        </div>
      ))}
    </div>
  );
}