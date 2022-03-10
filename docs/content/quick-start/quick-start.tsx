import React from 'react';
import { QuickStart } from '@teambit/bit.quick-start';
import { quickStarts } from './featured-quick-starts';

export function DocsQuickStart() {
  return <QuickStart quickStarts={quickStarts} />;
}
