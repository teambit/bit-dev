import React, { useMemo } from 'react';
import classnames from 'classnames';
import {
  Link,
  LinkProps,
} from '@teambit/base-react.navigation.link';
import { compareUrl } from '@teambit/ui-foundation.urls.compare-url';

export const isBrowser = typeof window !== 'undefined';

const externalLinkAttributes = { rel: "noopener", target: "_blank" };

export type NavLinkProps = {
  /** href should match url exactly in order to apply. */
	exact?: boolean;
	/** take in consideration trailing slash on the location pathname */
	strict?: boolean;
} & LinkProps;

/**
 * A special version of the `<Link/>` that will add styles to the rendered element when it matches the current URL.
 * Used to provide default fallbacks for react-router link
 */
export function NavLink({
	activeClassName,
	activeStyle,
	isActive,
	exact,
	strict,
	style,
	className,
  external,
	...rest
}: NavLinkProps) {
	// TODO - consider using getLocation()
	const activeHref = isBrowser ? window.location.href : '/';
  const externalLink = external ? externalLinkAttributes : {}

	const isDefaultActive = useMemo(
		() => rest.href && compareUrl(activeHref, rest.href),
		[exact, strict, activeHref, rest.href]
	);

	const calcIsActive = isActive || isDefaultActive;

	const combinedStyles = useMemo(
		() => (calcIsActive && activeStyle ? { ...style, ...activeStyle } : style),
		[calcIsActive, style]
	);

	return (
		<Link
      {...externalLink}
			{...rest}
			style={combinedStyles}
			className={classnames(className, calcIsActive && activeClassName)}
		/>
	);
}
