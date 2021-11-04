import React, { useMemo } from 'react';
import { Link as BaseLink } from 'react-router-dom';
import { parsePath } from 'history';
import type { LinkProps } from '@teambit/base-react.navigation.router-context';
import { LinkAnchor, useLinkContext } from '@teambit/ui-foundation.ui.navigation.react-router.link-anchor';

export type { LinkProps };

/**
 * Adapter between React router's Link and our isomorphic link components. Learn more [Here](https://bit.dev/teambit/base-react/navigation/router-context)
 */
export function Link({
  href = '',
  state,

  // props we should not get, and should not pass to RR link:
  external,
  native,
  ...rest
}: LinkProps) {
  const to = useMemo(() => ({ ...parsePath(href), state }), [href, state]);
  // only use anchor when its context is available
  const { baseUrl } = useLinkContext();
  const component = baseUrl ? LinkAnchor : undefined;

  // @ts-ignore (https://github.com/teambit/bit/issues/4401)
  return <BaseLink to={to} {...rest} component={component} />;
}
