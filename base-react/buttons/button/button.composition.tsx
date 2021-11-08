import React from 'react';
// import { Image } from '@teambit/base-react.content.image';
import { Button } from './button';

export const BasicButton = () => {
  return <Button>click me</Button>
};

export const ButtonWithAlert = () => {
  return <Button onPress={() => alert('hello there!')}>click me</Button>;
}

export const ButtonWithCustomStyles = () => {
  return <Button style={{ background: 'red' }}>click me</Button>;
}

export const ButtonWithIcon = () => {
  return (
    <Button>
      {/* <Image src="https://static.bit.dev/bit-logo.svg" /> */}
      click me
    </Button>
  );
};

export const ButtonAsALink = () => {
  return <Button href="https://bit.dev">Bit</Button>;
};
