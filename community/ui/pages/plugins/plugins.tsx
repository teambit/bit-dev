import React from 'react';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { ComponentCardGroup } from '@teambit/explorer.ui.gallery.component-card-group';
import { ExploreSection } from '@teambit/community.ui.plugins.explore-section';
import { CreateSection } from '@teambit/community.ui.plugins.create-section';
import { highlightClass } from '@teambit/community.ui.heading';
import { Page } from '@teambit/base-react.pages.page';
import { devEnvsMock, compilingMock, testingMock, lintingFormatingMock, appsMock } from './plugins.mock';

export type PluginsProps = React.HTMLAttributes<HTMLDivElement>;

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
        <ComponentCardGroup title="Dev environments" components={devEnvsMock} />
        <ComponentCardGroup title="Compiling" components={compilingMock} />
        <ComponentCardGroup title="Testing" components={testingMock} />
        <ComponentCardGroup title="Linting and Formatting" components={lintingFormatingMock} />
        <ComponentCardGroup title="Apps" components={appsMock} />
      </WideColumn>
      <CreateSection
        heading={
          <>
            Create a new plugin <br />
            <span className={highlightClass}>in minutes</span>
          </>
        }
        subtitle="Bit is extremly extendible and you can add any tool or functionality in minutes and using over 800 available APIs. So what will you make?"
      />
    </Page>
  );
}
