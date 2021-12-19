import React from 'react';
import { Scrollbar } from './scrollbar';

export const BasicScrollbar = () => (
  <Scrollbar
    style={{
      height: 250,
      overflowY: 'scroll',
      borderTop: '2px solid',
      borderBottom: '2px solid',
      borderColor: 'gray',
      boxSizing: 'border-box',
    }}
    data-testid="test-scrollbar"
  >
    <div
      style={{
        height: 2000,
        textAlign: 'center',
        borderTop: '2px solid',
        borderBottom: '2px solid',
        borderColor: 'green',
        boxSizing: 'border-box',
      }}
    >
      Scroll me!
    </div>
  </Scrollbar>
);
