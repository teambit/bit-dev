import React, { CSSProperties } from 'react';
import { NavLink } from './nav-link';

const activeStyles: CSSProperties = { fontWeight: 'bold', color: 'red' };

export const activeNavLink = () => {
  return (
    <NavLink href="/preview" activeStyle={activeStyles}>
      active NavLink
    </NavLink>
  );
};

export const inactiveNavLink = () => {
  return (
    <NavLink href="https://tib.ved" activeStyle={activeStyles}>
      inactive NavLink
    </NavLink>
  );
};
