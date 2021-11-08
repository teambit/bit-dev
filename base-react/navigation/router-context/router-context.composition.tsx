import React from 'react';
import { Link } from '@teambit/base-react.navigation.link';
import { RouterProvider, RouterContextType } from './router-context';

const routingA: RouterContextType = {
  Link: ({ children, ...props }) => <a {...props}>{children} 🔗</a>,
};

const routingB: RouterContextType = {
  Link: ({ style, ...props }) => <a {...props} style={{ textDecoration: 'none', fontWeight: 'bolder', ...style }} />,
};

export const Preview = () => (
  <div>
    <RouterProvider value={routingA}>
      <span>System 1</span> <Link href="https://bit.dev">Link</Link>
    </RouterProvider>
    <br />
    <RouterProvider value={routingB}>
      System 2 <Link href="https://bit.dev">Link</Link>
    </RouterProvider>
    <br />
    Default <Link href="https://bit.cloud">Link</Link>
  </div>
);
