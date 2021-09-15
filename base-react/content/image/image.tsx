import React from 'react';
import classNames from 'classnames';
import styles from './image.module.scss';

export type ImageProps = {
  /**
   * if true, returns a div with the image as a background image.
   */
  isBackground?: boolean;

  /**
   * alternative text for the image.
   */
  alt?: string;

  /**
   * Lazy: Defer loading of the image until it reaches a calculated distance from the viewport.
   * Eager: Load the resource immediately, regardless of where it's located on the page.
   */
  loading?: 'lazy' | 'eager';

  /**
   * children for when using as a background image.
   */
  children?: React.ReactChild;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function Image({
  isBackground,
  src,
  className,
  children,
  alt,
  style,
  loading = 'eager',
  ...rest
}: ImageProps) {
  if (isBackground) {
    return (
      <div
        style={{ ...style, backgroundImage: `url(${src})` }}
        className={classNames(styles.backgroundImage, className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      style={style}
      loading={loading}
      className={className}
      {...rest}
    />
  );
}
