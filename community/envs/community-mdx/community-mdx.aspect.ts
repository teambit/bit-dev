import { Aspect } from '@teambit/harmony';

export type CommunityMdxConfig = {
  extensions: string[];
};

export const CommunityMdxAspect = Aspect.create({
  id: 'teambit.community/envs/mdx',
});
