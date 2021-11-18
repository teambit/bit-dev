import React from 'react';

const CustomImg = (
  <img
    style={{ width: 16, marginRight: 8 }}
    src="https://bitsrc.imgix.net/bf5970b9b97dfb045867dd2842eaefd1e623e328.png?size=35&w=70&h=70&crop=faces&fit=crop&bg=fff"
    alt=""
  />
);

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
      payload: {
        icon: 'https://static.bit.dev/bit-logo.svg',
        title: 'Getting Started',
        path: '/docs/getting-started/getting-started',
      },
      children: [
        {
          id: 'installing-bit',
          payload: {
            open: false,
            icon: 'workspace',
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
          payload: {
            open: false,
            icon: CustomImg,
            title: 'Composing',
            path: '/docs/getting-started/composing/composing',
            configPath: 'https://bit.dev',
          },
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
        },
      ],
    },
  ],
};

export const sidebarCategoryMock = {
  id: '',
  children: [
    {
      id: 'installing-bit',
      payload: {
        open: false,
        icon: 'workspace',
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
      ],
    },
    {
      id: 'composing',
      payload: {
        open: false,
        icon: 'compose',
        title: 'Composing',
        path: '/docs/getting-started/composing/composing',
      },
      children: [
        {
          id: 'creating-components',
          payload: {
            title: 'Creating Components',
            path: '/docs/getting-started/composing/creating-components',
          },
        },
      ],
    },
    {
      id: 'collaborate',
      payload: {
        open: false,
        icon: 'collaborate',
        title: 'Collaborate',
        path: '/docs/getting-started/collaborate/snap-component-changes',
      },
      children: [
        {
          id: 'snap-component-changes',
          payload: {
            title: 'Creating Components',
            path: '/docs/getting-started/collaborate/snap-component-changes',
          },
        },
      ],
    },
  ],
};
