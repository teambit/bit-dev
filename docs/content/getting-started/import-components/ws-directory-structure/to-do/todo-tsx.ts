export const todo = `import React, { useState } from 'react';
/* this component was installed (see 'Use dependencies' page) */
import { InputText } from '@teambit/design.inputs.input-text';
/**
 *  this component was imported. see its source file in:
 *  './design/info/icon-text'
 */
import { IconText } from '@teambit/design.info.icon-text';

export type ToDoProps = {
  initialTodo?: string;
};

const inputStyle = {
  width: 300,
  padding: 10,
  marginBottom: 20,
};

const iconUrl = 'https://static.bit.cloud/bit-icons/map-marker.svg';

export function ToDo({ initialTodo = 'first to-do!' }: ToDoProps) {
  const [todos, setTodos] = useState([initialTodo]);
  const [inputVal, setInputVal] = useState('');
  return (
    <>
      <InputText
        style={inputStyle}
        value={inputVal}
        placeholder="Write a to-do and hit the 'return' key"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        onKeyDown={(e) => {
          if (!(e.code === 'Enter') || inputVal === '') return;
          setTodos((prev) => [inputVal, ...prev]);
          setInputVal('');
        }}
      />
      <div>
        {todos.map((todo, i) => (
          <IconText icon={<img src={iconUrl} />} key={i}>
            {todo}
          </IconText>
        ))}
      </div>
    </>
  );
}
`;
