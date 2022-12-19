import TodoForm from "../components/TodoForm";
import React, {useEffect, useState} from "react";
import TodoList from "../components/TodoList";
import Todo from "../types/Todo";
import axios from "axios";
import TodoStatus from "../types/TodoStatus";
import TodoListTodo from "../types/TodoListTodo";

export default function Root() {
  const [todos, setTodos] = useState<TodoListTodo[]>([]);
  const [todo, setTodo] = useState<Todo>({
    description: "",
    status: TodoStatus.OPEN
  });

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/todos");
      setTodos(response.data.map((todo: Todo) => ({
        ...todo,
        editing: false
      })));
    })();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm
        todo={todo}
        onSave={async (todo) => {
          const response = await axios.post("/api/todos", todo);
          setTodos([...todos, response.data]);
          setTodo({
            description: "",
            status: TodoStatus.OPEN
          })
        }}
        onChange={setTodo}
      />
      <TodoList
        todos={todos}
        onEdit={todo => setTodos(todos.map(t => {
          return t.id === todo.id
            ? {...t, editing: !t.editing}
            : t
        }))}
        onChange={todo => setTodos(
          todos.map(t => t.id === todo.id
            ? { ...t, ...todo }
            : t
          )
        )}
        onSave={async todo => {
          await axios.put(`/api/todos/${todo.id}`, todo);
          setTodos(todos.map(t => {
            return t.id === todo.id
              ? {...t, editing: false}
              : t
          }));
        }}
        onDelete={(id) => {
          axios.delete("/api/todos/" + id);
          setTodos(todos.filter(todo => todo.id !== id))
        }}
      />
    </div>
  );
}