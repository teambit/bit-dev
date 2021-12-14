import React from 'react';
import WhatIsBitLong from './what-is-bit.mdx';
import WhatIsBitShort from './what-is-bit-short.mdx';
import WhatIsBitSmall from './what-is-bit-small.mdx';

// export enum Size {
//   SMALL,
//   MEDIUM,
//   LARGE
// }

// export type WhatIsBitProps = {
//   size?: Size;
// };

// @TODO Ran mdx don't support mdx type with typescript.
// eslint-disable-next-line react/prop-types
export function WhatIsBit({ size = 'LARGE' }) {
  if (size === 'SMALL') return <WhatIsBitSmall />;
  if (size === 'MEDIUM') return <WhatIsBitShort />;
  return <WhatIsBitLong />;
}