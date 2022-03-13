import React from 'react';
import { ComponentID } from '@teambit/component-id';
import { ComponentThinkingProcess } from '@teambit/docs.ui.component-thinking-process';
import { ComponentShowcase } from '@teambit/community.component-showcase';
import PostComponents from './post-components.mdx';

export type ThinkingProcessProps = {
  componentIds: string[];
};

export function ThinkingProcess({ componentIds }: ThinkingProcessProps) {
  const ids = componentIds.map((idStr) => ComponentID.fromString(idStr));
  return (
    <>
      <PostComponents />
      <ComponentThinkingProcess
        style={{ maxWidth: '80%', marginLeft: '9%' }}
        steps={ids.map((id, idx) => {
          return {
            id,
            content: (
              <div>
                <p>Fork the component:</p>
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
