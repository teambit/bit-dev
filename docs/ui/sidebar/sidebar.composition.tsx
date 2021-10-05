import React from 'react';
import { Sidebar } from './sidebar';

export const BasicSidebar = () => (
  <Sidebar style={{ width: 300 }} tree={{
    id: '',
    children: [
      {
        id: 'quick-start',
        payload: {
          title: 'Quick Start',
          icon: ''
        },
      },
      {
        id: 'getting-started',
        children: [
          {
            id: 'installing-bit',
            payload: {
              title: 'Installing Bit',
              icon: ''
            },
          },
          {
            id: 'create-workspace',
            payload: {
              title: 'Create a new Workspace',
              icon: ''
            }
          }
        ],
      }
    ]
  }} />
);
