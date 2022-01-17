import React from 'react';
import { BaseTheme } from './base-theme';
import styles from './base-theme.module.scss';

// export const BasicBaseTheme = () => <BaseTheme />;

export const PrimaryColor = () => {
  return (
    <BaseTheme>
      <div className={styles.example}>Hello Design Tokens!!</div>
    </BaseTheme>
  );
};
