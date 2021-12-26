import React from 'react';
import { RouterProvider, LinkProps } from '@teambit/base-react.navigation.router-context';
import { Link } from '@teambit/base-ui.routing.link';
import { LegacyNavigationAdapter } from './legacy-routing-adapter';

export const LegacyRoutingAdapterPreview = () => (
  <RouterProvider value={{ Link: NewLink }}>
    <LegacyNavigationAdapter>
      <Link href=".">legacy link</Link>
    </LegacyNavigationAdapter>
  </RouterProvider>
);

function NewLink(props: LinkProps) {
  return <a {...props}>[new link] {props.children}</a>;
}
