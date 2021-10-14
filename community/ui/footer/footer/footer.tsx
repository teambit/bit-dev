import React from 'react';
import classNames from 'classnames';
import { Category, CategoryProps } from '@teambit/community.ui.footer.category';
import { Logo } from '@teambit/design.ui.brand.logo';
import { Link } from '@teambit/community.ui.footer.link';
import styles from './footer.module.scss';

export type FooterProps = {
  categoryList: CategoryProps[];
} & React.HTMLAttributes<HTMLDivElement>;

export function Footer({ categoryList, className }: FooterProps) {
  return (
    <div className={classNames(styles.footer, className)}>
      <div className={styles.footerLinks}>
        {categoryList.map((cat) => {
          return <Category {...cat} className={styles.footerCategory} />;
        })}
      </div>
      <div className={styles.bottom}>
        <Logo className={styles.logo} />
        <span>© 2021 Bit, Inc.</span>
        <Link text="Terms" href="https://bit.dev/Terms" external />
        <Link text="Privacy" href="#" />
      </div>
    </div>
  );
}
