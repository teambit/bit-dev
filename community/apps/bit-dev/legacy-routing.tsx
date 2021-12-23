// ADAPTER!!
// PROVIDING THE _LEGACY_ SYSTEM WITH THE CURRENT REACT-ROUTER COMPONENTS

import { useLocation } from 'react-router-dom';
import { Link } from '@teambit/ui-foundation.ui.react-router.link';
import { NavLink } from '@teambit/ui-foundation.ui.react-router.nav-link';

// do not use them, use @teambit/base-ui.routing.link and @teambit/base-ui.routing.nav-link instead

/**
 * defines react-router's routing components (link, useLocation, etc)
 */
export const legacyRouting = { Link, NavLink, useLocation };
