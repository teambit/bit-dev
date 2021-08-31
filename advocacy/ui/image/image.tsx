import React from 'react';

import { BaseImage, BaseImageProps } from '@teambit/base-ui.elements.image';
import { staticStorageUrl } from '@teambit/base-ui.constants.storage';

export type ImageProps = BaseImageProps;

/**
 * @name Image
 * @example
 * <Image src="homepage-bit/map.png" alt="illustration" fullWidth />
 */
export function Image({ src, ...rest }: ImageProps) {
  return (
    <BaseImage
      data-bit-id="teambit.bit-dev/ui/image"
      {...rest}
      src={`${staticStorageUrl}/${src}`}
    />
  );
}
