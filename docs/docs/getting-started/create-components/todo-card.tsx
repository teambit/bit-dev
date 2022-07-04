import React from 'react';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';
import { TodoPreview } from './todo-preview';
import styles from './styles.module.scss';

export const TodoCard = () => {
  return (
    <ComponentCard
      envIcon="https://static.bit.dev/extensions-icons/react.svg"
      // eslint-disable-next-line no-script-url
      href="#component-files"
      id="apps/to-do"
      preview={<TodoPreview />}
      description="A to-do app component"
      className={styles.todoCard}
    />
  );
};

// export const TodoCardAndAbout = ({ children }) => {
//   return (
//     <div className={styles.todoCardAndAbout}>
//       <TodoCard />
//       <div className={styles.aboutTodo}>{children}</div>
//     </div>
//   );
// };
