import Todo from "../types/Todo";
import TodoItem from "./TodoItem";
import TodoListTodo from "../types/TodoListTodo";

export default function TodoList ({
  todos,
  onChange,
  onSave,
  onEdit,
  onDelete
} : {
  todos: TodoListTodo[],
  onChange: (todo: Todo) => void,
  onSave: (todo: Todo) => void,
  onEdit: (todo: Todo) => void,
  onDelete: (id: string) => void
}) {
  return (
    <div>
      {todos.length
        ? todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChange={onChange}
            onSave={onSave}
            onEdit={onEdit}
            editing={todo.editing}
            onDelete={onDelete}
          />
        )) : <p>No todos found</p>}
    </div>
  );
}