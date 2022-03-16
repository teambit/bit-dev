import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { QuickStart } from '@teambit/bit.quick-start';

export type BasicBackendProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function BasicBackend({ children }: BasicBackendProps) {
  const id = ComponentID.fromString('learnbit.backend/user-service');
  const components = [
    'learnbit.backend/user-service',
    'learnbit.backend/posts-service',
    'learnbit.backend/entity/user',
    'learnbit.backend/entity/post',
    // TODO: add node modules and react hooks
  ];

  return (
    <QuickStart name="backend" id={id} components={components}>
      {children}
    </QuickStart>
  );
}
