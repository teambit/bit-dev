import React from 'react';
import { Sidebar } from './sidebar';

export const BasicSidebar = () => (
  <Sidebar style={{ width: 300 }} paths={[{id: 'Getting Started/Quick Start', icon: 'workspace'}, 
  {id: 'Getting Started', icon: 'workspace'}, 
  {id: 'Getting Started/Composing Components/Create Components', icon: 'spinner', open: false}, // the first mention of a folder defined icon and open status
  {id: 'Getting Started/Composing Components/Create-workspace', icon: 'workspace', open: true},
  {id: 'Workspace'},
  {id: 'Scope'}
  ]} />
);
