import React from 'react';
import { ComponentID } from '@teambit/component-id';
import { ComponentBubble } from './component-bubble';

export const BasicBubble = () => <ComponentBubble />;

export const ReactBubble = () => {
  const id = ComponentID.fromString('teambit.community/ui/hero@1.0.0');
  return <ComponentBubble componentId={id} icon="https://static.bit.dev/brands/logo-react.svg" data-testid="component-bubble" />;
};

export const WithOpacity = () => {
  return <ComponentBubble style={{ opacity: 0.5 }} icon="https://static.bit.dev/brands/logo-angular.svg" />;
};

export const NodeJS = () => {
  const id = ComponentID.fromString('teambit.community/entities/hero-bubbles@1.0.0');
  return <ComponentBubble componentId={id} icon="https://static.bit.dev/brands/logo-nodejs.svg" forceActive />;
};

export const NonInteractiveBubble = () => {
  return <ComponentBubble icon="https://static.bit.dev/brands/logo-react.svg" nonInteractive />;
};
