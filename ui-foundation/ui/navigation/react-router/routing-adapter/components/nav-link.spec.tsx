import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ReactRouterNavLink } from './nav-link';

it('should add the active class, when active', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ReactRouterNavLink active className="link-class" activeClassName="active-class">
        some link
      </ReactRouterNavLink>
    </MemoryRouter>
  );

  const rendered = getByText('some link');

  expect(rendered).toHaveClass('link-class');
  expect(rendered).toHaveClass('active-class');
});

it('should not add the active class, when not active', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ReactRouterNavLink active className="link-class" activeClassName="active-class">
        some link
      </ReactRouterNavLink>
    </MemoryRouter>
  );

  const rendered = getByText('some link');

  expect(rendered).toHaveClass('link-class');
  expect(rendered).not.toHaveClass('active-class');
});

it('should add the active styles, when not active', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ReactRouterNavLink
        active
        style={{ fontWeight: '100', textDecoration: 'underline' }}
        activeStyle={{ fontWeight: 'bold' }}
      >
        some link
      </ReactRouterNavLink>
    </MemoryRouter>
  );

  const rendered = getByText('some link');

  expect(rendered).toHaveStyle({ textDecoration: 'underline' });
  // should override the fontWeight
  expect(rendered).toHaveStyle({ fontWeight: 'bold' });
});

it('should not add the active styles, when not active', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ReactRouterNavLink active style={{ textDecoration: 'underline' }} activeStyle={{ fontWeight: 'bold' }}>
        some link
      </ReactRouterNavLink>
    </MemoryRouter>
  );

  const rendered = getByText('some link');

  expect(rendered).toHaveStyle({ textDecoration: 'underline' });
  expect(rendered).not.toHaveStyle({ fontWeight: 'bold' });
});
