import React from 'react';
import { Hero } from '@teambit/community.ui.hero';
import { ImageStrip } from '@teambit/community.ui.images.image-strip';
import { clientLogos } from '@teambit/community.entity.images';

export type HomepageProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Homepage({ ...rest }: HomepageProps) {
  return (
    <div {...rest}>
      <Hero />
      <ImageStrip images={clientLogos} />
    </div>
  );
}
