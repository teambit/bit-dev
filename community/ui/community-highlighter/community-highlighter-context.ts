import { createContext } from 'react';

export type CommunityHighlighterContextProps = {
  disabled: boolean;
  setDisabled: () => boolean | undefined;
};

export const CommunityHighlighterContext = createContext<CommunityHighlighterContextProps>({
  disabled: false,
  setDisabled: () => undefined,
});
