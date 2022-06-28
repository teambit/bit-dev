export const aboutBitDir = `The .bit directory serves as the 'local scope'. It is used by this workspace to store and manage component versions.

Workspaces versioned with git will have this directory nested under the .git directory (.git/.bit). This is done so as to avoid tracking it by git. The source-of-truth for components is in their remote scopes, not in any specific workspace.
`;
