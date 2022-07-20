import React from 'react';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import styles from './styles.module.scss';

export const ImportExample = () => {
  return <CommandsExplorer commandName="import" commandExample={{}} />;
};

export const ImportOutputUpdated = () => (
  <Terminal isOutput>
    <span className={styles.greenHighlight}>successfully imported 1 components, 0 components are up to date</span>
    <br />
    <span>- </span>
    <span className={styles.greenHighlight}>updated</span>
    <span className={styles.component}>{` my-org.tasks-scope/apps/to-do `}</span>
    <span>2 new version(s) available, latest 0.0.3</span>
  </Terminal>
);

export const ImportOutputAdded = () => (
  <Terminal isOutput>
    <span className={styles.greenHighlight}>successfully imported 1 components, 0 components are up to date</span>
    <br />
    <span>- </span>
    <span className={styles.greenHighlight}>added</span>
    <span className={styles.component}>{` my-org.tasks-scope/hooks/use-todo `}</span>
    <span>2 new version(s) available, latest 0.0.2, currently used version 0.0.2</span>
  </Terminal>
);

export const DiffExample = () => {
  const example = {
    'values...': 'apps/to-do',
  };
  return <CommandsExplorer commandName="diff" commandExample={example} />;
};

export const BitDiff = () => <CommandsExplorer commandName="diff" />;

export const DiffAllExample = () => <CommandsExplorer commandName="diff" commandExample={{}} />;

export const DiffNamesExample = () => {
  const example = {
    'values...': 'apps/to-do info/icon-text',
  };
  return <CommandsExplorer commandName="diff" commandExample={example} />;
};

export const DiffPatternExample = () => {
  const example = {
    'values...': '"my-org.tasks-scope/*"',
  };
  return <CommandsExplorer commandName="diff" commandExample={example} />;
};

export const DiffSpecifiedVerLocalModExample = () => {
  const example = {
    'values...': 'info/icon-text-do 0.0.4',
  };
  return <CommandsExplorer commandName="diff" commandExample={example} />;
};

export const DiffSpecifiedVersionsExample = () => {
  const example = {
    'values...': 'info/icon-text-do 0.0.4 0.0.7',
  };
  return <CommandsExplorer commandName="diff" commandExample={example} />;
};

export const DiffOutput = () => (
  <Terminal isOutput>
    <span className={styles.component}>-------------------------------------------------------</span>
    <br />
    <span className={styles.component}>showing diff for my-org.tasks-scope/apps/to-do</span>
    <br />
    <span className={styles.component}>-------------------------------------------------------</span>
    <br />
    <span>--- to-do.tsx (0.0.1 original)</span>
    <br />
    <span className={styles.boldFont}>+++ to-do.tsx (0.0.1 modified)</span>
    <br />
    <span className={styles.component}>@@ -28,11 +32,13 @@</span>
    <br />
    <span>{`export function ToDo({ initialTodo = 'first to-do!' }: ToDoProps) {`}</span>
    <br />
    <span> {` setInputVal('');`}</span>
    <br />
    <span>{`}}`}</span>
    <br />
    <span>{`/>`}</span>
    <br />
    <span className={styles.redHighlight}>{`-      <ul>`}</span>
    <br />
    <span className={styles.greenHighlight}>{`+      <div>`}</span>
    <br />
    <span>{`         {todos.map((todo, i) => (`}</span>
    <br />
    <span className={styles.redHighlight}>{`-          <li key={i}>{todo}</li>`}</span>
    <br />
    <span className={styles.greenHighlight}>{`+          <IconText icon={<img src={iconUrl} />} key={i}>`}</span>
    <br />
    <span className={styles.greenHighlight}>{`+            {todo}`}</span>
    <br />
    <span className={styles.greenHighlight}>{`+          </IconTex>`}</span>
    <br />
    <span>{`+          </IconText>`}</span>
    <br />
    <span>{`         ))}`}</span>
    <br />
    <span className={styles.redHighlight}>{`-      </ul>`}</span>
    <br />
    <span className={styles.greenHighlight}>{`+      </div>`}</span>
    <br />
    <span>{`     </>`}</span>
    <br />
    <span>{`   );`}</span>
    <br />
    <span>{` }`}</span>
    <br />
    <br />
    <span>--- dependencies 0.0.2 original</span>
    <br />
    <span className={styles.boldFont}>--- dependencies 0.0.2 modified</span>
    <br />
    <span>teambit.design/info/icon-text</span>
    <br />
    <span>+ teambit.design/info/icon-text@0.0.8</span>
  </Terminal>
);

export const CheckoutHeadExample = () => {
  const example = {
    'values...': 'head info/icon-text',
  };

  return <CommandsExplorer commandName="checkout" commandExample={example} />;
};

export const CheckoutOutput = () => (
  <Terminal isOutput>
    <span>successfully switched</span>
    <span className={styles.boldFont}> teambit.design/info/icon-text </span>
    <span>to version </span>
    <span className={styles.boldFont}>head</span>
    <br />
    <br />
    <span className={styles.greenHighlight}>updated</span>
    <span className={styles.component}> icon-text.composition.tsx</span>
    <br />
    <span className={styles.greenHighlight}>updated</span>
    <span className={styles.component}> icon-text.docs.mdx</span>
    <br />
    <span className={styles.greenHighlight}>updated</span>
    <span className={styles.component}> icon-text.module.scss</span>
    <br />
    <span className={styles.greenHighlight}>updated</span>
    <span className={styles.component}> icon-text.tsx</span>
    <br />
    <span className={styles.greenHighlight}>updated</span>
    <span className={styles.component}> index.ts</span>
  </Terminal>
);

export const BitCheckout = () => <CommandsExplorer commandName="checkout" />;

export const CheckoutAllHeadsExample = () => {
  const example = {
    'values...': 'head',
  };

  return <CommandsExplorer commandName="checkout" commandExample={example} />;
};

export const CheckoutComponentVersExample = () => {
  const example = {
    'values...': '0.0.1 apps/to-do info/text-icon',
  };

  return <CommandsExplorer commandName="checkout" commandExample={example} />;
};

export const CheckoutComponentHeadsExample = () => {
  const example = {
    'values...': 'head apps/to-do info/text-icon',
  };

  return <CommandsExplorer commandName="checkout" commandExample={example} />;
};

export const CheckoutPatternVersionExample = () => {
  const example = {
    'values...': '0.0.1 "my-org.tasks-scope/*"',
  };

  return <CommandsExplorer commandName="checkout" commandExample={example} />;
};
