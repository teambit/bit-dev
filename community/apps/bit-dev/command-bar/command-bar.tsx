import React, { useState } from 'react';
import classnames from 'classnames';
import { useHotkeys } from 'react-hotkeys-hook';

import { OptionButton } from '@teambit/design.ui.input.option-button';
import { textColumn } from '@teambit/base-ui.layout.page-frame';
import { Route } from '@teambit/docs.entities.docs-routes';
import { CommandBar as BaseCommandBar } from '@teambit/explorer.ui.command-bar';

import { useRouteSearcher } from './route-searcher';
import styles from './command-bar.module.scss';

export function CommandBar({ routes }: { routes: Route[] }) {
  const searcher = useRouteSearcher(routes);
  const [visible, setVisible] = useState(false);

  useHotkeys('command+k, ctrl+k', () => setVisible(true));

  return (
    <div>
      <OptionButton icon="magnifying" onClick={() => setVisible(true)} />

      <BaseCommandBar
        className={classnames(textColumn, styles.commandBar)}
        // TODO - move limit to command bar
        searcher={(term, limit = 5) => searcher.search(term, limit)}
        // visible
        visible={visible}
        onVisibilityChange={(next) => setVisible(next)}
      />
    </div>
  );
}
