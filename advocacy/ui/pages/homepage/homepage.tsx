import React from 'react';
import { Hero } from '@teambit/advocacy.ui.hero';

export type HomepageProps = {
} & React.HTMLAttributes<HTMLDivElement>;

export function Homepage({ ...rest }: HomepageProps) {
  return (
    <div {...rest}>
      <Hero />
    </div>
  );
}
