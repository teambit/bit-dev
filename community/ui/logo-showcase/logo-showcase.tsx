import React from 'react';
import classNames from 'classnames';
import { Images } from '@teambit/community.entity.images';
import { Image } from '@teambit/base-react.content.image';
import styles from './logo-showcase.module.scss';

export type LogoShowcaseProps = {
  /**
   * An object of images with src and alt attributes
   */
  images: Images[];
} & React.HTMLAttributes<HTMLDivElement>;

export function LogoShowcase({ images, className }: LogoShowcaseProps) {
  return (
    <div className={classNames(styles.logoShowcase, className)}>
      {images.map((image, index) => (
        <Image
          key={index}
          alt={image.alt}
          src={image.src}
          loading={(image.loading = 'lazy')}
        />
      ))}
    </div>
  );
}
