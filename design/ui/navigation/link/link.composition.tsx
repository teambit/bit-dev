import React from 'react';
import { useLocation } from '@teambit/base-react.navigation.link';
import { Link } from './link';
import { NavLink } from './nav-link';

export const BasicLink = () => <Link href="https://bit.dev">Go to bit.dev</Link>;

export const NavigationLink = () => {
  const location = useLocation();

  return (
    <div>
      <div>current path {location?.pathname}</div>
      <NavLink href={location?.pathname} activeStyle={{ fontWeight: 'bold' }}>
        {location?.pathname}
      </NavLink>
    </div>
  );
};
