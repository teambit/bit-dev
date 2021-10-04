import React from 'react';
import { Sidebar } from './sidebar';

export const BasicSidebar = () => (
  <Sidebar style={{ width: 300 }} paths={[
    {id: 'Getting Started/Quick Start'}, 
    {id: 'Getting Started/', icon: 'workspace'}, 
    {id: 'Getting Started/Composing Components/', icon: 'workspace', open: false},
    {id: 'Getting Started/Composing Components/Create Components'},
    {id: 'Workspace'},
    {id: 'Scope'},
  ]} />
);
