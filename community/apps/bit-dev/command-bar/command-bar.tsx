import React, { useState } from 'react';
import classnames from 'classnames';
import { useHotkeys } from 'react-hotkeys-hook';

import { textColumn } from '@teambit/base-ui.layout.page-frame';
import { Route } from '@teambit/docs.entities.docs-routes';
import { KeyCombo } from '@teambit/ui-foundation.ui.keycap';
import { CommandBar as BaseCommandBar } from '@teambit/explorer.ui.command-bar';

import { useRouteSearcher } from './route-searcher';
import styles from './command-bar.module.scss';

export function CommandBar({ routes }: { routes: Route[] }) {
  const searcher = useRouteSearcher(routes);
  const [visible, setVisible] = useState(false);

  useHotkeys('command+k', () => setVisible(true));
  useHotkeys('ctrl+k', () => setVisible(true));

  return (
    <div>
      <button type="button" className={styles.searchPlaceholder} onClick={() => setVisible(true)}>
        <div>search</div>
        <KeyCombo className={styles.keys}>mod+k</KeyCombo>
      </button>
      <BaseCommandBar
        className={classnames(textColumn, styles.commandBar)}
        // TODO - move limit to command bar
        searcher={(term, limit = 5) => searcher.search(term, limit)}
        visible={visible}
        onVisibilityChange={(next) => setVisible(next)}
      />
    </div>
  );
}
