import React, { PropsWithChildren, useEffect } from 'react';
import { Xwrapper, useXarrow } from 'react-xarrows';

export type ArrowAutoReloaderProps = PropsWithChildren<{}>;

/**
 * automatically reloads arrows on mount
 * this solves some glitches on first time rendering
 */
export function ArrowAutoReloader({ children }: ArrowAutoReloaderProps) {
  return (
    <Xwrapper>
      {children}
      <ReloadArrows />
    </Xwrapper>
  );
}

// this will be fixed in react-xarrows v3.0.0
function ReloadArrows() {
  const updateXarrow = useXarrow();

  useEffect(() => {
    updateXarrow();
  }, []);

  return null;
}
