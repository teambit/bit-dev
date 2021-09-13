import React from 'react';
import { Hero } from '@teambit/community.ui.hero';
import { clientLogos } from '@teambit/community.entity.images';
import { UseCasesSection } from '@teambit/community.ui.use-cases.use-cases-section';
import { FeaturesSection } from '@teambit/community.ui.features.features-section';
import { useCases } from '@teambit/community.entity.use-cases';
import { features } from '@teambit/community.entity.features';
import styles from './homepage.module.scss';
import { LogoShowcase } from '@teambit/community.ui.logo-showcase';

export type HomepageProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Homepage({ ...rest }: HomepageProps) {
  return (
    <div {...rest}>
      <section>
        <div className={styles.grid}>
          <Hero />
          <FeaturesSection
            features={features}
            title="Build Better. Build Scalable."
          />
          <UseCasesSection
            useCases={useCases}
            title="Make hard things simple."
            href="/"
            linkText="See more use cases"
          />
        </div>
        <div className={styles.imageStripSection}>
          <LogoShowcase images={clientLogos} />
        </div>
      </section>
    </div>
  );
}
