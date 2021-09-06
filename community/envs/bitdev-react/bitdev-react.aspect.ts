import { Aspect } from '@teambit/harmony';

export type BitDevReactConfig = {
  /**
   * host to the symphony gateway.
   */
  baseUrl: string;
};

export const BitDevReactAspect = Aspect.create({
  id: 'teambit.community/envs.bitdev-react',
  defaultConfig: {
    baseUrl: 'https://symphony.bit.dev/graphql'
  }
});
