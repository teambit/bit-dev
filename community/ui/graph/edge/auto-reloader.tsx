import React, { PropsWithChildren, useEffect } from 'react';
import { Xwrapper, useXarrow } from 'react-xarrows';

export type ReloadOptions = {
  reloadOnMount?: boolean;
  reloadOnPageLoad?: boolean;
  reloadOnTimeout?: number;
  reloadOnInterval?: number;
};
export type ArrowAutoReloaderProps = PropsWithChildren<ReloadOptions>;

/**
 * automatically reloads arrows on mount
 * this solves some glitches on first time rendering
 */
export function ArrowAutoReloader({
  children,
  reloadOnPageLoad,
  reloadOnTimeout,
  reloadOnInterval,
}: ArrowAutoReloaderProps) {
  return (
    <Xwrapper>
      {children}
      <ReloadArrows
        reloadOnPageLoad={reloadOnPageLoad}
        reloadOnTimeout={reloadOnTimeout}
        reloadOnInterval={reloadOnInterval}
      />
    </Xwrapper>
  );
}

// this will be fixed in react-xarrows v3.0.0
function ReloadArrows({ reloadOnMount, reloadOnPageLoad, reloadOnTimeout, reloadOnInterval }: ReloadOptions) {
  const updateXarrow = useXarrow();

  useEffect(() => {
    if (reloadOnMount) {
      updateXarrow();
    }
  }, [reloadOnMount]);

  useEffect(() => {
    if (!reloadOnPageLoad) return undefined;

    document.addEventListener('DOMContentLoaded', updateXarrow);
    document.addEventListener('readystatechange', updateXarrow);
    document.addEventListener('load', updateXarrow);

    return () => {
      document.removeEventListener('DOMContentLoaded', updateXarrow);
      document.removeEventListener('readystatechange', updateXarrow);
      document.removeEventListener('load', updateXarrow);
    };
  }, [reloadOnPageLoad]);

  useEffect(() => {
    if (!reloadOnInterval) return undefined;
    const tid = setInterval(updateXarrow, reloadOnInterval);
    return () => clearInterval(tid);
  }, [reloadOnInterval]);

  useEffect(() => {
    if (reloadOnTimeout) return undefined;

    const tid = setTimeout(updateXarrow, reloadOnTimeout);
    return () => clearTimeout(tid);
  }, [reloadOnTimeout]);

  return null;
}
