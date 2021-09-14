import React from "react";
import { Link as BaseLink } from "react-router-dom";
import type { LinkProps as BaseLinkProps } from "@teambit/base-react.navigation.link";

export type LinkProps = {} & BaseLinkProps;

/**
 *
 * translates base-react props to react-router link
 */
export function Link({ href, state, ...rest }: LinkProps) {
  return <BaseLink to={{pathname: href, state}} {...rest} />;
}
