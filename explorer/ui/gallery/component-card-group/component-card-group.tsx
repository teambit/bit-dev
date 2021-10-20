import React from 'react';
import { H2 } from '@teambit/design.ui.heading';
import { ComponentGrid } from '@teambit/explorer.ui.gallery.component-grid';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';
import type { ComponentCardProps } from '@teambit/explorer.ui.gallery.component-card';

export type ComponentCardGroupProps = {
  /**
   * title for the group.
   */
  title?: React.ReactNode;

  /**
   * array of components.
   */
  components: ComponentCardProps[];
};

export function ComponentCardGroup({ title, components, ...rest }: ComponentCardGroupProps) {
  return (
    <div {...rest}>
      {title && <H2>{title}</H2>}
      <ComponentGrid>
        {components.map((component, index) => {
          return <ComponentCard key={index} {...component} />;
        })}
      </ComponentGrid>
    </div>
  );
}
