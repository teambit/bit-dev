import React from 'react';
import classNames from 'classnames';
import { FeaturesCardGrid } from '@teambit/community.ui.features.features-card-grid';
import { Features } from '@teambit/community.entity.features';
import { Heading, Elements } from '@teambit/community.ui.heading';
import styles from './features-section.module.scss';

export type FeaturesSectionProps = {
  /**
   * An object of features with title and text and icon props
   */
  features: Features[];
  /**
   * Title of the use case section
   */
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function FeaturesSection({
  title,
  features,
  className
}: FeaturesSectionProps) {
  return (
    <div className={classNames(styles.featuresSection, className)}>
      <div className={styles.heading}>
      <Heading element={Elements.H3} className={styles.title}>{title}</Heading>
      </div>
      <FeaturesCardGrid features={features} />
    </div>
  );
}
