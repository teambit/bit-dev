import React from 'react';
import { UseCasesCard } from '@teambit/community.ui.use-cases.use-cases-card';
import { UseCases } from '@teambit/community.entity.use-cases';
import styles from './use-cases-card-grid.module.scss';

export type UseCasesCardGridProps = {
  /**
   * An object of use cases with title and text and icon props
   */
  useCases: UseCases[];
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A section showing all the available use cases<br/>
 */
export function UseCasesCardGrid({ useCases, ...rest }: UseCasesCardGridProps) {
  return (
    <div className={styles.UseCasesCardGrid} {...rest}>
      {useCases.map((useCase) => (
        <UseCasesCard
          key={useCase.title}
          title={useCase.title}
          text={useCase.text}
          image={useCase.image}
          alt={useCase.alt}
          href={useCase.href}
        />
      ))}
    </div>
  );
}
