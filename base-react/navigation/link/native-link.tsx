import React, { useMemo } from 'react';
import classNames from 'classnames';
import { compareUrl } from '@teambit/ui-foundation.urls.compare-url';
import { useLocation } from '@teambit/base-react.navigation.use-location';
import type {
  LinkProps,
  NavigationLinkProps,
} from '@teambit/base-react.navigation.router-context';

const externalLinkAttributes = { rel: 'noopener', target: '_blank' };
export const isBrowser = typeof window !== 'undefined';

export function NativeLink({
  external,
  native,
  state,
  ...rest
}: LinkProps) {
  const externalProps = external ? externalLinkAttributes : {};

  return <a {...rest} {...externalProps} />;
}

export function NativeNavLink({
  className,
  style,
  activeClassName,
  activeStyle,
  active,
  strict,
  exact,
  ...rest
}: NavigationLinkProps) {
  const location = useLocation();

  const isActive = useMemo(() => {
    if (typeof active === 'boolean') return active;
    if (!location || !_href) return false;

    return compareUrl(location.pathname, _href, { exact, strict });
  }, [active, _href, location]);

  const combinedStyles = useMemo(
    () => (isActive && activeStyle ? { ...style, ...activeStyle } : style),
    [isActive, style]
  );

  return (
    <NativeLink
      {...rest}
      className={classNames(className, isActive && activeClassName)}
      style={combinedStyles}
    />
  );
}
