import React from 'react';
import WhatIsBitShort from './what-is-bit-short.mdx';
import WhatIsBitLong from './what-is-bit.mdx';

// export enum Size {
//   XL = 'xl',
//   SM = 'sm',
// }

// export type WhatIsBitProps = {
//   size: 'xl' | 'sm';
// };

export function WhatIsBit({ size }) {
  if (size === 'sm') return <WhatIsBitShort />;
  return <WhatIsBitLong />;
}
