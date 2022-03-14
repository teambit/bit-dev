import React, { ReactNode } from 'react';
import { WhatIsBit } from '@teambit/bit.content.what-is-bit';
import { ComponentID } from '@teambit/component-id';
import { H3 } from '@teambit/design.ui.heading';
import { ComponentShowcase } from '@teambit/community.component-showcase';
import { LearnCrossroad } from '@teambit/bit.quick-start.learn-crossroad';
import { ComponentCardDisplay } from '@teambit/components.blocks.component-card-display';
import DefaultIntro from './intro.mdx';
import DefaultInstallation from './installation.mdx';
import Components from './components.mdx';
import { CreateWorkspace } from './create-workspace';
import { ThinkingProcess } from './component-thinking-process';
import Collaborate from './collaborate.mdx';
import styles from './quick-start.module.scss';

export type QuickStartProps = {
  id: ComponentID;
  intro?: ReactNode;
  children?: ReactNode;
  name: string;
  defaultWorkspaceName?: string;
  defaultScopeName?: string;
  components?: string[];
};

export function QuickStart({ id, intro, defaultScopeName, defaultWorkspaceName, name, components }: QuickStartProps) {
  const scopeName = defaultScopeName || `my-org.${name}`;
  const workspaceName = defaultWorkspaceName || `my-${name}`;
  const allComponents = [id.toString()].concat(components || []);

  return (
    <>
      <div className={styles.sectionMargin}>{intro || <DefaultIntro />}</div>
      <ComponentShowcase componentId={id.toString()} />
      <div className={styles.showcase}>
        <WhatIsBit />
        {/* <H3>Learn Bit</H3> */}
        <LearnCrossroad
          style={{ maxWidth: '80%', marginLeft: '9%' }}
          title="Thinking in components"
          description="Don't have time to give Bit a try? Not a developer? Understand component thinking quickly here!"
          link="/docs/thinking-in-components"
        />
      </div>
      <DefaultInstallation />
      <CreateWorkspace
        defaultScopeName={scopeName}
        defaultWorkspaceName={workspaceName}
        workspaceTemplateName="react"
      />
      <Components />
      <ComponentCardDisplay componentIds={allComponents} />
      {/* <H3>Building the components</H3> */}
      <ThinkingProcess componentIds={allComponents} />
      <Collaborate />
    </>
  );
}
