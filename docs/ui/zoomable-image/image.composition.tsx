import React from 'react';
import { Image } from './image';
import puppyImg from './puppy.jpg';

export const CenteredImage = () => <Image alt="a puppy" src={puppyImg} />;

export const UncenteredImage = () => (
  <Image center={false} alt="a puppy" src={puppyImg} />
);
