import React from 'react';
import { Hero } from '@teambit/community.ui.hero';
import { clientLogos } from '@teambit/community.entity.images';
import { UseCasesSection } from '@teambit/community.ui.use-cases.use-cases-section';
import { FeaturesSection } from '@teambit/community.ui.features.features-section';
import { ComponentDistributionSection } from '@teambit/community.ui.sections.component-distribution';
import  { componentsMock } from '@teambit/community.entity.compnent-distribution-graph';
import { useCases } from '@teambit/community.entity.use-cases';
import { features } from '@teambit/community.entity.features';
import { mockBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import { LogoShowcase } from '@teambit/community.ui.logo-showcase';
import { StickyMenu } from '@teambit/community.ui.sticky-menu';
import { Page } from '@teambit/base-react.pages.page';
import styles from './homepage.module.scss';

export type HomepageProps = {} & React.HTMLAttributes<HTMLDivElement>;

// we need more logos to get the effect of an endless animation. duplicated the list for now
const logoList = [...clientLogos, ...clientLogos];

export function Homepage({ ...rest }: HomepageProps) {
  return (
    <Page title="Bit: Component build and collaboration framework" {...rest}>
      <section>
        <div className={styles.grid}>
          <Hero bubbles={mockBubbleGraph()} />
          <ComponentDistributionSection title="Build components, compose apps" />
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
          <LogoShowcase className={styles.imgStrip} images={logoList} />
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
    </Page>
  );
}
