import React from 'react';
import classNames from 'classnames';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { ComponentCardGroup } from '@teambit/explorer.ui.gallery.component-card-group';
import { ExploreSection } from '@teambit/community.ui.plugins.explore-section';
import { CreateSection } from '@teambit/community.ui.plugins.create-section';
import { highlightClass } from '@teambit/community.ui.heading';
import { Page } from '@teambit/base-react.pages.page';
import { devEnvsMock, compilingMock, testingMock, lintingFormatingMock, appsMock } from './plugins.mock';
import styles from './plugins.module.scss';

export type PluginsProps = React.HTMLAttributes<HTMLDivElement>;

const pageDescription =
  'Enrich and extend your customized developer experience in Bit to develop, build, test and design components and applications with your favorite tools.';

export function Plugins({ ...props }: PluginsProps) {
  return (
    <Page title="Plugins | Bit" description={pageDescription} {...props}>
      <ExploreSection
        heading={
          <>
            Explore <span className={classNames(highlightClass, styles.highlightSafari)}>Endless Aspects of Bit</span>
          </>
        }
        subtitle="Aspects are component-driven plugins. Enhance and customize your development experience with dozens of official and community Aspects."
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
