import React from 'react';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';
import { Subtitle } from '@teambit/documenter.ui.sub-title';
import { ExternalLink } from '@teambit/design.ui.external-link';
import { PluginGroup } from '@teambit/community.ui.plugins.plugin-group';
import { Heading } from '@teambit/community.ui.heading';
import { Page } from '@teambit/community.community.ui.pages.page';
import { H2 } from '@teambit/design.ui.heading'

export type PluginsProps = {
  /**
   * a text to be rendered in the component.
   */
  title?: string,

  abstract?: string;
};

export function Plugins({ title = 'Explore Bit Plugins', abstract }: PluginsProps) {
  return (
    <Page title="Plugins">
      <Heading>
        {title}
      </Heading>

      <Subtitle>
        Enhance and customize your development experience with dozens of official and community Plugins and create your own.
      </Subtitle>

      <ExternalLink href="https://bit.dev/components?env=aspect">Browse plugins</ExternalLink>
      <ExternalLink href="/docs/extending-bit/create-a-plugin">Create a new plugin</ExternalLink>


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

    </Page>
  );
}
