import { createContext } from 'react';

export type UseSidebarContextType = {
  /**
   * primary color of theme.
   */
  isOpen?: boolean;
  setIsOpen?: () => void;
};

// export const UseSidebarContext = createContext({ isOpen: false });
export const UseSidebarContext = createContext<UseSidebarContextType>({
  isOpen: false,
  setIsOpen: () => undefined,
});
