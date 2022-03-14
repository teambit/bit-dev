import React from 'react';
import { CreateWorkspace } from '@teambit/docs.content.getting-started.create-workspace';
import { DocPage } from './doc-page';

export const BasicDocPage = () => (
  <DocPage
    index={0}
    route={{ title: 'Create a new Workspace', component: <CreateWorkspace />, absPath: '/', path: '/', plugins: [] }}
  >
    <CreateWorkspace />
  </DocPage>
);
