import { Aspect } from '@teambit/harmony';

export type BitDevReactConfig = {
  /**
   * host to the symphony gateway.
   */
  baseUrl: string;
};

export const BitDevReactAspect = Aspect.create({
  id: 'teambit.community/envs.bitdev-react'
  // defaultConfig: {
  //   baseUrl: 'https://symphony.bit.dev/graphql'
  // }
});

// export const ComponentTemplatesAspect = Aspect.create({
//   id: 'teambit.base-react/generator/component-templates'
// });
