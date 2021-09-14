import React from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';

export type TerminalProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Terminal({ text }: TerminalProps) {
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`,
    'bit': () => `tagged components successfully`
  };

  return (
    <TerminalContextProvider>
      <ReactTerminal commands={commands} />
    </TerminalContextProvider>
  );
}
