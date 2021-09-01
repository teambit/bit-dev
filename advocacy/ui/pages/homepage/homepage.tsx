import React from 'react';
import { Hero } from '@teambit/advocacy.ui.hero';
import { ImageStrip } from '@teambit/advocacy.ui.images.image-strip';
import { clientLogos } from '@teambit/advocacy.entity.images';

export type HomepageProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Homepage({ ...rest }: HomepageProps) {
  return (
    <div {...rest}>
      <Hero />
      <ImageStrip images={clientLogos} />
    </div>
  );
}
