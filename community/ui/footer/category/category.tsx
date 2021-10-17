import React from 'react';
import { Link, LinkProps } from '@teambit/community.ui.footer.link';
import styles from './category.module.scss';

export type CategoryProps = {
  /**
   * a category title to be rendered above the link list.
   */
  title: string;
  /**
   * a list of links to show in the category
   */
  links: LinkProps[];
} & React.HTMLAttributes<HTMLDivElement>;

export function Category({ title, links, ...rest }: CategoryProps) {
  return (
    <div {...rest}>
      <div className={styles.title}>{title}</div>
      {links.map((link) => {
        return (
          <Link className={styles.categoryLink} {...link} key={link.text} />
        );
      })}
    </div>
  );
}
