import React from 'react';
import { UseCaseCardGrid } from '@teambit/community.ui.use-case.use-case-card-grid';
import { UseCases } from '@teambit/community.entity.use-cases';
import { H3 } from '@teambit/design.ui.heading';
import { NativeNavLink } from '@teambit/base-ui.routing.native-nav-link';
import { Icon } from '@teambit/design.elements.icon';
import styles from './use-case-section.module.scss';

export type UseCaseSectionProps = {
  /**
   * An object of use cases with title and text and icon props
   */
  useCases: UseCases[];
  /**
   * Title of the use case section
   */
  title: string;
  /**
   * link text for the link to more use cases
   */
  linkText: string;
  /**
   * internal link to more use cases
   */
  href: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function UseCaseSection({
  useCases,
  title,
  href,
  linkText
}: UseCaseSectionProps) {
  return (
    <div className={styles.useCaseSection}>
      <div className={styles.heading}>
        <H3 className={styles.title}>{title}</H3>
        <NativeNavLink href={href} className={styles.link}>
          {linkText}
        </NativeNavLink>
        <Icon of="right-arrow" className={styles.icon} />
      </div>
      <UseCaseCardGrid useCases={useCases} />
    </div>
  );
}
