import React, { ReactNode } from 'react';
import { LeftRight as LeftRightLayout } from '@teambit/design.ui.layouts.sections.left-right';
import { Heading, Elements } from '@teambit/community.ui.heading';
import { Subtitle } from '@teambit/design.ui.content.subtitle';

export type LeftRightProps = {
  /**
   * section title.
   */
  title: string,

  /**
   * section text.
   */
  text: string,

  /**
   * content of the section.
   */
  children: ReactNode
};

export function LeftRight({ text, title, children }: LeftRightProps) {
  return (
    <LeftRightLayout
      left={<Left text={text} title={title} />}
      right={children}
    />
  );
}

function Left({ title, text }) {
  return (
    <>
      <Heading element={Elements.H3} size={Elements.H3}>{title}</Heading>
      <Subtitle>{text}</Subtitle>
    </>
  );
}
