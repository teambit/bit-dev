import React from 'react';
import { BaseImage, BaseImageProps } from '@teambit/base-ui.elements.image';
import logo from './logo.svg';
import { RecommendedSizes } from './recommended-sizes';

export type LogoProps = {
  /**
   * recommended sizes could be either 'small' (16), 'medium' (24), 'large' (32) and 'xl' (40).
   */
  size?: RecommendedSizes;

  /**
   * size of the logo. size would be applied on both height and width.
   * currently there is no option to change the height or width specifically
   */
  customSize?: number;

  /**
   * alt text for the logo.
   */
  alt: string;

  /**
   * classes injected to component.
   */
  className?: string;
} & BaseImageProps;

export function Logo({ size, customSize, alt, ...rest }: LogoProps) {
  const chosenSize = customSize || size;

  return (
    <BaseImage
      {...rest}
      src={logo}
      alt={alt}
      height={chosenSize}
      width={chosenSize}
    />
  );
}

Logo.defaultProps = {
  size: RecommendedSizes.medium,
  alt: 'Bit'
};
