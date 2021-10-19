export const sidebarMock = {
  id: '',
  children: [
    {
      id: 'quick-start',
      payload: {
        title: 'Quick Start',
        path: '/docs/quick-start',
      },
    },
    {
      id: 'getting-started',
      children: [
        {
          id: 'installing-bit',
          payload: {
            open: false,
            title: 'Installing Bit',
            path: '/docs/getting-started/installing-bit',
          },
          children: [
            {
              id: 'installing-bit',
              payload: {
                title: 'Installing Bit',
                path: '/docs/getting-started/installing-bit',
              },
            },
            {
              id: 'create-new-workspace',
              payload: {
                title: 'Create a new Workspace',
                path: '/docs/getting-started/create-new-workspace',
              },
            },
            {
              id: 'composing',
              children: [
                {
                  id: 'creating-components',
                  payload: {
                    title: 'Creating Components',
                    path: '/docs/getting-started/composing/creating-components',
                  },
                },
                {
                  id: 'dev-environments',
                  payload: {
                    title: 'Dev environments',
                    path: '/docs/getting-started/composing/dev-environments',
                  },
                },
                {
                  id: 'use-dependencies',
                  payload: {
                    title: 'Use dependencies',
                    path: '/docs/getting-started/composing/use-dependencies',
                  },
                },
              ],
              payload: {
                open: false,
                title: 'Composing',
                path: '/docs/getting-started/composing/composing',
              },
            },
          ],
        },
        {
          id: 'create-new-workspace',
          payload: {
            title: 'Create a new Workspace',
            path: '/docs/getting-started/create-new-workspace',
          },
        },
        {
          id: 'composing',
          children: [
            {
              id: 'creating-components',
              payload: {
                title: 'Creating Components',
                path: '/docs/getting-started/composing/creating-components',
              },
            },
            {
              id: 'dev-environments',
              payload: {
                title: 'Dev environments',
                path: '/docs/getting-started/composing/dev-environments',
              },
            },
            {
              id: 'use-dependencies',
              payload: {
                title: 'Use dependencies',
                path: '/docs/getting-started/composing/use-dependencies',
              },
            },
          ],
          payload: {
            open: false,
            title: 'Composing',
            path: '/docs/getting-started/composing/composing',
          },
        },
      ],
      payload: {
        icon: 'workspace',
        title: 'Getting Started',
        path: '/docs/getting-started/getting-started',
      },
    },
  ],
};
