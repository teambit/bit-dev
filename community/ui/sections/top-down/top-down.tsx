import React, { ReactNode } from 'react';
import { TopDown as TopDownLayout, TopDownProps as TopDownLayoutProps } from '@teambit/design.ui.layouts.sections.top-down';
import { Heading } from '@teambit/community.ui.heading';
import { Subtitle } from '@teambit/design.ui.content.subtitle';
import styles from './top-down.module.scss';

export type TopDownProps = {
  /**
  * section title.
  */
  title: string,
  
  /**
   * section subtitle.
   */
  subtitle: string,

  /**
   * section content.
   */
  children: ReactNode
} & React.HTMLAttributes<HTMLDivElement>;

export function TopDown({ title, subtitle, children, className, ...rest }: TopDownProps) {
  return (
    <TopDownLayout {...rest} className={styles.topDown} header={<Header title={title} subtitle={subtitle} />}>
      {children}
    </TopDownLayout>
  );
}

function Header({ title, subtitle }) {
  return (
    <>
    <Heading>{title}</Heading>
    <Subtitle>{subtitle}</Subtitle>
    </>
  );
}
