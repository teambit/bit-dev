import React, { ReactNode } from 'react';
import { WhatIsBit } from '@teambit/bit.content.what-is-bit';
import { ComponentID } from '@teambit/component-id';
import { centerColumn, wideColumn } from '@teambit/base-ui.layout.page-frame';
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
import { WorkspaceTemplate } from './workspace-template';

export type QuickStartComponent = {
  /**
   * id of the component. as a string.
   */
  id: string;

  /**
   * replace all contents. including the showcase.
   */
  content?: ReactNode;

  /**
   * intro node to render in the beginning
   */
  intro?: ReactNode;

  /**
   * text to use in the ending of the component walk through.
   */
  ending?: ReactNode;

  /**
   * text to be shown before fork.
   */
  fork?: ReactNode;

  /**
   * text to be shown next to create.
   */
  create?: ReactNode;
};

export type QuickStartNodeDesc = QuickStartComponent | string;

export type QuickStartProps = {
  /**
   * main component ID.
   */
  id: ComponentID;

  // temporary until properly accepting components in this api.
  mainComponent?: ReactNode;

  /**
   * intro node.
   */
  intro?: ReactNode;

  /**
   * children render below thinking process.
   */
  children?: ReactNode;

  /**
   * name of the quick start.
   */
  name: string;

  /**
   * default workspace name to use.
   */
  defaultWorkspaceName?: string;

  /**
   * default scope name to use.
   */
  defaultScopeName?: string;

  /**
   * array of components to show through the quick start.
   */
  components: QuickStartNodeDesc[];

  /**
   * the command for the workspace template. (bit new dot-bit workspace --aspect teambit.dot-bit/templates/dot-bit)
   */
  workspaceTemplate?: WorkspaceTemplate;

  /**
   * add a react Node before component creation steps.
   */
  beforeThinking?: ReactNode;

  /**
   * add a react node after the main component showcase.
   */
  showcaseComment?: string;
};

export function QuickStart({
  id,
  intro,
  defaultScopeName,
  defaultWorkspaceName,
  name,
  showcaseComment,
  workspaceTemplate,
  mainComponent,
  components,
  beforeThinking,
  children,
}: QuickStartProps) {
  const scopeName = defaultScopeName || `my-org.${name}`;
  const workspaceName = defaultWorkspaceName || `my-${name}`;
  const targetComponents = components?.map((component) => {
    if (typeof component === 'string') {
      return {
        id: component,
      };
    }
    return component;
  });
  const ids = targetComponents.map((component) => component.id.toString());
  return (
    <div>
      <div className={styles.sectionMargin}>{intro || <DefaultIntro />}</div>
      <ComponentShowcase className={wideColumn} componentId={id.toString()} preview={mainComponent} />
      <div className={styles.showcase}>
        {showcaseComment}
        <WhatIsBit />
        {/* <H3>Learn Bit</H3> */}
        <LearnCrossroad
          className={centerColumn}
          title="Thinking in components"
          description="Don't have time to give Bit a try? Not a developer? Understand component thinking quickly here!"
          link="/docs/thinking-in-components"
        />
      </div>
      <DefaultInstallation />
      <CreateWorkspace
        defaultScopeName={scopeName}
        defaultWorkspaceName={workspaceName}
        workspaceTemplateName={workspaceTemplate?.templateName || 'react'}
        aspect={workspaceTemplate?.componentId}
      />
      <Components />
      <ComponentCardDisplay componentIds={ids} />
      {/* <H3>Building the components</H3> */}
      {beforeThinking}
      <ThinkingProcess components={targetComponents} />
      {children}
      <Collaborate />
    </div>
  );
}
