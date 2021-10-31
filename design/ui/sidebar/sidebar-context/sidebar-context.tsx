import { createContext } from 'react';

export type SidebarContextType = {
  /**
   * primary color of theme.
   */
  isOpen?: boolean;
  setIsOpen?: () => void;
};

// export const SidebarContext = createContext({ isOpen: false });
export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => undefined,
});
