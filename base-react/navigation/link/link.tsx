import React from 'react';
import { useRouter, LinkProps } from '@teambit/base-react.navigation.router-context';
import { NativeLink } from './native-link';

export type { LinkProps };

/** implementation agnostic Link component, basic on the standard `a` tag */
export function Link(props: LinkProps) {
  const router = useRouter();
  const ActualLink = router.Link || NativeLink;

  if (props.native || props.external) {
    return <NativeLink {...props} />;
  }

  return <ActualLink {...props} />;
}
