export const workspaceJson = `{
  // ...
  "teambit.dependencies/dependency-resolver": {
    /**
     *  packages and components to install in this workspace.
     *  imported components are not managed here.
     * */
    "policy": {
      "dependencies": {
        /* an installed component (see 'Use dependencies' page) */
        "@teambit/design.inputs.input-text": "0.0.2",
        // ...
      },
      // ...
    }
  },
}`;
