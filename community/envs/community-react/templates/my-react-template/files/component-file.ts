import { ComponentContext } from '@teambit/generator';

export function componentFile(context: ComponentContext) {
  return `import React from 'react';
  import classNames from 'classnames';
  import styles from './${context.name}.module.scss';


  export type ${context.namePascalCase}Props = {
    /**
     * a text to be rendered in the component.
     */
    text: string
  } & React.HTMLAttributes<HTMLDivElement>;

  export function ${context.namePascalCase}({ text, className }: ${context.namePascalCase}Props) {
    return (
      <div className={classNames(styles.${context.nameCamelCase}, className)}>
        {text}
      </div>
    );
  }`;
}
