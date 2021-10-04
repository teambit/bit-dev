import React from 'react';
import { useLocation } from './use-location';

export const BasicUseLocation = () => {
  return <div>{JSON.stringify(useLocation())}</div>
};
