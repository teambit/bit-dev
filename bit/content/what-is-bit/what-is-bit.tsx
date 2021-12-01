import React from 'react';
import WhatIsBitShort from './what-is-bit-short.mdx';
import WhatIsBitLong from './what-is-bit.mdx';

export enum Size {
  XL = 'xl',
  SM = 'sm',
}

export type WhatIsBitProps = {
  size: Size;
};

export function WhatIsBit({ size }: WhatIsBitProps) {
  if (size === Size.SM) return <WhatIsBitShort />;
  return <WhatIsBitLong />;
}
