import { createContext } from 'react';

export type CommunityHighlighterContextProps = {
  disabled: boolean;
  setDisabled: (disabled: boolean) => boolean | undefined;
};

export const CommunityHighlighterContext = createContext<CommunityHighlighterContextProps>({
  disabled: false,
  setDisabled: () => undefined,
});
