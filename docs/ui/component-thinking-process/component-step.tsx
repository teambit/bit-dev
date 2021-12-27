import React, { ReactNode, useState } from 'react';
import { ComponentID } from '@teambit/component-id';
import { DrawerUI } from '@teambit/ui-foundation.ui.tree.drawer';
import styles from './component-thinking-process.module.scss';

export type ComponentStepProps = {
  /*
   * id of the component built in the step.
   */
  id: ComponentID;

  /**
   * content of the component step.
   */
  content: ReactNode;

  /**
   * should step be opened or closed.
   */
  open?: boolean;
};

export function ComponentStep({ id, content, open }: ComponentStepProps) {
  const [isOpen, onToggle] = useState(open || false);

  return (
    <DrawerUI
      className={styles.componentStep}
      name={id.toStringWithoutVersion()}
      isOpen={isOpen}
      onToggle={() => onToggle(!isOpen)}
    >
      {content}
    </DrawerUI>
  );
}
