import React from 'react';
import { UseCasesCardGrid } from '@teambit/community.ui.use-cases.use-cases-card-grid';
import { UseCases } from '@teambit/community.entity.use-cases';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Heading, Elements } from '@teambit/community.ui.heading';
import { Link } from '@teambit/design.ui.navigation.link';
import { Icon } from '@teambit/design.elements.icon';
import styles from './use-cases-section.module.scss';

export type UseCasesSectionProps = {
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

export function UseCasesSection({ useCases, title, href, linkText }: UseCasesSectionProps) {
  return (
    <WideColumn className={styles.UseCasesSection}>
      <div className={styles.heading}>
        <Heading element={Elements.H3} className={styles.title}>
          {title}
        </Heading>
        <Link href={href}>{linkText}</Link>
        <Icon of="right-arrow" className={styles.icon} />
      </div>
      <UseCasesCardGrid useCases={useCases} />
    </WideColumn>
  );
}
