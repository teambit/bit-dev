import React, { ComponentType } from "react";

export type LinkProps = {
  /**
   * key-value state for stateful routing systems.
   */
  state?: Record<string, any>;

  /**
   * force the use of a native `a` element and ignore the contextual implemented Link.
   */
  native?: boolean;

  activeClassName?: string;

  activeStyle?: React.CSSProperties;

  isActive?: boolean;

  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * A standard API schema for a Link component.
 */
export type LinkType = ComponentType<LinkProps>;
