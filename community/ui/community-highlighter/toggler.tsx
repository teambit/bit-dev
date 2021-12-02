import React from 'react';
import { Toggle } from '@teambit/design.ui.input.toggle';
import styles from './community-highlighter.module.scss';
import { useHighlighter } from './use-highlighter';

export function Toggler() {
  const { setDisabled, disabled } = useHighlighter();

  return (
    <div className={styles.inspect}>
      <span>Inspect</span>
      <Toggle onInputChanged={(e) => setDisabled(!e.target.checked)} checked={!disabled} />
    </div>
  );
}
