import React from 'react';
import { IconLink, IconLinkProps } from '@teambit/design.ui.navigation.icon-link';
import styles from './category.module.scss';

export type CategoryProps = {
  /**
   * a category title to be rendered above the link list.
   */
  title: string;
  /**
   * a list of links to show in the category
   */
  links: IconLinkProps[];
} & React.HTMLAttributes<HTMLDivElement>;

export function Category({ title, links, ...rest }: CategoryProps) {
  return (
    <div {...rest}>
      <div className={styles.title}>{title}</div>
      {links.map((link) => {
        return <IconLink className={styles.categoryLink} {...link} key={link.text} />;
      })}
    </div>
  );
}
