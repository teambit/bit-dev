import React from 'react';
import { StickyMenu } from './sticky-menu';

export const BasicStickyMenu = () => (
  <StickyMenu
    links={[
      {
        href: '#compose',
        text: 'Compose',
      },
      {
        href: '#collaborate',
        text: 'Collaborate',
      },
      {
        href: '#release',
        text: 'Release',
      },
    ]}
  />
);

export const StickyMenuInScrollableSurface = () => {
  return (
    <div style={{ width: 600, height: 150, overflowY: 'scroll', overflowX: 'clip' }}>
      <BasicStickyMenu />
      <p>
        Ut viverra, elit sit amet maximus congue, arcu augue bibendum leo, pretium rutrum tortor neque molestie nisl.
        Sed nec congue lorem. Curabitur imperdiet lorem nec maximus dignissim. Nulla ultricies mi et turpis condimentum,
        eu interdum sapien dignissim. Sed et velit luctus, iaculis leo et, congue ipsum. Cras suscipit suscipit elit.
        Quisque nulla orci, blandit nec urna eu, sollicitudin porta nunc. Proin scelerisque ipsum sit amet neque
        convallis lacinia.
      </p>
    </div>
  );
};
