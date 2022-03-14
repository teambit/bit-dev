import React from 'react';
import classnames from 'classnames';
import { Footer as BaseFooter, FooterProps as BaseFooterProps } from '@teambit/design.blocks.footer';
import { Logo } from '@teambit/design.ui.brand.logo';
import { IconLink } from '@teambit/design.ui.navigation.icon-link';
import styles from './footer.module.scss';

export type FooterProps = {} & BaseFooterProps;

export function Footer({ categoryList, children = <BottomLinks />, className, ...rest }: FooterProps) {
  return (
    <BaseFooter {...rest} categoryList={categoryList} className={classnames(styles.footer, className)}>
      {children}
    </BaseFooter>
  );
}

function BottomLinks() {
  return (
    <>
      <Logo className={styles.logo} />
      <span>© {new Date().getFullYear()} Cocycles Ltd.</span>
      <IconLink text="Privacy" href="https://bit.cloud/resources/privacy" external />
    </>
  );
}
