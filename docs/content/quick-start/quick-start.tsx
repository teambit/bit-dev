import React from 'react';
import { QuickStartLobby } from '@teambit/bit.quick-start';
import { quickStarts } from './featured-quick-starts';

export function DocsQuickStart() {
  return <QuickStartLobby quickStarts={quickStarts} />;
}
