import React from 'react';
import { SectionGroup } from '@teambit/design.ui.layouts.sections.section-group';
import { TopDown } from '@teambit/community.ui.sections.top-down';

export type DistributionProps = {
  /**
   * a text to be rendered in the component.
   */
  // text: string
};

export function Distribution({}: DistributionProps) {
  return (
    <SectionGroup>
      <TopDown title="Radical distribution" subtitle="Distribute monolithic applications to be composed out of independent components">
        dasdsa
      </TopDown>
    </SectionGroup>
  );
}
