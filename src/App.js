
import React from 'react';

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Do Homework", done: false },
    { id: 2, text: "Buy groceries", done: false },
    { id: 3, text: "Sweep floors", done: false }
  ])

  return (
    <div className='todolist'>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

function AddTodo({setTodos}) {
  const inputRef = React.useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo ={
      id: 4,
      text,
      done: false
    };
    setTodos(prevTodos => {
      return prevTodos.concat(todo)
    })
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
