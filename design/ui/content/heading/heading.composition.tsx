import React from 'react';
import { Heading } from './heading';
import { Elements } from './elements';

export const BasicHeading = () => {
  return <Heading>Build anything in components</Heading>;
};

export const H1WithOverrideSize = () => {
  return <Heading size='h3'>Build anything in components</Heading>;
};

export const H1 = () => {
  return <Heading element={Elements.H1}>Build anything in components</Heading>;
};
export const H2 = () => {
  return <Heading element={Elements.H2}>Build anything in components</Heading>;
};
export const H3 = () => {
  return <Heading element={Elements.H3}>Build anything in components</Heading>;
};
export const H4 = () => {
  return <Heading element={Elements.H4}>Build anything in components</Heading>;
};
export const H5 = () => {
  return <Heading element={Elements.H5}>Build anything in components</Heading>;
};
export const H6 = () => {
  return <Heading element={Elements.H6}>Build anything in components</Heading>;
};
