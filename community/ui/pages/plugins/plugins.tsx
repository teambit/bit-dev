import React from 'react';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';
import { PluginGroup } from '@teambit/community.ui.plugins.plugin-group';
import { ExploreSection } from '@teambit/community.ui.plugins.explore-section';
import { CreateSection } from '@teambit/community.ui.plugins.create-section';
import { highlightClass } from '@teambit/community.ui.heading';
import { Page } from '@teambit/base-react.pages.page';
import { devEnvsMock, compilingMock, testingMock, lintingFormatingMock, appsMock } from './plugins.mock';
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
      />
      <WideColumn>
        <PluginGroup title="Dev environments">
          {devEnvsMock.map((item, index) => (
            <ComponentCard key={index} {...item} />
          ))}
        </PluginGroup>

        <PluginGroup title="Compiling">
          {compilingMock.map((item, index) => (
            <ComponentCard key={index} {...item} />
          ))}
        </PluginGroup>

        <PluginGroup title="Testing">
          {testingMock.map((item, index) => (
            <ComponentCard key={index} {...item} />
          ))}
        </PluginGroup>

        <PluginGroup title="Linting and Formatting">
          {lintingFormatingMock.map((item, index) => (
            <ComponentCard key={index} {...item} />
          ))}
        </PluginGroup>

        <PluginGroup title="Apps">
          {appsMock.map((item, index) => (
            <ComponentCard key={index} {...item} />
          ))}
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
        className={styles.createSection}
      />
    </Page>
  );
}
