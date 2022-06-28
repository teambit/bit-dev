import React, { useState, ReactElement, useMemo, HTMLAttributes } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { augmentBitShowOutput } from './augment-bit-show-output';

export type BitShowExplorerProps = {
  bitShowOutput: string;
  descriptions?: ReactElement[];
  isAnimated?: boolean;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function BitShowExplorer({
  bitShowOutput,
  descriptions,
  isAnimated = true,
  className,
  ...rest
}: BitShowExplorerProps) {
  const [animated, setAnimated] = useState(isAnimated);
  // const terminalId = `terminal-${Math.trunc(Math.random() * 100000).toString()}`;
  const BitShowComposition = useMemo(() => augmentBitShowOutput(bitShowOutput), [bitShowOutput, descriptions]);

  return (
    <div
      className={cx(styles.terminal, animated && styles.animated, className)}
      onMouseEnter={() => setAnimated(false)}
      {...rest}
    >
      {/* @ts-ignore */}
      <BitShowComposition descriptions={descriptions} />
    </div>
  );
}
