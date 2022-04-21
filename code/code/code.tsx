import React, { useCallback, useState, useMemo } from 'react';
import classNames from 'classnames';
import Editor from '@monaco-editor/react';

import { FolderTreeNode } from '@teambit/ui-foundation.ui.tree.folder-tree-node';
import { TreeNodeProps } from '@teambit/base-ui.graph.tree.recursive-tree';
import { useFileContent } from '@teambit/code.ui.queries.get-file-content';
import { Label } from '@teambit/documenter.ui.label';
import { useCode } from '@teambit/code.ui.queries.get-component-code';
import { SplitPane, Pane, Layout, SplitPaneProps } from '@teambit/base-ui.surfaces.split-pane.split-pane';
import { HoverSplitter } from '@teambit/base-ui.surfaces.split-pane.hover-splitter';
import { ComponentDescriptor } from '@teambit/component-descriptor';
import { FileTreePanel } from '@teambit/code.panels.file-tree';
import { TreeNode } from './tree-node';

import styles from './code.module.scss';

// a translation list of specific monaco languages that are not the same as their file ending.
const languages = {
  ts: 'typescript',
  tsx: 'typescript',
  js: 'javascript',
  jsx: 'javascript',
  mdx: 'markdown',
  md: 'markdown',
};

export type CodeProps = {
  /**
   * the component
   */
  component: ComponentDescriptor;
  /**
   * theme
   */
  theme?: 'light' | 'dark';
} & Omit<SplitPaneProps, 'children'>;

export function Code({ component, className, theme = 'dark', ...rest }: CodeProps) {
  const code = useCode(component.id);
  const [selected, setSelected] = useState(code?.mainFile);
  const currentFile = selected || code?.mainFile; // solves first load issues. TODO - check if can be solved via the setState default
  const { fileContent } = useFileContent(component.id, currentFile) || {};
  const lang = useMemo(() => {
    if (!selected) return languages.ts;
    const fileEnding = selected?.split('.').pop();
    return languages[fileEnding || ''] || fileEnding;
  }, [currentFile]);

  const TreeNodeRenderer = useCallback(
    function TreeRenderer(props: TreeNodeProps) {
      const children = props.node.children;

      if (!children) {
        const widgets = getWidgets(props.node.id, code.mainFile, code.devFiles);
        return (
          <TreeNode
            {...props}
            node={{
              ...props.node,
              payload: { widgets, isActive: props.node.id === currentFile, onClick: () => setSelected(props.node.id) },
            }}
          />
        );
      }
      return <FolderTreeNode {...props} />;
    },
    [code?.mainFile, selected]
  );

  if (!code) return null;

  return (
    <SplitPane size="85%" layout={Layout.row} className={classNames(styles.code, styles[theme], className)} {...rest}>
      <Pane>
        <Editor
          theme={theme === 'light' ? 'light' : 'vs-dark'}
          height="100%"
          language={lang}
          value={fileContent}
          className={styles.editor}
          onMount={handleEditorDidMount}
        />
      </Pane>
      <HoverSplitter className={styles.splitter}></HoverSplitter>
      <Pane className={styles.fileTreePane}>
        <FileTreePanel {...code} className={styles.fileTree} FileTreeRenderer={TreeNodeRenderer} />
      </Pane>
    </SplitPane>
  );
}

function getWidgets(fileName: string, mainFile?: string, devFiles?: string[]) {
  if (fileName === mainFile) {
    return [() => createLabel('main')];
  }
  if (devFiles?.includes(fileName)) {
    return [() => createLabel('dev')];
  }
  return;
}

function createLabel(str: string) {
  return <Label className={styles.label}>{str}</Label>;
}

// this disables ts errors in editor
function handleEditorDidMount(editor, monaco) {
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: true,
  });
}
