import React from 'react';
import classNames from 'classnames';
import { H3 } from '@teambit/design.ui.heading';
import { Image } from '@teambit/community.ui.images.image';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import styles from './benefits-card.module.scss';

export type BenefitsCardProps = {
  /**
   * an image to be rendered in the card
   */
  image: string;
  /**
   * an alt tag for the image
   */
  alt: string;
  /**
   * a title for the card
   */
  title: string;
  /**
   * a text for the card
   */
  text: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function BenefitsCard({
  image,
  alt,
  title,
  text,
  className,
  children
}: BenefitsCardProps) {
  return (
    <div className={classNames(styles.benefitsCard, className)}>
      <Image
        src={image}
        alt={alt}
        className={classNames(styles.image, className)}
      />

      <div className={styles.textBox}>
        <H3 size="md" className={classNames(styles.title, className)}>
          {title}
        </H3>
        <Paragraph element="p" className={classNames(styles.text, className)}>
          {text}
        </Paragraph>
        {children}
      </div>
    </div>
  );
}
