import { useContext } from 'react';
import { CommandsContext } from './commands-provider';
import { getCommand } from './get-command';
import type { Command } from './command';

export const useCommand = (commandName: string): Command | null => {
  const rawCommands = useContext(CommandsContext);
  const parsedCommand = getCommand(rawCommands, commandName);
  if (!parsedCommand) return null;
  return parsedCommand;
};
