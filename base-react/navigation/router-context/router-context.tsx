import React from 'react';
import { LinkType, NavLinkType } from './link.type';

// export function useLocation<S = H.LocationState>(): H.Location<S>;
export type Location<StateType = {}> = {
  /** Returns the Location object's URL's fragment (includes leading "#" if non-empty). */
  hash: string;
  /* Returns the Location object's URL's path. */
  pathname: string;
  /* Returns the Location object's URL's query (includes leading "?" if non-empty). */
  search: string;

  /* (implementation specific) Returns the state associated with the current history entry */
  state?: StateType;
  /* (implementation specific) Returns the key associated with the current history entry */
  key?: string;
};

export type UseLocation<StateType extends {} = {}> = () => Location<StateType>;
export interface Navigator {
  (to: string, options?: { replace?: boolean }): void;
  (delta: number): void;
}

export type UseNavigate = () => Navigator;

export type RouterContextType = {
  /**
   * link implementation.
   */
  Link?: LinkType;

  /**
   * link implementation.
   */
  NavLink?: NavLinkType;

  /**
   * useLocation implementation.
   */
  useLocation?: UseLocation;

  /**
   * useNavigate implementation
   */
  useNavigate?: UseNavigate;
};

export const RouterContext = React.createContext<RouterContextType>({});

export const RouterProvider = RouterContext.Provider;
