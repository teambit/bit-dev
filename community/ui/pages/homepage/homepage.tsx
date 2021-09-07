import React from 'react';
import { Hero } from '@teambit/community.ui.hero';
import { ImageStrip } from '@teambit/community.ui.images.image-strip';
import { clientLogos } from '@teambit/community.entity.images';
import { UseCaseSection } from '@teambit/community.ui.use-case.use-case-section';
import { useCases } from '@teambit/community.entity.use-cases';
import styles from './homepage.module.scss';

export type HomepageProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Homepage({ ...rest }: HomepageProps) {
  return (
    <div {...rest}>
      <div className={styles.grid}>
        <Hero />
        <UseCaseSection
          useCases={useCases}
          title="These are no longer a challenge"
          href="/"
          linkText="See more use cases"
        />
      </div>
      <div className={styles.imageStripSection}>
        <ImageStrip images={clientLogos} />
      </div>
    </div>
  );
}
