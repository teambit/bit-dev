import React from 'react';
import { LeftRight } from './left-right';

export const BasicLeftRight = () => (
  <LeftRight right={<div style={{ background: '#ccc', width: 500, height: 300 }} />} left={<div style={{ background: '#ccc', width: 300, height: 300 }} />} />
);
