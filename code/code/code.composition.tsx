import React, { useMemo } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ComponentDescriptor } from '@teambit/component-descriptor';
import { useScope, client as scopeClient } from './resolve-scope';

import { Code } from './code';

// TODO - find a way to render both compositions in overview without colliding.
// commented out because it changes the theme in monaco of both compositions.

// export const LightThemeCode = () => {
//   const component = useMemo(() => ComponentDescriptor.fromObject({ id: 'teambit.design/basic/button' }), []);
//   const scope = useScope(component?.scope);
//   const client = scopeClient(scope);
//   return (
//     <ApolloProvider client={client}>
//       <Code component={component} theme='light' />
//     </ApolloProvider>
//   );
// };

export const DarkThemeCode = () => {
  const component = useMemo(() => ComponentDescriptor.fromObject({ id: 'teambit.design/basic/button' }), []);
  const scope = useScope(component?.scope);
  const client = scopeClient(scope);
  return (
    <ApolloProvider client={client}>
      <Code component={component} theme='dark' />
    </ApolloProvider>
  );
};
