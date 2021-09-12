import React from 'react';
import { LinkType } from './link';

export type UseLocation = () => Location|undefined;

export type RouterContextType = {
  /**
   * link implementation.
   */
  Link?: LinkType,

  /**
   * useLocation implementation.
   */
  useLocation?: UseLocation
};

export const RouterContext = React.createContext<RouterContextType>({});
