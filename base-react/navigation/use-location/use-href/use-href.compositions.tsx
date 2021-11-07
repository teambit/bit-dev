import React from 'react';
import { useHref } from './use-href';

export const useHrefPreview = () => {
  const href = useHref({ pathname: '/some/path', search: 'what=isIt', hash: '29632d' });

  return <div>generated link "{href}"</div>;
};

export const useHrefPathOnly = () => {
  const href = useHref({ search: 'what=isIt' });

  return <div>generated link "{href}"</div>;
};

export const useHrefHashOnly = () => {
  const href = useHref({ hash: 'dhj42kjd' });

  return <div>generated link "{href}"</div>;
};
