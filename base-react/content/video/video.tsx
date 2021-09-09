import React, { ReactNode } from 'react';

export type VideoProps = {
  /**
   * a text to be rendered in the component.
   */
  children?: ReactNode,

  /**
   * source url of the video.
   */
  src: string,

  /**
   * class name to inject.
   */
  className?: string
} & React.VideoHTMLAttributes<any>;

export function Video({ children, className, src, ...rest }: VideoProps) {
  return (
    <video {...rest} src={src} className={className}>
      {children}
    </video>
  );
}
