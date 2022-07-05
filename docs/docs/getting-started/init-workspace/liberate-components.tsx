import React from 'react';
import { FileExplorer } from '@teambit/community.ui.file-explorer';

const button = `import React, { ReactNode } from 'react';
import './styles.scss';

export const Button = ({ children }: ReactNode) => {
  return <Button className="button">{children}</Button>;
};
`;

const buttonStyle = `.button {
    background-color: #d5e1e3;
}
`;

const exportedButton = ` /* Components are consumed using their corresponding packages. 
See the 'Workspace Component Links' page, to learn more. */
export { Button } from '@my-org/my-scope.ui.button';`;

const beforeFiles = {
  'src/components/button.tsx': button,
  'src/components/styles.scss': buttonStyle,
};

const afterFiles = {
  'src/components/button.tsx': exportedButton,
  'my-scope/ui/button/button.tsx': button,
  'my-scope/ui/button/styles.scss': buttonStyle,
};

export const BeforeDecoupling = () => (
  <FileExplorer
    options={{
      contentFontSize: 13,
      fileTreeWidth: 350,
      isDirOpen: true,
      title: 'MY-PROJECT',
      wordWrap: 'off',
    }}
    files={beforeFiles}
    defaultFile="src/components/button.tsx"
  />
);

export const AfterDecoupling = () => (
  <FileExplorer
    options={{
      contentFontSize: 13,
      fileTreeWidth: 350,
      isDirOpen: true,
      title: 'MY-PROJECT',
      wordWrap: 'off',
    }}
    files={afterFiles}
    defaultFile="src/components/button.tsx"
  />
);
