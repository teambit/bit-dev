import React from 'react';
import { LearnCrossroad } from './learn-crossroad';

export const BasicLearnCrossroad = () => {
  return (
    <LearnCrossroad
      title="Learn how to think in components"
      description="Learn the philosophy behind components and how they can be used to enhance your development workflow."
      link="/learn"
      style={{minWidth: "1000px"}}
    />
  );
};

// const compositionCanvas = {
//   minWidth: 2000,
//   minHeight: 500,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// };

// BasicLearnCrossroad.canvas = compositionCanvas;
