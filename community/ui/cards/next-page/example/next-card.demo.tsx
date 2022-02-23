import React from 'react';
import { NextPage } from '../next-page';

export const NextCardExample = () => {
  return (
    <div style={{ maxWidth: 600 }}>
      <h2>How to change a tire</h2>
      <h3>Find a safe parking place</h3>
      <p>
        As soon as you realize you have a flat tire, scan your surrounding for a
        safe spot to park. Gradualy and slowly reduce your speed before coming
        to a full stop.
      </p>
      <br />
      <NextPage
        description="Turning on hazard lights"
        title="Turn on hazard lights"
        buttonText="Next step"
        href="#"
      />
    </div>
  );
};
