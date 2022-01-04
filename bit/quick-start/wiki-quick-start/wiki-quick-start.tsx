import React, { ReactNode } from 'react';

export type WikiQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function WikiQuickStart({ children }: WikiQuickStartProps) {
  return <div>{children}</div>;
}
