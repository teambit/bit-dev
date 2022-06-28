export const button = `/**
 * This is the component's implementation file.
 * A component may have various sorts of implementation files,
 * depending on the type of env it uses.
 */

import React, { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <div>
      {children}
    </div>
  );
}
`;
