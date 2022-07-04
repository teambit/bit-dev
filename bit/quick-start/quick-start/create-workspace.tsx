import React from 'react';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import { centerColumn } from '@teambit/base-ui.layout.page-frame';
import { BitNew, BitNewProps, CdNewWorkspace } from './commands';
import WorkspacePost from './workspace-post.mdx';
import WorkspacePre from './workspace-pre.mdx';

export type CreateWorkspaceProps = {
  defaultWorkspaceName: string;

  defaultScopeName: string;

  workspaceTemplateName: string;
};

export function CreateWorkspace({
  defaultScopeName,
  defaultWorkspaceName,
  workspaceTemplateName,
}: CreateWorkspaceProps) {
  // const bitNew = `bit new ${workspaceTemplateName} ${defaultWorkspaceName} --default-scope ${defaultScopeName}`;
  const exampleValue: BitNewProps['exampleValues'] = {
    'default-scope': defaultScopeName,
    'template-name': workspaceTemplateName,
    'workspace-name': defaultWorkspaceName,
  };
  const changeDir = `cd ${defaultWorkspaceName}`;
  return (
    <>
      <WorkspacePre />
      <BitNew exampleValues={exampleValue} />
      <br />
      <CdNewWorkspace>{changeDir}</CdNewWorkspace>
      <br />
      <WorkspacePost />
    </>
  );
}
