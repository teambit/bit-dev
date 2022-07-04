import React from 'react';
import { Collapsible } from './collapsible';

const Title = () => <p>What is Bit?</p>;

const Content = () => <p>JSX Element</p>;

export const BasicCollapsible = () => (
  // @ts-ignore
  <Collapsible title="What is Bit?" content={<Content />} />
);
