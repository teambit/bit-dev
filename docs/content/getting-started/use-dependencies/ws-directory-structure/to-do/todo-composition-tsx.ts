export const composition = `import React from 'react';
import { ToDo } from './to-do';

export const BasicToDo = () => {
  return <ToDo />;
};

export const CustomInitialTodo = () => {
  return <ToDo initialTodo="my custom initial to-do" />;
};`;
