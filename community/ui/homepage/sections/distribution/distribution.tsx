import React from 'react';
import { SectionGroup } from '@teambit/design.ui.layouts.sections.section-group';
import { TopDown } from '@teambit/community.ui.sections.top-down';
import { LeftRight } from '@teambit/community.ui.sections.left-right';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';

export type DistributionProps = {
  /**
   * a text to be rendered in the component.
   */
  // text: string
};

export function Distribution({}: DistributionProps) {
  return (
    <WideColumn>
      <SectionGroup>
        <TopDown title="Radical distribution" subtitle="Distribute monolithic applications to be composed out of independent components">
          dasdsa
        </TopDown>
        <LeftRight title="Hey there" text="hey there">
          Yoni here.
        </LeftRight>
      </SectionGroup>
    </WideColumn>
  );
}
