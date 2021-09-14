import React from 'react';
import classNames from 'classnames';
import { FeaturesCardGrid } from '@teambit/community.ui.features.features-card-grid';
import { Features } from '@teambit/community.entity.features';
import { H2 } from '@teambit/design.ui.heading';
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
        <H2 className={styles.title}>{title}</H2>
      </div>
      <FeaturesCardGrid features={features} />
    </div>
  );
}
