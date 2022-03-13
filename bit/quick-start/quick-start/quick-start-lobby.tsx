import React, { ReactNode } from 'react';
import head from 'lodash.head';
import { Routes, Route } from 'react-router-dom';
import { Featured } from '@teambit/bit.quick-start.featured';
// import { ComponentShowcase } from '@teambit/community.component-showcase';
import { QuickStartType } from './quick-start-type';

export type QuickStartLobbyProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;

  intro?: ReactNode;

  quickStarts: QuickStartType[];
};

const react = {
  src: 'https://static.bit.dev/extensions-icons/react.svg',
  inactiveSrc: 'https://static.bit.dev/extensions-icons/react_grey.svg',
  alt: 'React',
  href: '/',
  componentId: '',
};

export function QuickStartLobby({ quickStarts }: QuickStartLobbyProps) {
  const defaultQuickStart = head(quickStarts);

  return (
    <>
      <Featured
        cards={quickStarts.map((quickStart) => {
          return {
            heading: quickStart.displayName,
            path: quickStart.name,
            description: quickStart.description,
            frameworkLogos: [react],
          };
        })}
      />

      <Routes>
        {quickStarts.map((quickStart) => {
          // const path = [pathname, quickStart.name].join('/');
          // console.log(path);
          return <Route key={quickStart.name} path={quickStart.name} element={quickStart.component} />;
        })}

        <Route path="*" element={defaultQuickStart.component} />
      </Routes>
    </>
  );
}
