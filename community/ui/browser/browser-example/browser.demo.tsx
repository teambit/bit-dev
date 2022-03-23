import React from 'react';
import { Browser } from '../browser';
import scopeUi from '../scope-ui.png';

export const BrowserExample = () => {
  return (
    <div style={{ width: 600 }}>
      <Browser>
        <img src={scopeUi} height={300} alt="" />
      </Browser>
    </div>
  );
};
