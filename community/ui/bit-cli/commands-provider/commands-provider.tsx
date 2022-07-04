import React, { ReactNode, createContext } from 'react';
import type { RawCommand } from './command';

export type CommandsProviderProps = {
  rawCommands: RawCommand[];
  children: ReactNode | ReactNode[];
};

export const CommandsContext = createContext<RawCommand[]>([] as RawCommand[]);

export function CommandsProvider({ rawCommands, children }: CommandsProviderProps) {
  return <CommandsContext.Provider value={rawCommands}>{children}</CommandsContext.Provider>;
}
