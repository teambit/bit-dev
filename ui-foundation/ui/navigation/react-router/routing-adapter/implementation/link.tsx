import React, { forwardRef, useMemo } from 'react';
import { Link as BaseLink } from 'react-router-dom';
import { parsePath } from 'history';
import type { LinkProps } from '@teambit/base-react.navigation.router-context';

export type { LinkProps };

/**
 * Adapter between React router's Link and our isomorphic link components. Learn more [Here](https://bit.dev/teambit/base-react/navigation/router-context)
 */
export const ReactRouterLink = forwardRef<HTMLAnchorElement, LinkProps>(function ReactRouterLink(
  {
    href = '',
    state,

    // props we should not get, and should not pass to RR link:
    external,
    native,
    ...rest
  }: LinkProps,
  ref
) {
  const to = useMemo(() => ({ ...parsePath(href), state }), [href, state]);

  // @ts-ignore (https://github.com/teambit/bit/issues/4401)
  return <BaseLink to={to} {...rest} ref={ref} />;
});
