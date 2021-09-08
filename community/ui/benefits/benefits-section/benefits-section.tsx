import React from 'react';
import { BenefitsCardGrid } from '@teambit/community.ui.benefits.benefits-card-grid';
import { Benefits } from '@teambit/community.entity.benefits';
import { H2 } from '@teambit/design.ui.heading';
import styles from './benefits-section.module.scss';

export type BenefitsSectionProps = {
  /**
   * An object of use cases with title and text and icon props
   */
  benefits: Benefits[];
  /**
   * Title of the use case section
   */
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function BenefitsSection({ title, benefits }: BenefitsSectionProps) {
  return (
    <div className={styles.benefitsSection}>
      <div className={styles.heading}>
        <H2 className={styles.title}>{title}</H2>
      </div>
      <BenefitsCardGrid benefits={benefits} />
    </div>
  );
}
