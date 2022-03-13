import React from 'react';

import { ColorSchema, SchemaTestPage } from '@teambit/design.themes.color-schema';
import { LightTheme } from './light-theme';
import { useTheme } from '@teambit/design.themes.base-theme';

export const LightSchema = () => {
  return (
    <LightTheme>
      <ShowTokens />
    </LightTheme>
  );
};

export const TestPage = () => {
  return (
    <LightTheme>
      <SchemaTestPage />
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
