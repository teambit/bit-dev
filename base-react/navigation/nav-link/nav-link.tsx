// import React, { useMemo } from 'react';
// import classnames from 'classnames';
// import {
//   Link,
//   LinkProps,
// } from '@teambit/base-react.navigation.link';
// import { compareUrl } from '@teambit/ui-foundation.urls.compare-url';

// export const isBrowser = typeof window !== 'undefined';

// const externalLinkAttributes = { rel: "noopener", target: "_blank" };

// export type NavLinkProps = {
//   /** href should match url exactly in order to apply. */
// 	exact?: boolean;
// 	/** take in consideration trailing slash on the location pathname */
// 	strict?: boolean;
// } & LinkProps;

// /**
//  * A special version of the `<Link/>` that will add styles to the rendered element when it matches the current URL.
//  * Used to provide default fallbacks for react-router link
//  */
// export function NavLink({
// 	activeClassName,
// 	activeStyle,
// 	// forwardRef,
// 	// isActive,
// 	active,
// 	exact,
// 	strict,
// 	style,
// 	className,
//   external,
// 	...rest
// }: NavLinkProps) {
// 	// TODO - consider using getLocation()
// 	const activeHref = isBrowser ? window.location.href : '/';
// //   const externalLink = external ? externalLinkAttributes : {}

// 	// TODO - improve perf
// 	const isDefaultActive = useMemo(
// 		() => rest.href && compareUrl(activeHref, rest.href),
// 		[exact, strict, activeHref, rest.href]
// 	);

// 	// TODO - handle isActive = false, isActive = undefined, etc
// 	const calcIsActive = active || isDefaultActive;

// 	const combinedStyles = useMemo(
// 		() => (calcIsActive && activeStyle ? { ...style, ...activeStyle } : style),
// 		[calcIsActive, style]
// 	);

// 	return (
// 		<Link
// 			// ref={forwardRef}
// 			// forwardRef={forwardRef}
// 	// 	// TODO - move inside link
//     //   {...externalLink} 
// 			{...rest}
// 			style={combinedStyles}
// 			className={classnames(className, calcIsActive && activeClassName)}
// 		/>
// 	);
// }
