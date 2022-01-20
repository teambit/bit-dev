import React from 'react';
import { RouterProvider, RouterContextType } from './routing-provider';
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
  <div style={{ padding: 20 }}>
    <div>
      current url:
      <div style={{ textDecoration: 'underline' }}>"{typeof window !== 'undefined' && window.location.pathname}"</div>
      (active links should be orange)
    </div>

    <br />

    <div>
      local link:{' '}
      <Link href="/preview/teambit.react/react" activeStyle={{ color: 'darkorange' }}>
        /preview/teambit.react/react
      </Link>
    </div>
    <div>
      base-react scope link{' '}
      <Link href="/api/teambit.base-react" activeStyle={{ color: 'darkorange' }}>
        /api/teambit.base-react
      </Link>
    </div>
    <div>
      another link:
      <Link href="inactive/link" activeStyle={{ color: 'darkorange' }}>
        inactive/link
      </Link>
    </div>
  </div>
);

const routingA: RouterContextType = {
  Link: ({ children, ...props }) => <a {...props}>{children} 🔗</a>,
};

const routingB: RouterContextType = {
  Link: ({ style, ...props }) => <a {...props} style={{ textDecoration: 'none', fontWeight: 'bolder', ...style }} />,
};

export const MultipleRoutingSystems = () => (
  <div>
    <RouterProvider implementation={routingA}>
      <span>System 1</span> <Link href="https://bit.dev">Link</Link>
    </RouterProvider>
    <br />
    <RouterProvider implementation={routingB}>
      <span>System 2</span> <Link href="https://bit.dev">Link</Link>
    </RouterProvider>
    <br />
    <br />
    Default <Link href="https://bit.cloud">Link</Link>
  </div>
);
