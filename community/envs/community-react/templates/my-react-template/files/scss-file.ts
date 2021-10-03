import { ComponentContext } from '@teambit/generator';

export function scssFile({ nameCamelCase }: ComponentContext) {
  return `.${nameCamelCase}{

}`;
}
