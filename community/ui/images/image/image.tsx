import React from 'react';

import { BaseImage, BaseImageProps } from '@teambit/base-ui.elements.image';
import { staticStorageUrl } from '@teambit/base-ui.constants.storage';

export type ImageProps = BaseImageProps;

/**
 * @name Image
 * @example
 * <Image src="homepage-bit/map.png" alt="world" fullWidth />
 */
export function Image({ src, alt, ...rest }: ImageProps) {
  return <BaseImage {...rest} src={`${staticStorageUrl}/${src}`} alt={alt} />;
}
