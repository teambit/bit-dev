import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { ComponentStep, ComponentStepProps } from './component-step';
import styles from './component-thinking-process.module.scss';

export type ComponentThinkingProcessProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;

  /*
   * component steps
   */
  steps: ComponentStepProps[];
} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentThinkingProcess({ children, steps, ...rest }: ComponentThinkingProcessProps) {
  return (
    <div {...rest} className={classNames(styles.componentThinkingProcess, rest.className)}>
      {steps.map((step, key) => {
        return <ComponentStep open={key === 0} key={step.id.toString()} {...step} stepNum={key + 1} />;
      })}
    </div>
  );
}
