import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component-id';
import { MemoryRouter, UNSAFE_LocationContext } from 'react-router-dom';
import { StarterBlog } from '@teambit/blog.starter.starter-blog';
import { QuickStart } from '@teambit/bit.quick-start';
import Intro from './intro.mdx';
import StarterBlogIntro from './starter-blog-intro.mdx';
import StarterBlogEnding from './starter-blog-ending.mdx';
import BlogIntro from './blog-intro.mdx';
import BlogEnding from './blog-ending.mdx';
import LobbyIntro from './lobby-intro.mdx';
import LobbyEnding from './lobby-ending.mdx';
import BlogPostIntro from './blog-post-intro.mdx';
import BlogPostEnding from './blog-post-ending.mdx';

export type BlogQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function BlogQuickStart({ children }: BlogQuickStartProps) {
  const id = ComponentID.fromString('teambit.blog/starter/starter-blog');
  const components = [
    {
      id: 'teambit.blog/starter/starter-blog',
      intro: <StarterBlogIntro />,
      ending: <StarterBlogEnding />,
    },
    {
      id: 'teambit.blog/blog',
      intro: <BlogIntro />,
      ending: <BlogEnding />,
    },
    {
      id: 'teambit.blog/pages/lobby',
      intro: <LobbyIntro />,
      ending: <LobbyEnding />,
    },
    {
      id: 'teambit.blog/starter/blog-posts/post-one',
      intro: <BlogPostIntro />,
      ending: <BlogPostEnding />,
    },
  ];

  return (
    <QuickStart
      defaultWorkspaceName="react-blog"
      name="blog"
      intro={<Intro />}
      id={id}
      components={components}
      mainComponent={
        <UNSAFE_LocationContext.Provider value={null as any}>
          <MemoryRouter>
            <StarterBlog />
          </MemoryRouter>
        </UNSAFE_LocationContext.Provider>
      }
    >
      {children}
    </QuickStart>
  );
}
