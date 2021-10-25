import React from 'react';
// import { Image } from '@teambit/base-react.content.image';
import { Button } from './button';

export const BasicButton = () => <Button>click me</Button>;

export const ButtonWithAlert = () => (
  <Button onPress={() => alert('hello there!')}>click me</Button>
);

export const ButtonWithCustomStyles = () => (
  <Button style={{ background: 'red' }}>click me</Button>
);

export const ButtonWithIcon = () => (
  <Button>
    {/* <Image src="https://static.bit.dev/bit-logo.svg" /> */}
    click me
  </Button>
);

export const ButtonAsALink = () => <Button href="https://bit.dev">Bit</Button>;
