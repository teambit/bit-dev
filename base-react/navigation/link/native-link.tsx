import React, { useMemo } from "react";
import { LinkProps } from "@teambit/base-react.navigation.router-context";
import classNames from "classnames";

const externalLinkAttributes = { rel: "noopener", target: "_blank" };

export function NativeLink({
  activeClassName,
  activeStyle,
  isActive,
  style,
  className,
  external,
  ...rest
}: LinkProps) {
  const externalProps = external ? externalLinkAttributes : {};
  const combinedStyles = useMemo(
    () => (isActive && activeStyle ? { ...style, ...activeStyle } : style),
    [isActive, style]
  );

  return (
    <a
      {...rest}
      {...externalProps}
      style={combinedStyles}
      className={classNames(className, isActive && activeClassName)}
    />
  );
}
