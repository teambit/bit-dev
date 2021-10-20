import React from 'react';
import cs from 'classnames';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { BaseImage, BaseImageProps } from '@teambit/base-ui.elements.image';
import styles from './image.module.scss';

export type ImageProps = {
  center?: boolean;
  width?: string | number;
} & BaseImageProps;

export const Image = ({
  center = true,
  width,
  alt,
  src,
  className,
  ...rest
}: ImageProps) => {
  return (
    <div
      style={{ width: width || '100%' }}
      className={cs(center && styles.center, className)}
    >
      <Zoom>
        <BaseImage fullWidth={true} alt={alt} src={src} {...rest} />
      </Zoom>
    </div>
  );
};
