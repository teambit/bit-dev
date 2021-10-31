import { createContext } from 'react';

export type SidebarContextType = {
  /**
   * is sidebar open
   */
  isOpen?: boolean;
  /**
   * toggle sidebar
   */
  setIsOpen?: () => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => undefined,
});
