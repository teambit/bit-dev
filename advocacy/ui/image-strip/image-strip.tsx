import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Image } from '@teambit/advocacy.ui.image';

import styles from './image-strip.module.scss';

const LOGOS = [
  {
    src: 'homepage-enterprise-logos/Dell.svg',
    alt: 'Dell'
  },
  {
    src: 'homepage-enterprise-logos/ebay.svg',
    alt: 'ebay'
  },
  {
    src: 'homepage-enterprise-logos/Tesla.svg',
    alt: 'Tesla'
  },
  {
    src: 'homepage-enterprise-logos/at&t.svg',
    alt: 'AT&T'
  },
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
];

/**
 * A section showing all the available client logos.<br/>
 * Uses a gentle rotating animation to fit them into one screen.
 * @name Integrations
 */
export function ImageStrip({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classNames(className, styles.integrationBadges)}
      data-bit-id="teambit.bit-dev/ui/image-strip"
      {...rest}
    >
      <div className={styles.logos}>
        {LOGOS.map((logo) => (
          <Image
            key={logo.alt}
            className={styles.icon}
            alt={logo.alt}
            src={logo.src}
          />
        ))}
      </div>
    </div>
  );
}
