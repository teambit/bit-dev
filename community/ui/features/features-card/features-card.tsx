import React from 'react';
import classNames from 'classnames';
import { H3 } from '@teambit/design.ui.heading';
import { Image } from '@teambit/base-react.content.image';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import styles from './features-card.module.scss';

export type FeaturesCardProps = {
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

export function FeaturesCard({
  image,
  alt,
  title,
  text,
  className,
  children
}: FeaturesCardProps) {
  return (
    <div className={classNames(styles.featuresCard, className)}>
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
