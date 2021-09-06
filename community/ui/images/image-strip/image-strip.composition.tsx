import React from 'react';
import { ImageStrip } from './image-strip';
import { clientLogos } from '@teambit/community.entity.images';

export const BasicImageStrip = () => (
  <ImageStrip
    data-testid="test-image-strip"
    images={[
      {
        src: 'homepage-enterprise-logos/Moodys.svg',
        alt: 'Moodys'
      },
      {
        src: 'homepage-enterprise-logos/Carlsberg-1.svg',
        alt: 'Carlsberg'
      },
      {
        src: 'homepage-enterprise-logos/Autodesk.svg',
        alt: 'Autodesk'
      },
      {
        src: 'homepage-enterprise-logos/HOOPP.svg',
        alt: 'HOOPP'
      }
    ]}
  />
);

export const ImageStripMockImages = () => (
  <ImageStrip data-testid="test-image-strip" images={clientLogos} />
);
