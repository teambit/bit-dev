import React from 'react';
import { ComponentID } from '@teambit/component-id';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import { ComponentThinkingProcess } from '@teambit/docs.ui.component-thinking-process';
import { ComponentShowcase } from '@teambit/community.component-showcase';
import PostComponents from './post-components.mdx';
import styles from './quick-start.module.scss';
import type { QuickStartComponent } from './quick-start';

export type ThinkingProcessProps = {
  components: QuickStartComponent[];
};

export function ThinkingProcess({ components }: ThinkingProcessProps) {
  return (
    <>
      <PostComponents />
      <ComponentThinkingProcess
        className={styles.thinkingProcess}
        steps={components.map((component) => {
          const id = ComponentID.fromString(component.id);
          return {
            id,
            content: component.content || (
              <div className={styles.step}>
                {component.intro}
                You can either fork the component.
                <CodeSnippet language="bash">{`bit fork ${id.toString()}`}</CodeSnippet>
                Or create a new component and use the code from the component below as a reference!
                <br />
                <CodeSnippet language="bash">{`bit create ${id.fullName}`}</CodeSnippet>
                {component.ending}
                <br />
                <ComponentShowcase componentId={id.toString()} />
              </div>
            ),
            open: false,
          };
        })}
      />
    </>
  );
}
