import { ComponentContext } from '@teambit/generator';

export function componentFile({
  name,
  namePascalCase,
  nameCamelCase
}: ComponentContext) {
  return `import React from 'react';
import classNames from 'classnames';
import styles from './${name}.module.scss';

export type ${namePascalCase}Props = {
  /**
  * a text to be rendered in the component.
  */
  text: string
} & React.HTMLAttributes<HTMLDivElement>;

export function ${namePascalCase}({ text, className }: ${namePascalCase}Props) {
  return (
    <div className={classNames(styles.${nameCamelCase}, className)}>
      {text}
    </div>
  );
}
`;
}
