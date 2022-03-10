import React, { ReactNode } from 'react';
import { Featured } from '@teambit/bit.quick-start.featured';
import { QuickStartType } from './quick-start-type';

export type QuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;

  intro?: ReactNode;

  quickStarts: QuickStartType[];
};

export function QuickStart({ quickStarts }: QuickStartProps) {
  return (
    <>
      <Featured cards={[]} />
    </>
  );
}
