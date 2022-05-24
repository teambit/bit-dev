// LEGACY IMPLEMENTATION, WILL BE REPLACED SHORTLY.

import type { Routing } from '@teambit/base-ui.routing.routing-provider';
import { reactRouterAdapter } from '@teambit/ui-foundation.ui.navigation.react-router-adapter';

export const legacyRouting: Routing = {
  // @ts-ignore
  Link: reactRouterAdapter.Link!,
  // @ts-ignore
  NavLink: reactRouterAdapter.Link!,
  // @ts-ignore
  useLocation: reactRouterAdapter.useLocation,
};
