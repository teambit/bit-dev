import React from 'react';
import { Logo } from './logo';
import { RecommendedSizes } from './recommended-sizes';

export const BasicLogo = () => (
  <Logo />
);

export const LargeLogo = () => {
  return <Logo size={RecommendedSizes.large} />;
};

export const XLLogo = () => {
  return <Logo size={RecommendedSizes.xl} />;
};

export const CustomSizeLogo = () => {
  return <Logo customSize={64} />;
};
