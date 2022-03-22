import React from 'react';
import { Image } from './image';
import puppyImg from './puppy.jpg';

export const CenteredImage = () => (
  <Image alt="a puppy" src={puppyImg} maxWidth={300} />
);

export const UncenteredImage = () => (
  <Image center={false} alt="a puppy" src={puppyImg} maxWidth={300} />
);

export const ImageBelowText = () => (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      blandit imperdiet purus sed hendrerit. Suspendisse in mauris sapien.
      Mauris in imperdiet eros, quis suscipit mauris. Curabitur in lorem eu nunc
      bibendum facilisis in et leo. Praesent aliquam varius lorem, a sagittis
      ante molestie non
    </p>
    <Image alt="a puppy" src={puppyImg} maxWidth={300} />
  </div>
);
