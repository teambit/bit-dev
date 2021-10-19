import React from 'react';
import { TopDown } from './top-down';

export const BasicTopDown = () => {
  return (
    <TopDown header={<div style={{ background: '#ccc', height: 200, width: 600 }}></div>}>
      <div style={{ background: '#ccc', height: 600, width: 600 }}></div>
    </TopDown>
  );
};
