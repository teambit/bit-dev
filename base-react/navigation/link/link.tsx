import React, { forwardRef } from 'react';
import { useRouter } from './router-context';
import type { LinkProps } from './link.type';
import { NativeLink } from './native-link';

/** implementation agnostic Link component, basic on the standard `a` tag */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props: LinkProps, ref) {
  const router = useRouter();
  const ActualLink = router.Link || NativeLink;

  if (props.native || props.external) {
    return <NativeLink {...props} ref={ref} />;
  }

  return <ActualLink {...props} ref={ref} />;
});
