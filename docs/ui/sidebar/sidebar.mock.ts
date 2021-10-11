export const sidebarMock = {
  id: '',
  children: [
    {
      id: 'quick-start',
      payload: {
        collapsed: false,
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
            collapsed: false,
            title: 'Installing Bit',
            path: '/docs/getting-started/installing-bit',
          },
          children: [
            {
              id: 'installing-bit',
              payload: {
                collapsed: false,
                title: 'Installing Bit',
                path: '/docs/getting-started/installing-bit',
              },
            },
            {
              id: 'create-new-workspace',
              payload: {
                collapsed: false,
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
                    collapsed: false,
                    title: 'Creating Components',
                    path: '/docs/getting-started/composing/creating-components',
                  },
                },
                {
                  id: 'dev-environments',
                  payload: {
                    collapsed: false,
                    title: 'Dev environments',
                    path: '/docs/getting-started/composing/dev-environments',
                  },
                },
                {
                  id: 'use-dependencies',
                  payload: {
                    collapsed: false,
                    title: 'Use dependencies',
                    path: '/docs/getting-started/composing/use-dependencies',
                  },
                },
              ],
              payload: {
                collapsed: false,
                title: 'Composing',
                path: '/docs/getting-started/composing/composing',
              },
            },
          ],
        },
        {
          id: 'create-new-workspace',
          payload: {
            collapsed: false,
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
                collapsed: false,
                title: 'Creating Components',
                path: '/docs/getting-started/composing/creating-components',
              },
            },
            {
              id: 'dev-environments',
              payload: {
                collapsed: false,
                title: 'Dev environments',
                path: '/docs/getting-started/composing/dev-environments',
              },
            },
            {
              id: 'use-dependencies',
              payload: {
                collapsed: false,
                title: 'Use dependencies',
                path: '/docs/getting-started/composing/use-dependencies',
              },
            },
          ],
          payload: {
            collapsed: false,
            title: 'Composing',
            path: '/docs/getting-started/composing/composing',
          },
        },
      ],
      payload: {
        icon: 'workspace',
        collapsed: false,
        title: 'Getting Started',
        path: '/docs/getting-started/getting-started',
      },
    },
  ],
};
