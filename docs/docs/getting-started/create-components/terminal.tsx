import React from 'react';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';

export const BitCreateOutput = () => {
  return (
    <Terminal isOutput>
      {`1 component(s) were created

my-org.my-scope/ui/button
location: community/ui/button
env: teambit.react/react (set by template)`}
    </Terminal>
  );
};
