import React from 'react';
import { useLocation } from './use-location';

export const BasicUseLocation = () => (
  <div style={{ maxWidth: 300 }}>{JSON.stringify(useLocation(), undefined, 1)}</div>
);
