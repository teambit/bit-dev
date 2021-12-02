import { useContext } from 'react';
import { CommunityHighlighterContext } from './community-highlighter-context';

/**
 * defining hook return types.
 */
export function useHighlighter() {
  return useContext(CommunityHighlighterContext);
}
