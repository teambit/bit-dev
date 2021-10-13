import React from 'react';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';
import { PluginGroup } from '@teambit/community.ui.plugins.plugin-group';
import { ExploreSection } from '@teambit/community.ui.plugins.explore-section';
import { CreateSection } from '@teambit/community.ui.plugins.create-section';
import { mockExplorePluginsGraph, mockCreatePluginsGraph } from '@teambit/community.ui.plugins.bubble-graph-mocks';
import { highlightClass } from '@teambit/community.ui.heading';
import { Page } from '@teambit/base-react.pages.page';
import { ComponentBubbleNonInteractive } from '@teambit/community.ui.graph.component-bubble-non-interactive';
import styles from './plugins.module.scss';

export type PluginsProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Plugins({ ...rest }: PluginsProps) {
  return (
    <Page title="Bit / Plugins" {...rest}>
      <ExploreSection
        heading={
          <>
            Explore <span className={highlightClass}>Bit Plugins</span>
          </>
        }
        subtitle="Enhance and customize your development experience with dozens of official and community Plugins."
        Node={ComponentBubbleNonInteractive}
        nodes={mockExplorePluginsGraph()}
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

      <CreateSection
        heading={
          <>
            Create a new plugin <br />
            <span className={highlightClass}>in minutes</span>
          </>
        }
        subtitle="Bit is extremly extendible and you can add any tool or functionality in minutes and using over 800 available APIs. So what will you make?"
        Node={ComponentBubbleNonInteractive}
        nodes={mockCreatePluginsGraph()}
        className={styles.createSection}
      />
    </Page>
  );
}
