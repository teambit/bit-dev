import { ComponentContext } from '@teambit/generator';

export function componentFile({ namePascalCase }: ComponentContext) {
  return `export type ${namePascalCase}Props = {
  id: string;
  version: string;
};

export class ${namePascalCase} {
  constructor(
    /**
     * ID of the component
     */
    readonly id: string,

    /**
     * version of the component
     */
    readonly version: string,
  ) {}

  static fromObject(plain${namePascalCase}: ${namePascalCase}Props) {
    return new ${namePascalCase}(
      plain${namePascalCase}.id,
      plain${namePascalCase}.version,
    );
  }
}`;
}
