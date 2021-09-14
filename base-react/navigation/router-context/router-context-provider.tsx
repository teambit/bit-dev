import React from 'react';
import { RouterContext, UseLocation } from './router-context';
import type { LinkType } from './link';

export type RouterContextProviderProps = {
  /**
   * implementation of a Link component.
   */
  Link?: LinkType,

  /**
   * implementation of a useLocation hook. 
   */
  useLocation?: UseLocation,

  children?: React.ReactChild
};

export function RouterContextProvider({children,  ...rest}: RouterContextProviderProps) {
  return (
    <RouterContext.Provider value={{ ...rest }}>{children}</RouterContext.Provider>
  );
}
