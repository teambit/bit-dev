import { ReactNode } from 'react';

export type QuickStartType = {
  name: string;

  displayName: string;

  description: string;

  /**
   * component .
   */
  component: ReactNode;
};
