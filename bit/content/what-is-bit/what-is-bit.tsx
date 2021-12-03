import React from 'react';
import WhatIsBitLong from './what-is-bit.mdx';
import WhatIsBitShort from './what-is-bit-short.mdx';
import WhatIsBitSmall from './what-is-bit-small.mdx';

export enum Size {
  SMALL,
  MEDIUM,
  LARGE
}

export type WhatIsBitProps = {
  size?: Size
};

export function WhatIsBit({ size }: WhatIsBitProps) {
  if (size === Size.SMALL) return <WhatIsBitSmall />;
  if (size === Size.MEDIUM) return <WhatIsBitShort />
  return <WhatIsBitLong />
}