import React, { ReactNode, useReducer } from 'react';
import { SidebarContext } from './sidebar-context';

export type SidebarProviderProps = {
  /**
   * children to be rendered within provider.
   */
  children: ReactNode;
};

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useReducer((x) => !x, false);
  return <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>;
}
