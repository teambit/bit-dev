import React from 'react';
import { Button } from './button';

export const BasicButton = () => (
  <Button>Get Started</Button>
);

export const SecondaryButton = () => {
  return <Button secondary>Watch video</Button>;
};

export const LinkButton = () => {
  return <Button href="http://twitter.com">Getting Started</Button>;
};
