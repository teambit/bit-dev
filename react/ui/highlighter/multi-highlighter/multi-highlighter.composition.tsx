import React, { ButtonHTMLAttributes } from 'react';
// import { EnterpriseOffering } from '@teambit/evangelist.pages.enterprise-offering';
import type { ComponentMeta } from '@teambit/react.babel.bit-react-transformer';
import { MultiHighlighter } from './multi-highlighter';

//  mocked component
//  TODO - export from element-highlighter
function ButtonComponent({ children }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button">{children}</button>;
}

// eslint-disable-next-line no-underscore-dangle
ButtonComponent.__bit_component = {
  // could use a non-bit-id to render the "default" bubble
  id: 'teambit.base-ui/input/button',
} as ComponentMeta;

export const Preview = () => {
  return (
    <MultiHighlighter style={{ padding: 40 }}>
      <ButtonComponent>hover here</ButtonComponent>
      <br />
      <br />
      <br />
      <ButtonComponent>also here</ButtonComponent>
    </MultiHighlighter>
  );
};

export const CustomColors = () => {
  return (
    <MultiHighlighter
      style={{ padding: 40, color: 'yellow' }}
      bgColor="cornflowerblue"
      bgColorHover="blue"
      bgColorActive="DarkSlateBlue"
    >
      <ButtonComponent>hover here</ButtonComponent>
      <br />
      <br />
      <br />
      <ButtonComponent>also here</ButtonComponent>
    </MultiHighlighter>
  );
};

// export const HighlightingAllElementsInTheEnterprisePage = () => {
//   return (
//     <MultiHighlighter>
//       <EnterpriseOffering style={{ height: 300 }} />
//     </MultiHighlighter>
//   );
// };
