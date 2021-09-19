import React from "react";
import classNames from "classnames";
import {
  Link as BaseLink,
  LinkProps,
} from "@teambit/base-react.navigation.link";
import styles from "./link.module.scss";

export function Link({ className, activeClassName, ...rest }: LinkProps) {
  return (
    <BaseLink
      className={classNames(styles.link, className)}
      activeClassName={classNames(styles.active, activeClassName)}
      {...rest}
    />
  );
}
