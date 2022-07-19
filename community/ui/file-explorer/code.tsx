import React, { useCallback, useState, useMemo } from 'react';
import cx from 'classnames';
import Editor from '@monaco-editor/react';
import useDimensions from 'react-use-dimensions';
import { useDebounce } from 'use-debounce';
import { FolderTreeNode } from '@teambit/ui-foundation.ui.tree.folder-tree-node';
import { TreeNodeProps } from '@teambit/base-ui.graph.tree.recursive-tree';

import { SplitPane, Pane, Layout, SplitPaneProps } from '@teambit/base-ui.surfaces.split-pane.split-pane';
import { HoverSplitter } from '@teambit/base-ui.surfaces.split-pane.hover-splitter';
import { FileTreePanel } from './file-tree/index';
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
  bitmap: 'json',
  jsonc: 'json',
};

type Files = {
  [key: string]: string | null;
};

type Options = {
  wordWrap?: 'on' | 'off' | 'bounded';
  codeHeight?: number;
  fileTreeWidth?: number;
  isDirOpen?: boolean;
  contentFontSize?: number;
  title?: string;
};

export type FileExplorerProps = {
  options?: Options;
  files: Files;
  defaultFile: string;
} & Omit<SplitPaneProps, 'children'>;

export function FileExplorer({ files, options = {}, defaultFile, className, ...rest }: FileExplorerProps) {
  const [ref, { width }] = useDimensions();
  const debouncedSize = useDebounce(width, 300, { leading: true });
  const layout = useMemo(() => {
    const size = debouncedSize && debouncedSize[0];
    if (size && size < 480) return Layout.column;
    return Layout.row;
  }, [debouncedSize]);

  const fileTree = Object.keys(files);
  const [selected, setSelected] = useState(defaultFile);
  const currentFile = selected;
  const fileContent = files[selected];
  const lang = useMemo(() => {
    if (!selected) return languages.ts;
    const fileEnding = selected?.split('.').pop();
    return languages[fileEnding || ''] || fileEnding;
  }, [currentFile]);

  const TreeNodeRenderer = useCallback(
    function TreeRenderer(props: TreeNodeProps) {
      const { children } = props.node;

      if (!children) {
        return (
          <TreeNode
            {...props}
            node={{
              ...props.node,
              payload: {
                isActive: props.node.id === currentFile,
                onClick: () => setSelected(props.node.id),
              },
            }}
          />
        );
      }
      return (
        <div
          onClick={() => {
            const aboutThisDir = `${props.node.id}about-this-dir`;
            if (fileTree.includes(aboutThisDir)) {
              setSelected(aboutThisDir);
            }
          }}
        >
          <FolderTreeNode
            {...props}
            node={{
              ...props.node,
              payload: { open: options.isDirOpen ?? true },
            }}
          />
        </div>
      );
    },
    [selected]
  );

  if (!fileTree) return null;

  return (
    <div ref={ref} className={styles.explorerContainer}>
      <SplitPane
        size={options.fileTreeWidth}
        layout={layout}
        className={cx(styles.explorer, styles.dark, className)}
        {...rest}
      >
        <Pane className={styles.fileTreePane}>
          <FileTreePanel
            title={options.title}
            fileTree={fileTree}
            className={styles.fileTree}
            FileTreeRenderer={TreeNodeRenderer}
          />
        </Pane>
        <HoverSplitter className={styles.splitter} />
        <Pane>
          <Editor
            options={{
              minimap: {
                enabled: false,
                renderValidationDecorations: 'off',
              },
              readonly: true,
              domReadOnly: true,
              wordWrap: options.wordWrap ?? 'off',
              fontSize: options.contentFontSize ?? 12,
              // automaticLayout: true,
            }}
            theme="vs-dark"
            height={options.codeHeight ? `${options.codeHeight}px` : '280px'}
            language={lang}
            value={fileContent}
            className={cx(styles.editor)}
            loading={<div style={{ background: 'black', height: '100%', width: '100%' }} />}
            onMount={handleEditorDidMount}
          />
        </Pane>
      </SplitPane>
    </div>
  );
}

// this disables ts errors in editor
function handleEditorDidMount(editor, monaco) {
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: true,
  });
  monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
    allowComments: true,
    schemaValidation: 'ignore',
    schemaRequest: 'ignore',
    enableSchemaRequest: false,
    trailingCommas: 'ignore',
  });
}
