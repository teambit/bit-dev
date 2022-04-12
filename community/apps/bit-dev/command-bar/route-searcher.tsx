import React, { useRef } from 'react';
import classnames from 'classnames';
import { useNavigate, Navigator } from '@teambit/base-react.navigation.link';
import { ellipsis } from '@teambit/design.ui.styles.ellipsis';
import { Route } from '@teambit/docs.entities.docs-routes';
import { FuzzySearchItem, Searcher } from '@teambit/explorer.ui.command-bar';
import styles from './command-bar.module.scss';

export class RouteSearcher extends Searcher<Route, Route> {
  constructor(private options: { navigate: Navigator }) {
    super({ searchKeys: ['title', 'asbPath', 'description'] });
  }

  override toSearchResult = ({ item }: FuzzySearchItem<Route>) => {
    return {
      id: item.absPath,
      action: () => this.options.navigate(item.absPath),
      children: (
        <div className={styles.searchBoxItem}>
          <span className={classnames(ellipsis, styles.title)}>{item.title}</span>
          {item.description && <span className={classnames(ellipsis, styles.description)}>{item.description}</span>}
        </div>
      ),
    };
  };

  override toSearchableItem(item: Route) {
    return item;
  }
}

export function useRouteSearcher(routes: Route[]) {
  const searcherRef = useRef<RouteSearcher>();
  const navigate = useNavigate();
  if (!searcherRef.current) searcherRef.current = new RouteSearcher({ navigate });

  const searcher = searcherRef.current;
  searcher.update(routes);

  return searcher;
}
