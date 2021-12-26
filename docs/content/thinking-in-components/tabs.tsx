import React, { ReactNode } from 'react';
import { TabContainer, TabList, Tab, TabPanel } from '@teambit/design.ui.panels.tabs';
import styles from './thinking-in-components.module.scss';

export type TabsProps = {
  tabs: string[];
  children: ReactNode[];
};

export function Tabs({ children, tabs }: TabsProps) {
  return (
    <div className={styles.tabs}>
      <TabContainer>
        <TabList>
          {tabs.map((tab) => (
            <Tab key={tab}>{tab}</Tab>
          ))}
        </TabList>
        {children.map((child) => {
          return <TabPanel>{child}</TabPanel>;
        })}
      </TabContainer>
    </div>
  );
}
