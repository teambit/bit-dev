// LEGACY IMPLEMENTATION, WILL BE REPLACED SHORTLY.

import type { Routing } from '@teambit/base-ui.routing.routing-provider';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';

export const legacyRouting: Routing = {
  Link: reactRouterAdapter.Link,
  NavLink: reactRouterAdapter.Link,
  // @ts-ignore
  useLocation: reactRouterAdapter.useLocation,
};
