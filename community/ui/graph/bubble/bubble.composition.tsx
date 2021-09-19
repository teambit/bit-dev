import React from 'react';
import { ComponentID } from '@teambit/component-id';
import { Bubble } from './bubble';

export const BasicBubble = () => (
  <Bubble />
);

export const ReactBubble = () => {
  const id = ComponentID.fromString('teambit.community/ui/hero@1.0.0');
  return <Bubble componentId={id} icon="https://static.bit.dev/brands/logo-react.svg" />
};

export const WithOpacity = () => {
  return <Bubble style={{ opacity: 0.5 }} icon="https://static.bit.dev/brands/logo-angular.svg" />;
};

export const NodeJS = () => {
  const id = ComponentID.fromString('teambit.community/entities/hero-bubbles@1.0.0');
  return <Bubble componentId={id} icon="https://static.bit.dev/brands/logo-nodejs.svg" forceActive />;
}
