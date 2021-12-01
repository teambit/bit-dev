import React from 'react';
import { Footer as BaseFooter, FooterProps as BaseFooterProps } from '@teambit/design.blocks.footer';
import { Logo } from '@teambit/design.ui.brand.logo';
import { Link } from '@teambit/community.ui.footer.link';
import styles from './footer.module.scss';

export type FooterProps = {} & BaseFooterProps;

export function Footer({ categoryList, children, ...rest }: FooterProps) {
  return (
    <BaseFooter {...rest} categoryList={categoryList} className={styles.footer}>
      {children || <BottomLinks />}
    </BaseFooter>
  );
}

function BottomLinks() {
  return (
    <>
      <Logo className={styles.logo} />
      <span>© 2021 Cocycles, Ltd.</span>
      <Link text="Privacy" href="https://bit.cloud/resources/privacy" external />
    </>
  );
}
