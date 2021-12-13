import React from 'react';
import WhatIsBitLong from './what-is-bit.mdx';

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
export function WhatIsBit() {
  return <WhatIsBitLong />;
}
