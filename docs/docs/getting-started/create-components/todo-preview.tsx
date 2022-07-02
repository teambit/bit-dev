import React, { useState } from 'react';

type ToDoProps = {
  initialTodo?: string;
};

const inputStyle = {
  width: 210,
  padding: 10,
  border: '1px solid lightgrey',
  color: 'lightgrey',
};

function ToDo({ initialTodo = 'first to-do!' }: ToDoProps) {
  const [todos, setTodos] = useState([initialTodo]);
  return (
    <>
      <input
        style={inputStyle}
        placeholder="Write a to-do and hit the 'return' key"
        onKeyDown={(e) => {
          e.code === 'Enter' && setTodos((prev) => [(e.target as HTMLInputElement).value, ...prev]);
        }}
      />
      <ul style={{ color: 'lightgrey' }}>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export const TodoPreview = () => (
  <div style={{ padding: 8 }}>
    <ToDo />
  </div>
);
