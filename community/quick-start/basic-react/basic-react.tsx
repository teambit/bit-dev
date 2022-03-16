import React, { ReactNode } from 'react';
import { Welcome } from '@teambit/react.templates.pages.welcome';
import { ComponentID } from '@teambit/component-id';
import { QuickStart } from '@teambit/bit.quick-start';

export type BasicReactProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function BasicReact({ children }: BasicReactProps) {
  const id = ComponentID.fromString('teambit.react/templates/pages/welcome');
  const components = [
    'teambit.react/templates/pages/welcome',
    'teambit.react/templates/ui/card',
    'teambit.react/templates/ui/heading',
    'teambit.react/templates/ui/text',
    // TODO: add node modules and react hooks
  ];

  return (
    <QuickStart name="basic-react" id={id} components={components} mainComponent={<Welcome />}>
      {children}
    </QuickStart>
  );
}
