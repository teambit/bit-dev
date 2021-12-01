import React, { ReactNode } from 'react';

export type HeaderProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <div>
      {children}
    </div>
  );
}
