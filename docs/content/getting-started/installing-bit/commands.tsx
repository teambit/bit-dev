import React from 'react';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';

export const InstallBitCmd = () => <Terminal>npx @teambit/bvm install</Terminal>;
export const UpdateBitCmd = () => <Terminal>npx @teambit/bvm upgrade</Terminal>;
