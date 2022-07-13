import React from "react";
import { Hero } from "@teambit/community.ui.hero";
import { clientLogos } from "@teambit/community.entity.images";
import { UseCasesSection } from "@teambit/community.ui.use-cases.use-cases-section";
import { FeaturesSection } from "@teambit/community.ui.features.features-section";
import { ComponentDistributionSection } from "@teambit/community.ui.sections.component-distribution";
import { componentsMock } from "@teambit/community.entity.compnent-distribution-graph";
import { useCases } from "@teambit/community.entity.use-cases";
import { features } from "@teambit/community.entity.features";
import { mockBubbleGraph } from "@teambit/community.entity.graph.bubble-graph";
import { excludeHighlighterAtt } from "@teambit/react.ui.component-highlighter";
import { LogoShowcase } from "@teambit/community.ui.logo-showcase";
// import { StickyMenu } from '@teambit/community.ui.sticky-menu';
import { Page } from "@teambit/base-react.pages.page";
// import { Distribution } from '@teambit/community.ui.homepage.sections.distribution';
// import { Standardization } from '@teambit/community.ui.homepage.sections.standardization';
// import { Autonomy } from '@teambit/community.ui.homepage.sections.autonomy';
// import { Collaboration } from '@teambit/community.ui.homepage.sections.collaboration';
// import { Extendability } from '@teambit/community.ui.homepage.sections.extendability';
// import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import styles from "./homepage.module.scss";

export type HomepageProps = {} & React.HTMLAttributes<HTMLDivElement>;

// we need more logos to get the effect of an endless animation. duplicated the list for now
const logoList = [...clientLogos, ...clientLogos];

const pageDescription =
  "Bit is the leading toolchain for component-driven development. Forget monolithic apps and distribute to component-driven software. Build like the world’s best teams.";

// must be static!
const bubbles = mockBubbleGraph();
const distributionComponents = componentsMock();

export function Homepage({ ...rest }: HomepageProps) {
  return (
    <Page
      title="Bit - Component driven development"
      description={pageDescription}
      {...rest}
    >
      <section>
        <div className={styles.grid}>
          <Hero bubbles={bubbles} {...excludeHighlighterAtt} />
          <ComponentDistributionSection
            title="From monolithic to composable software"
            components={distributionComponents}
          />
          <FeaturesSection
            features={features}
            title="Build better software with components"
          />
          <UseCasesSection
            useCases={useCases}
            title="Make hard things simple"
            href="/docs/quick-start"
            linkText="See more use cases"
          />
        </div>
        <div className={styles.imageStripSection}>
          <LogoShowcase className={styles.imgStrip} images={logoList} />
        </div>
      </section>
      {/* <WideColumn>
        <StickyMenu
          links={[
            {
              href: '#distribution',
              text: 'Distribution',
            },
            {
              href: '#collaboration',
              text: 'Collaboration',
            },
            {
              href: '#standardization',
              text: 'Standardization',
            },
            {
              href: '#Standardize',
              text: 'Autonomy',
            },
            {
              href: '#extend',
              text: 'Extendability',
            },
          ]}
        />
      </WideColumn> */}
      {/* <Distribution />
      <Collaboration />
      <Standardization />
      <Autonomy />
      <Extendability /> */}
    </Page>
  );
}
