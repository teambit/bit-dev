import React, { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
// import { ComponentCard } from '@teambit/explorer.ui.component-card';
// import { RelationsGraph } from '@teambit/graph.relations-graph';
import { ellipsis } from '@teambit/design.ui.styles.ellipsis';
import { PreviewPlugin } from '@teambit/explorer.plugins.preview-plugin';
import { ComponentID } from '@teambit/component-id';
import { ComponentDescriptor, AspectList } from '@teambit/component-descriptor';
import classNames from 'classnames';
import { Link } from '@teambit/base-react.navigation.link';
// import { GraphIcon } from './graph-icon';
import { CodeIcon } from './code-icon';
import { PreviewIcon } from './preview-icon';
import { Code, CodeProps } from '@teambit/code.code';
import { useScope, client as scopeClient } from './code';
import styles from './component-showcase.module.scss';

export type ComponentShowcaseProps = {
  /**
   * The components' id to showcase.
   */
  componentId: string;

  // /**
  //  * component to render. TODO: support this.
  //  */
  // component: ComponentType;

  preview?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentShowcase({ componentId, preview, className, ...rest }: ComponentShowcaseProps) {
  const [selectedTab, setSelectedTab] = React.useState<'preview' | 'graph' | 'code'>('preview');
  const id = ComponentID.fromString(componentId || '');
  const component = new ComponentDescriptor(id as any, {} as AspectList);

  return (
    <div className={classNames(className)} {...rest}>
      <div className={styles.tab}>
        <Link external href={computeLink(id)} className={styles.componentId}>
          <span className={ellipsis}>{componentId}</span>
        </Link>
        <div className={styles.showcaseTabs}>
          <span
            className={classNames(styles.tabLinks, selectedTab === 'preview' && styles.active)}
            onClick={() => setSelectedTab('preview')}
          >
            <PreviewIcon /> <span>Preview</span>
          </span>
          {/* <span
          className={classNames(styles.tabLinks, selectedTab === 'graph' && styles.active)}
          onClick={() => setSelectedTab('graph')}
          >
          <GraphIcon /> Graph
        </span> */}
          <span
            className={classNames(styles.tabLinks, selectedTab === 'code' && styles.active)}
            onClick={() => setSelectedTab('code')}
          >
            <CodeIcon /> <span>Code</span>
          </span>
        </div>
      </div>

      <div className={styles.tabContent}>
        {/* @ts-ignore - update ComponentDescriptor in preview-plugin */}
        {selectedTab === 'preview' && (preview || <PreviewPlugin component={component} style={{ height: 500 }} />)}
        {selectedTab === 'code' && <CodeTab component={component} className={styles.showcaseCodeTab} />}
        {/* {selectedTab === "graph" && <RelationsGraph seeders={[component]} />} */}
      </div>
    </div>
  );
}

// TODO: need for a component.
function computeLink(id: ComponentID) {
  const baseUrl = 'https://bit.cloud';
  const [owner, scope] = id.scope.split('.');

  return [baseUrl, owner, scope, id.fullName].join('/');
}

export function CodeTab({ component, ...rest }: CodeProps) {
  // TODO - find a better way to resolve scope hash?
  const scope = useScope(component?.scope);
  const client = scopeClient(scope);
  return (
    <ApolloProvider client={client}>
      <Code component={component} {...rest} />
    </ApolloProvider>
  );
}
