import React from 'react';
import { Button } from './button';

export const BasicButton = () => (
  <Button onPress={() => alert('hello there!')}>click me</Button>
);

export const RedButton = () => (
  <Button style={{background: 'red'}} onPress={() => alert('hello there!')}>click me</Button>
);
