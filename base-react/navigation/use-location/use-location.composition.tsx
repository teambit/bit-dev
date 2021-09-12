import React from 'react';
import { useLocation } from './use-location';

export const BasicUseLocation = () => {
  return JSON.stringify(useLocation());
};
