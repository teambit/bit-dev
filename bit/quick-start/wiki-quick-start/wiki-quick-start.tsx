import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { QuickStart } from '@teambit/bit.quick-start';

export type WikiQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function WikiQuickStart({ children }: WikiQuickStartProps) {
  const id = ComponentID.fromString('teambit.wiki/apps/wiki@1.90.3');
  console.log(id);
  return <QuickStart id={id}>{children}</QuickStart>;
}
