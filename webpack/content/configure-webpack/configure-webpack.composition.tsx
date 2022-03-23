import React from 'react';
import { ConfigureWebpack } from './index';

export const BasicCompilerOverview = () => {
  return (
    <div
      style={{
        maxWidth: 860,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 50,
      }}
    >
      <ConfigureWebpack />
    </div>
  );
};
