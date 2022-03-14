import React from 'react';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
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
  const bitNew = `bit new ${workspaceTemplateName} ${defaultWorkspaceName} --default-scope ${defaultScopeName}`;
  const changeDir = `cd ${defaultWorkspaceName}`;
  return (
    <>
      <WorkspacePre />
      <div style={{ maxWidth: '80%', marginLeft: '9%', marginBottom: '10px' }}>
        <CodeSnippet language="bash">{bitNew}</CodeSnippet>
        <br />
        <CodeSnippet language="bash">{changeDir}</CodeSnippet>
        {/* <br /> */}
        {/* <CodeSnippet language="bash">bit start</CodeSnippet> */}
      </div>
      <WorkspacePost />
    </>
  );
}
