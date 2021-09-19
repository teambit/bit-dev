import React from 'react';
import { Bubble } from './bubble';

export const BasicBubble = () => (
  <Bubble />
);

export const ReactBubble = () => {
  return <Bubble icon="https://static.bit.dev/brands/logo-react.svg" />
};

export const WithOpacity = () => {
  return <Bubble style={{ opacity: 0.5 }} icon="https://static.bit.dev/brands/logo-angular.svg" />;
};

export const NodeJS = () => {
  return <Bubble icon="https://static.bit.dev/brands/logo-nodejs.svg" />;
}
