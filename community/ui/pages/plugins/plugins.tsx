import React from 'react';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';
import { Subtitle } from '@teambit/documenter.ui.sub-title';
import { ExternalLink } from '@teambit/design.ui.external-link';
import { Link } from '@teambit/design.ui.navigation.link';
import { Icon } from '@teambit/design.elements.icon';
import { PluginGroup } from '@teambit/community.ui.plugins.plugin-group';
import { Hero } from '@teambit/community.ui.plugins.hero';
import { Heading, highlightClass } from '@teambit/community.ui.heading';
import { Page } from '@teambit/community.ui.pages.page';
import { H2 } from '@teambit/design.ui.heading';
import { BubbleGraph, getValidId } from '@teambit/community.ui.graph.bubble-graph';
import styles from './plugins.module.scss';

export type PluginsProps = {
  /**
   * a text to be rendered in the component.
   */
  title?: string;

  abstract?: string;
};

export function Plugins({ title = ' Bit Plugins', abstract }: PluginsProps) {
  return (
    <Page title="Plugins">
      <Hero />

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

      <Heading size="h2">Creating a plugin has never been easier</Heading>
    </Page>
  );
}
