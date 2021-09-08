import React from 'react';
import { BenefitsCard } from '@teambit/community.ui.benefits.benefits-card';
import { Benefits } from '@teambit/community.entity.benefits';
import styles from './benefits-card-grid.module.scss';

export type BenefitsCardGridProps = {
  /**
   * An object of use cases with title and text and icon props
   */
  benefits: Benefits[];
} & React.HTMLAttributes<HTMLDivElement>;

export function BenefitsCardGrid({ benefits, ...rest }: BenefitsCardGridProps) {
  return (
    <div className={styles.benefitsCardGrid} {...rest}>
      {benefits.map((benefit) => (
        <BenefitsCard
          key={benefit.title}
          title={benefit.title}
          text={benefit.text}
          image={benefit.image}
          alt={benefit.alt}
        />
      ))}
    </div>
  );
}
