import React, { ReactNode } from 'react';
import { WhatIsBit } from '@teambit/bit.content.what-is-bit';
import { ComponentID } from '@teambit/component-id';
import { H3 } from '@teambit/design.ui.heading';
import { ComponentShowcase } from '@teambit/community.component-showcase';
import { LearnCrossroad } from '@teambit/bit.quick-start.learn-crossroad';
import DefaultIntro from './intro.mdx';
import DefaultInstallation from './installation.mdx';
import styles from './quick-start.module.scss';

export type QuickStartProps = {
  id: ComponentID;
  intro?: ReactNode;
  children?: ReactNode;
};

export function QuickStart({ id, intro }: QuickStartProps) {
  return (
    <>
      <div className={styles.sectionMargin}>{intro || <DefaultIntro />}</div>
      <ComponentShowcase componentId={id.toString()} />
      <div className={styles.showcase}>
        <WhatIsBit />
        {/* <H3>Learn Bit</H3> */}
        <LearnCrossroad
          style={{ maxWidth: '80%', marginLeft: '9%' }}
          title="Thinking in components"
          description="Don't have time to try Bit out? Learn quickly how to think in components"
          link="http://google.com"
        />
      </div>
      <DefaultInstallation />
    </>
  );
}
