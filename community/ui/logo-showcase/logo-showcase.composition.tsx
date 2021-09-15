import React from 'react';
import { clientLogos } from '@teambit/community.entity.images';
import { LogoShowcase } from './logo-showcase';

export const BasicLogoShowcase = () => (
  <LogoShowcase data-testid="test-logo-showcase" images={clientLogos} />
);
