import { Aspect } from '@teambit/harmony';

export type CommunityReactConfig = {
  /**
   * host to the symphony gateway.
   */
  baseUrl: string;
};

export const CommunityReactAspect = Aspect.create({
  id: 'teambit.community/envs/community-react'
  // defaultConfig: {
  //   baseUrl: 'https://symphony.bit.dev/graphql'
  // }
});
