import React from 'react';
import { Hero } from '@teambit/community.ui.hero';
import { ImageStrip } from '@teambit/community.ui.images.image-strip';
import { clientLogos } from '@teambit/community.entity.images';
import { UseCaseSection } from '@teambit/community.ui.use-case.use-case-section';
import { BenefitsSection } from '@teambit/community.ui.benefits.benefits-section';
import { useCases } from '@teambit/community.entity.use-cases';
import { benefits } from '@teambit/community.entity.benefits';
import styles from './homepage.module.scss';

export type HomepageProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Homepage({ ...rest }: HomepageProps) {
  return (
    <div {...rest}>
      <section>
        <div className={styles.grid}>
          <Hero />
          <BenefitsSection
            benefits={benefits}
            title="These are no longer a challenge"
          />
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
      </section>
    </div>
  );
}
