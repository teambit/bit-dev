import { useLocalStorage } from '@teambit/community.ui.hooks.use-local-storage';

/**
 * defining hook return types.
 */

export function useHighlighter() {
  const [disabled, setDisabled] = useLocalStorage('disabled', false);

  return [
    /**
     * determine whether highlighter.
     */
    disabled,
    () => {
      setDisabled(true);
    },
  ];
}
