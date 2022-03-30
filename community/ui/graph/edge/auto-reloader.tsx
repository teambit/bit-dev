import React, { PropsWithChildren, useEffect } from 'react';
import { Xwrapper, useXarrow } from 'react-xarrows';

export type ReloadOptions = { delay?: number; interval?: boolean };
export type ArrowAutoReloaderProps = PropsWithChildren<ReloadOptions>;

/**
 * automatically reloads arrows on mount
 * this solves some glitches on first time rendering
 */
export function ArrowAutoReloader({ children, delay, interval }: ArrowAutoReloaderProps) {
  return (
    <Xwrapper>
      {children}
      <ReloadArrows delay={delay} interval={interval} />
    </Xwrapper>
  );
}

// this will be fixed in react-xarrows v3.0.0
function ReloadArrows({ delay = 1000, interval = false }: ReloadOptions) {
  const updateXarrow = useXarrow();

  useEffect(() => {
    updateXarrow();

    if (interval) {
      const tid = setInterval(updateXarrow, delay);
      return () => clearInterval(tid);
    }

    const tid = setTimeout(updateXarrow, delay);
    return () => clearTimeout(tid);
  }, [delay, interval]);

  return null;
}
