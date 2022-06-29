import React from 'react';
import cs from 'classnames';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import {
  Image as BaseImage,
  ImageProps as BaseImageProps,
} from '@teambit/base-react.content.image';
import styles from './image.module.scss';

export type ImageProps = {
  center?: boolean;
  /**
   * @deprecated use 'maxWidth'
   */
  width?: string | number;
  maxWidth?: string | number;
  hasBackground?: boolean;
} & BaseImageProps;

export const Image = ({
  center = true,
  width,
  maxWidth,
  alt,
  src,
  hasBackground,
  className,
  ...rest
}: ImageProps) => {
  maxWidth = maxWidth ?? width;
  return (
    <div
      className={cs(
        styles.imageWrapper,
        center && styles.center,
        hasBackground && styles.withBg,
        className
      )}
    >
      <Zoom>
        <BaseImage
          style={{ maxWidth: maxWidth || '100%' }}
          alt={alt}
          src={src}
          {...rest}
        />
      </Zoom>
    </div>
  );
};
