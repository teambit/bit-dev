import React from 'react';
import { Link } from './link';
import { NavLink } from './nav-link';

export const BasicLink = () => <Link href="https://bit.dev">bit.dev</Link>;
export const ExternalLink = () => (
  <div>
    This link will be external: (ie, it will open in a new tab)
    <div>
      <Link href="https://bit.dev" external>
        bit.dev
      </Link>
    </div>
  </div>
);

export const ActiveLink = () => (
  <div style={{ padding: 20 }}>
    <div>
      current url:
      <div style={{ textDecoration: 'underline' }}>"{typeof window !== 'undefined' && window.location.pathname}"</div>
      (active links should be orange)
    </div>

    <br />

    <div>
      local link:{' '}
      <NavLink href="/preview/teambit.react/react" activeStyle={{ color: 'darkorange' }}>
        /preview/teambit.react/react
      </NavLink>
    </div>
    <div>
      base-react scope link{' '}
      <NavLink href="/api/teambit.base-react" activeStyle={{ color: 'darkorange' }}>
        /api/teambit.base-react
      </NavLink>
    </div>
    <div>
      another link:
      <NavLink href="inactive/link" activeStyle={{ color: 'darkorange' }}>
        inactive/link
      </NavLink>
    </div>
  </div>
);
