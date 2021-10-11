import React from 'react';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';
import { Subtitle } from '@teambit/documenter.ui.sub-title';
import { ExternalLink } from '@teambit/design.ui.external-link';
import { Link } from '@teambit/design.ui.navigation.link';
import { Icon } from '@teambit/design.elements.icon';
import { PluginGroup } from '@teambit/community.ui.plugins.plugin-group';
import { ExploreSection } from '@teambit/community.ui.plugins.explore-section';
import { Heading, highlightClass } from '@teambit/community.ui.heading';
//import { Page } from '@teambit/community.ui.pages.page';
import { Page } from '@teambit/base-react.pages.page';
import { H2 } from '@teambit/design.ui.heading';
import { BubbleGraph, getValidId } from '@teambit/community.ui.graph.bubble-graph';
import styles from './plugins.module.scss';

export type PluginsProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Plugins({ ...rest }: PluginsProps) {
  return (
    <Page title="Bit / Explore Plugins" {...rest}>
      <ExploreSection
        title={
          <>
            Explore <span className={highlightClass}>Bit Plugins</span>
          </>
        }
        subtitle="Enhance and customize your development experience with dozens of official and community Plugins."
      />
      <WideColumn>
        <PluginGroup title="Dev environments">
          <ComponentCard id="teambit.react/react"></ComponentCard>
          <ComponentCard id="teambit.harmony/node"></ComponentCard>
          <ComponentCard id="teambit.angular/angular"></ComponentCard>
          <ComponentCard id="teambit.web-components/lit"></ComponentCard>
          <ComponentCard id="teambit.harmony/aspect"></ComponentCard>
        </PluginGroup>

        <PluginGroup title="Compiling">
          <ComponentCard id="teambit.typescript/typescript"></ComponentCard>
          <ComponentCard id="teambit.compilation/babel"></ComponentCard>
          <ComponentCard id="teambit.mdx/mdx"></ComponentCard>
        </PluginGroup>

        <PluginGroup title="Testing">
          <ComponentCard id="teambit.defender/jest"></ComponentCard>
          <ComponentCard id="teambit.defender/mocha"></ComponentCard>
        </PluginGroup>

        <PluginGroup title="Linting and Formatting">
          <ComponentCard id="teambit.defender/eslint"></ComponentCard>
          <ComponentCard id="teambit.defender/prettier"></ComponentCard>
        </PluginGroup>

        <PluginGroup title="Apps">
          <ComponentCard id="teambit.apps/nextjs"></ComponentCard>
          <ComponentCard id="teambit.apps/gatsby"></ComponentCard>
          <ComponentCard id="teambit.apps/docusaurus"></ComponentCard>
        </PluginGroup>
      </WideColumn>

      <Heading size="h2">Creating a plugin has never been easier</Heading>
    </Page>
  );
}
