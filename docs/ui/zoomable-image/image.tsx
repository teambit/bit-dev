import React from 'react';
import cs from 'classnames';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { BaseImage, BaseImageProps } from '@teambit/base-ui.elements.image';
import styles from './image.module.scss';

export type ImageProps = {
  center?: boolean;
} & BaseImageProps;

export const Image = ({ center = true, width, alt, src, className, ...rest }: ImageProps) => {
  return (
    <div className={cs(center && styles.center, className)} {...rest}>
      <Zoom>
        <BaseImage fullWidth alt={alt} src={src} />
      </Zoom>
    </div>
  );
};
