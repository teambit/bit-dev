export const workspaceJson = `/**
* The workspace.jsonc file is the workspace configuration file. This configuration file lists the Bit aspects (a type of components that compose Bit) to use by this workspace, as well as their config.
* 
* For example, the dependency-resolver aspect is used by this workspace. It is configured to use 'pnpm' as a package manager. It is also configured to install version ^4.17.21 of 'lodash'. 
*/

{
  "teambit.workspace/workspace": {
    /* the workspace name (used only for development) */
    "name": "my-workspace",
    "icon": "https://static.bit.dev/bit-logo.svg",
    /* the directory location for new and imported components
     * this config pla
     **/
    "defaultDirectory": "{scope}/{name}",
    "defaultScope": "my-org.my-scope"
  },
  "teambit.dependencies/dependency-resolver": {
    "packageManager": "teambit.dependencies/pnpm",
    "policy": {
      "dependencies": {
        "lodash": "^4.17.21"
      },
    }
  },
}`;
