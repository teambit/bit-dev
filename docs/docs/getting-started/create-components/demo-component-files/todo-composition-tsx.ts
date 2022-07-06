export const composition = `/**
 * This is the 'compositions' file.
 * It is rendered in the component's 'Compositions' tab, in Bit's UI.
 * 
 * Compositions simulate components in different variations to test and
 * visualize them, as well as to promote their discoverability.
 *
 * A UI component composition is the rendering of that component
 * in a certain state and context.
 * 
 * A non-UI component composition is the visualization of
 * the component's I/O and the effects it has on the UI, if there are any
 */
import React from 'react';
import { ToDo } from './to-do';

export const BasicToDo = () => {
  return <ToDo />;
};

export const CustomInitialTodo = () => {
  return <ToDo initialTodo="my custom initial to-do" />;
};`;
