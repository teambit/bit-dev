import React from 'react';
import { clientLogos } from '@teambit/community.entity.images';
import { LogoShowcase } from './logo-showcase';

export const BasicLogoShowcase = () => (
  <LogoShowcase
    data-testid="test-logo-showcase"
    images={[
      {
        src: 'https://static.bit.dev/homepage-enterprise-logos/Moodys.svg',
        alt: 'Moodys'
      },
      {
        src: 'https://static.bit.dev/homepage-enterprise-logos/Carlsberg-1.svg',
        alt: 'Carlsberg'
      },
      {
        src: 'https://static.bit.dev/homepage-enterprise-logos/Autodesk.svg',
        alt: 'Autodesk'
      },
      {
        src: 'https://static.bit.dev/homepage-enterprise-logos/HOOPP.svg',
        alt: 'HOOPP'
      }
    ]}
  />
);

export const ImageStripMockImages = () => (
  <LogoShowcase data-testid="test-logo-showcase" images={clientLogos} />
);
