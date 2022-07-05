import React from 'react';
import { TodoCard } from './todo-card';
import AboutTodo from './about-todo-component.mdx';
import styles from './styles.module.scss';

export const TodoCardAndAbout = () => {
  return (
    <div className={styles.todoCardAndAbout}>
      <TodoCard />
      <div className={styles.aboutTodo}>
        <AboutTodo />
      </div>
    </div>
  );
};
