import React from 'react';
import { Collapsible } from './collapsible';

const Title = () => <p>What is Bit?</p>;

const Content = () => <p>JSX Element</p>;

export const BasicCollapsible = () => (
  <Collapsible title="What is Bit?" content={<Content />} />
);

export const CollapsibleWithJSXTitle = () => (
  <Collapsible title={<Title />} content={'A simple text'} />
);
