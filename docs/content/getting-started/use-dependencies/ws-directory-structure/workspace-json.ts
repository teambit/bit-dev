export const workspaceJson = `{
  // ...
  /* config for the 'dependency-resolver' aspect */
  "teambit.dependencies/dependency-resolver": {
    /* the package manager to use for installation */
    "packageManager": "teambit.dependencies/pnpm",
    /* the dependencies to install in this workspace */
    "policy": {
      "dependencies": {
        "@teambit/design.inputs.input-text": "0.0.2",
        // ...
      },
      "peerDependencies": {
        // ...
      }
    }
  },
  "teambit.workspace/variants": {}
}`;
