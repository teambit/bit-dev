import { Heading, Elements } from '@teambit/community.ui.heading';
import { MultiHighlighter, ExcludeHighlighter } from '@teambit/react.ui.component-highlighter';
import { ComponentID } from '@teambit/component-id';
import React, { ReactNode } from 'react';
import styles from './highlight-component.module.scss';

export type HighlightComponentProps = {
  /**
   * a node to be rendered in the special component.
   */
  children: ReactNode;

  /**
   * title for the highlight.
   */
  title?: string;

  /**
   * component ids to highlight. if defined, only the included component ids would be highlighted.
   */
  include?: ComponentID[];

  /**
   * component ids to exclude from being highlighted.
   */
  exclude?: ComponentID[];
};

export function HighlightComponent({ children, title }: HighlightComponentProps) {
  return (
    <MultiHighlighter
      bgColorHover="#C9C3F6"
      bgColor="#ECEAFF"
      watchMotion
      // @ts-ignore @Kutner - fix
      highlighterOptions={{ style: { fontSize: 8 } }}
    >
      <ExcludeHighlighter>
        {title ? (
          <Heading element={Elements.H6} className={styles.heading}>
            {title}
          </Heading>
        ) : (
          ''
        )}
      </ExcludeHighlighter>
      {children}
    </MultiHighlighter>
  );
}
