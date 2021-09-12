import React from 'react';
import { useRouter, LinkProps } from '@teambit/base-react.navigation.router-context';

export type { LinkProps };

export function Link(props: LinkProps) {
  const { Link } = useRouter();
  if (Link && !props.native) {
    return <Link {...props} />;
  }

  

  return <a {...props} />;
}
