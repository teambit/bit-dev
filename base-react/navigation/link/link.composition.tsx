import React from 'react';
import { Link } from './link';

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
  <div>
    <div>
      current url:
      <div style={{ textDecoration: 'underline' }}>
        "{typeof window !== 'undefined' && window.location.href}"
      </div>
      (active links should be red)
    </div>

    <br />

    <div>
      local link:{' '}
      <Link
        href="/preview/teambit.harmony/aspect"
        active="auto"
        activeStyle={{ color: 'red' }}
      >
        /preview/teambit.harmony/aspect
      </Link>
    </div>
    <div>
      base-react scope link{' '}
      <Link
        href="/api/teambit.base-react"
        active="auto"
        activeStyle={{ color: 'red' }}
      >
        /api/teambit.base-react
      </Link>
    </div>
    <div>
      another link:
      <Link href="inactive/link" active="auto" activeStyle={{ color: 'red' }}>
        inactive/link
      </Link>
    </div>
  </div>
);
