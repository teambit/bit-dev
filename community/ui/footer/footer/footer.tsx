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
        {categoryList.map((category) => {
          return <Category {...category} key={category.title} className={styles.footerCategory} />;
        })}
      </div>
      <div className={styles.bottom}>
        <Logo className={styles.logo} />
        <span>© 2021 Cocycles, Ltd.</span>
        <Link text="Privacy" href="https://bit.cloud/resources/privacy" external />
      </div>
    </div>
  );
}
