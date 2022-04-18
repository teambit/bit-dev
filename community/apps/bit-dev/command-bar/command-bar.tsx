import React, { useState } from 'react';
import classnames from 'classnames';
import { useHotkeys } from 'react-hotkeys-hook';

import { OptionButton } from '@teambit/design.ui.input.option-button';
import { textColumn } from '@teambit/base-ui.layout.page-frame';
import { Tooltip } from '@teambit/design.ui.tooltip';
import { KeyCombo } from '@teambit/ui-foundation.ui.keycap';
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
      <Tooltip content={<SearchTooltip />}>
        <span>
          <OptionButton icon="magnifying" onClick={() => setVisible(true)} />
        </span>
      </Tooltip>

      <BaseCommandBar
        className={classnames(textColumn, styles.commandBar)}
        searcher={searcher.search}
        visible={visible}
        onVisibilityChange={(next) => setVisible(next)}
      />
    </div>
  );
}

function SearchTooltip() {
  return (
    <div className={styles.keys}>
      search <KeyCombo>mod+k</KeyCombo>
    </div>
  );
}
