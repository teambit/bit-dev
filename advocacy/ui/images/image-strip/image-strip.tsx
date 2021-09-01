import React from 'react';
import { Images } from '@teambit/advocacy.entity.images';
import { Image } from '@teambit/advocacy.ui.images.image';
import styles from './image-strip.module.scss';

export type ImageStripProps = {
  /**
   * An object of images with src and alt attributes
   */
  images: Images[];
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A section showing all the available client logos.<br/>
 * Uses a gentle rotating animation to fit them into one screen.
 * @name ImageStrip
 * @example <ImageStrip images={[{ src: 'homepage-enterprise-logos/Dell.svg', alt: 'dell' }]} />
 */
export function ImageStrip({ images, ...rest }: ImageStripProps) {
  return (
    <div className={styles.images} {...rest}>
      {images.map((image) => (
        <Image
          key={image.alt}
          alt={image.alt}
          src={image.src}
          loading={(image.loading = 'lazy')}
        />
      ))}
    </div>
  );
}
