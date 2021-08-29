import React from 'react';
import { BaseImage } from '@teambit/base-ui.elements.image';
import logo from './logo.svg';

export type LogoProps = {
  /**
   * a text to be rendered in the component.
   */
  height?: number,

  width?: number,

  /**
   * alt text for the logo.
   */
  alt?: string,

  /**
   * classes injected to component.
   */
  className?: string
};

export function Logo({ height, width, alt }: LogoProps) {
  return (
    <BaseImage src={logo} alt={alt} height={height} width={width} />
  );
}

Logo.defaultProps = {
  width: 32,
  height: 32
};
