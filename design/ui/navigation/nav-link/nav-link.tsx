import React from "react";
import classNames from "classnames";
import {
  NavLink as NativeNavLink,
  NavLinkProps,
} from "@teambit/ui-foundation.navigation.nav-link";
import styles from "./nav-link.module.scss";

export function NavLink({ className, activeClassName, ...rest }: NavLinkProps) {
  return (
    <NativeNavLink
      className={classNames(styles.link, className)}
      activeClassName={classNames(styles.active, activeClassName)}
      {...rest}
    />
  );
}
