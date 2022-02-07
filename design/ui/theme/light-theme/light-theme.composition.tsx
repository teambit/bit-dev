import React from 'react';

import { ColorSchema } from '@teambit/design.themes.color-schema';
import { LightTheme } from './light-theme';
import { useTheme } from '@teambit/design.ui.theme.base-theme';

export const LightSchema = () => {
  return (
    <LightTheme>
      <ShowTokens />
    </LightTheme>
  );
};

// need a separate component to use react context
function ShowTokens() {
  const theme = useTheme();
  const tokens = Object.entries(theme).map(([name, value]: [string, string]) => ({
    name,
    value,
  }));

  return <ColorSchema tokens={tokens} />;
}
