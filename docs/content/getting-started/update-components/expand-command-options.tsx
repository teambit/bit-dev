/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { ExpandCode } from '@teambit/community.ui.expand-code';
import {
  BitDiff,
  DiffNamesExample,
  DiffPatternExample,
  DiffSpecifiedVerLocalModExample,
  DiffSpecifiedVersionsExample,
  BitCheckout,
  CheckoutComponentVersExample,
  CheckoutAllHeadsExample,
  CheckoutComponentHeadsExample,
  CheckoutPatternVersionExample,
} from './commands';
import styles from './styles.module.scss';

const BitDiffDoc = () => {
  return (
    <div className={styles.diffContainer}>
      <BitDiff />
      <h4>Examples:</h4>
      <p>{`Compare a list of components' check-out snaps with their local changes:`}</p>
      <DiffNamesExample />
      <p>{`Compare a list of components' check-out snaps with their local changes (using a component pattern):`}</p>
      <DiffPatternExample />
      <p>{`Compare a component's local changes with a specific snap:`}</p>
      <DiffSpecifiedVerLocalModExample />
      <p>Compare two snaps:</p>
      <DiffSpecifiedVersionsExample />
    </div>
  );
};

export const ExpandedDiff = () => <ExpandCode snippet={BitDiffDoc} />;

const BitCheckoutDoc = () => {
  return (
    <div className={styles.diffContainer}>
      <BitCheckout />
      <h4>Examples:</h4>
      <p>Checkout all component heads (latest snaps):</p>
      <CheckoutAllHeadsExample />
      <p>Checkout a list of components heads:</p>
      <CheckoutComponentHeadsExample />
      <p>Checkout a specific snap of a list of components:</p>
      <CheckoutComponentVersExample />
      <p>Checkout a specific version of a list of component, using a component pattern:</p>
      <CheckoutPatternVersionExample />
    </div>
  );
};

export const ExpandedCheckout = () => <ExpandCode snippet={BitCheckoutDoc} />;
