import React from 'react';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import style from './style.module.scss';

const content = `import { Browser } from '@teambit/community.ui.browser';
import screenshot from './my-screenshot'

<Browser>
  <img src={screenshot} />
</Browser>`;

export const BrowserSnippet = () => (
  <CodeSnippet className={style.dimensions}>{content}</CodeSnippet>
);
