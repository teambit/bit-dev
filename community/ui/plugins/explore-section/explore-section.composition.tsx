import React from 'react';
import { highlightClass } from '@teambit/community.ui.heading';
import { ExploreSection } from './explore-section';

export const BasicExploreSection = () => (
  <ExploreSection
    title={
      <div>
        Explore <span className={highlightClass}>Bit Plugins</span>
      </div>
    }
    subtitle="Enhance and customize your development experience with dozens of official and community Plugins."
  />
);
