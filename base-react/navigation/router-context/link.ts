import React, { ComponentType } from 'react';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * key-value state for stateful routing systems. (Has to be supported by the speicifc link implementation)
   */
  state?: Record<string, any>;

  /**
   * force the use of a native `a` element and ignore the contextual implemented Link.
   */
  native?: boolean;

  external?: boolean;
}

export interface NavigationLinkProps extends LinkProps {
  /** styles class name to apply when link href matches the current page */
  activeClassName?: string;

  /** styles to apply when link href matches the current page */
  activeStyle?: React.CSSProperties;

  /**
   * explicitly apply active styles.
   * If left undefined, the link will automatically become "active" if href matches the current url.
   */
  active?: boolean;
  // in the future, we might allow passing function to calculate this value, like in react router

  /** href should match url exactly to set as active, when using active="auto" */
  exact?: boolean;
  /** include trailing slash on the location pathname, when using active="auto"  */
  strict?: boolean;
}

/**
 * A standard API schema for a Link component.
 */
export type LinkType = ComponentType<LinkProps>;
export type NavLinkType = ComponentType<NavigationLinkProps>;
