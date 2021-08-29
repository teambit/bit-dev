import React from 'react';
import { useStars } from './use-stars';

export const BasicuseStars = () => {
  const { count, increment } = useStars();

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};
