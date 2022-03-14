import React, { ReactNode } from "react";
import { ComponentID } from "@teambit/component-id";
import { QuickStart } from "@teambit/bit.quick-start";

export type BlogQuickStartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function BlogQuickStart({ children }: BlogQuickStartProps) {
  const id = ComponentID.fromString("teambit.blog/starter/starter-blog");
  const components = [
    "teambit.blog/blog",
    "teambit.blog/blog",
    "teambit.blog/pages/lobby",
    "teambit.blog/pages/blog-post",
  ];

  return (
    // @ts-ignore
    <QuickStart name="blog" id={id} components={components}>
      {children}
    </QuickStart>
  );
}
