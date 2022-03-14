import React from 'react';
import { ComponentID } from '@teambit/component-id';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import { ComponentThinkingProcess } from '@teambit/docs.ui.component-thinking-process';
import { ComponentShowcase } from '@teambit/community.component-showcase';
import PostComponents from './post-components.mdx';
import styles from './quick-start.module.scss';

export type ThinkingProcessProps = {
  componentIds: string[];
};

export function ThinkingProcess({ componentIds }: ThinkingProcessProps) {
  const ids = componentIds.map((idStr) => ComponentID.fromString(idStr));
  return (
    <>
      <PostComponents />
      <ComponentThinkingProcess
        className={styles.thinkingProcess}
        steps={ids.map((id) => {
          return {
            id,
            content: (
              <div className={styles.step}>
                You can either fork the component.
                <CodeSnippet language="bash">{`bit fork ${id.toString()}`}</CodeSnippet>
                Or create a new component and use the code from the component below as a reference!
                <br />
                <CodeSnippet language="bash">{`bit create ${id.fullName}`}</CodeSnippet>
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
