import React, { ReactNode, useReducer } from 'react';
import { UseSidebarContext } from './use-sidebar-context';

export type UseSidebarProviderProps = {
  /**
   * children to be rendered within provider.
   */
  children: ReactNode;
};

export function UseSidebarProvider({ children }: UseSidebarProviderProps) {
  const [isOpen, setIsOpen] = useReducer((x) => !x, false);
  return <UseSidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</UseSidebarContext.Provider>;
}
