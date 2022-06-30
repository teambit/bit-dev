export const todo = `/**
 * This is the component's implementation file.
 * A component may have various sorts of implementation files,
 * depending on the type of env it uses.
 */
import React, { useState } from 'react';

export type ToDoProps = {
  initialTodo?: string;
};

const inputStyle = {
  width: 240,
  padding: 10,
};

export function ToDo({ initialTodo = 'first to-do!' }: ToDoProps) {
  const [todos, setTodos] = useState([initialTodo]);
  return (
    <>
      <input
        style={inputStyle}
        placeholder="Write a to-do and hit the 'return' key"
        onKeyDown={(e) => {
          e.code === 'Enter' &&
            setTodos((prev) => [(e.target as HTMLInputElement).value, ...prev]);
        }}
      />
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
}`;
