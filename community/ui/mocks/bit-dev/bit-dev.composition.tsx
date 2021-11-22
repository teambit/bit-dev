import React from 'react';
import { BitDevMock } from './bit-dev';

const Text = () => {
  return (
    <div>
      <p>Text text text text.</p>
      <p>Text text text text.</p>
      <br />
      <p>Text text text...</p>
    </div>
  );
};

export const BasicBitDevMock = () => <BitDevMock component={<Text />} data-testid="basic-bitdev-mock" />;
