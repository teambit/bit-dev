import React from 'react';
import { LeftRight } from '@teambit/design.ui.layouts.sections.left-right';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { ComponentCardGroup } from '@teambit/explorer.ui.gallery.component-card-group';
import WhatIsBitLeft from './what-is-bit-qs-left.mdx';
import WhatIsBitBottom from './what-is-bit-qs-bottom.mdx';
import WhatIsBitTop from './what-is-bit-qs-top.mdx';
import { bitComponent } from './bit-component';
import styles from './what-is-bit-qs.module.scss';

export const WhatIsBitQuickStart = () => {
  return (
    <WideColumn>
      <WhatIsBitTop />
      <LeftRight
        className={styles.leftRight}
        left={<WhatIsBitLeft />}
        right={<ComponentCardGroup components={bitComponent} />}
      />
      <WhatIsBitBottom />
    </WideColumn>
  );
};
