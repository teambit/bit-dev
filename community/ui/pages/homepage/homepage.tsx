import React from 'react';
import { Hero } from '@teambit/community.ui.hero';
import { clientLogos } from '@teambit/community.entity.images';
import { UseCasesSection } from '@teambit/community.ui.use-cases.use-cases-section';
import { FeaturesSection } from '@teambit/community.ui.features.features-section';
import { useCases } from '@teambit/community.entity.use-cases';
import { features } from '@teambit/community.entity.features';
import { LogoShowcase } from '@teambit/community.ui.logo-showcase';
import { StickyMenu } from '@teambit/community.ui.sticky-menu';
import styles from './homepage.module.scss';

export type HomepageProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Homepage({ ...rest }: HomepageProps) {
  return (
    <div {...rest}>
      <section>
        <div className={styles.grid}>
          <Hero />
          <FeaturesSection
            features={features}
            title="Better software is built in components"
          />
          <UseCasesSection
            useCases={useCases}
            title="That makes hard things simple."
            href="/"
            linkText="See more use cases"
          />
        </div>
        <div className={styles.imageStripSection}>
          <LogoShowcase images={clientLogos} />
        </div>
      </section>
      <StickyMenu
        links={[
          {
            href: '#compose',
            text: 'Compose'
          },
          {
            href: '#collaborate',
            text: 'Collaborate'
          },
          {
            href: '#release',
            text: 'Release'
          },
          {
            href: '#Standardize',
            text: 'Standardize'
          },
          {
            href: '#extend',
            text: 'Extend'
          }
        ]}
      />
    </div>
  );
}
