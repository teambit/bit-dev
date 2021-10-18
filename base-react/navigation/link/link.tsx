import React from 'react';
import {
  useRouter,
  LinkProps,
} from '@teambit/base-react.navigation.router-context';
import { NativeLink } from './native-link';

export type { LinkProps };

export function Link(props: LinkProps) {
  const { Link } = useRouter();
  if (Link && !props.native && !props.external) {
    return <Link {...props} />;
  }

  return <NativeLink {...props} />;
}
