export const workspaceJson = `/**
* The workspace.jsonc file is the workspace configuration file. 
* It lists which Bit aspects (a type of components that compose Bit) 
* are to be used by this workspace, and provides them with config.
*/
{
  /* config for the 'workspace' aspect */
  "teambit.workspace/workspace": {
    /* the workspace name (used only for development) */
    "name": "tasks-workspace",
    "icon": "https://static.bit.dev/bit-logo.svg",
    /* 
     * the directory location for new and imported components.
     * the 'scope' and 'name' placeholders corresponds 
     * to the name and scope of each component
     **/
    "defaultDirectory": "{scope}/{name}",
    /* the default remote scope for new components */
    "defaultScope": "my-org.tasks-scope"
  },
  /* config for the 'dependency-resolver' aspect */
  "teambit.dependencies/dependency-resolver": {
    /* the package manager to use by this aspect */
    "packageManager": "teambit.dependencies/pnpm",
    /* the dependencies to install in this workspace */
    "policy": {
      "dependencies": {
       "@teambit/eslint-config-bit-react": "~0.0.367",
        "@typescript-eslint/eslint-plugin": "4.29.3",
        // ...
      },
    }
  },
}`;
