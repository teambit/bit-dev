import React from 'react';
import { Sidebar } from './sidebar';

export const BasicSidebar = () => (
  <Sidebar style={{ width: 300 }} paths={[
    'Getting Started/Quick Start', 
    'Getting Started/Composing Components/Create Components',
    'Workspace',
    'Scope'
  ]} />
);
