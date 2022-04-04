import React, { useState } from 'react';
import classNames from 'classnames';
import { Scrollbar } from '@teambit/design.ui.styles.scrollbar';
import { Sidebar as SidebarWrapper } from '@teambit/design.ui.sidebar.sidebar';
import { Collapser } from '@teambit/ui-foundation.ui.buttons.collapser';
import type { SidebarTreeNode } from './sidebar-section';
import { SidebarSection } from './sidebar-section';
import { Tree } from './tree';
import styles from './sidebar.module.scss';
import { PrimaryLinks } from './primary-links';

export type SidebarProps = {
  /**
   * primary links.
   */
  primaryLinks?: SidebarTreeNode;

  /**
   * sections of the sidebar. each section includes a title and a tree of nodes.
   */
  sections?: SidebarSection[];

  /**
   * prefix for all rendered links in the sidebar.
   */
  linkPrefix?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Sidebar({ primaryLinks, sections, className, linkPrefix, ...rest }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...rest} className={classNames(styles.sidebar, className)}>
      <SidebarWrapper isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} className={styles.sidebarContent}>
        <Scrollbar className={styles.scrollbar}>
          {primaryLinks && <PrimaryLinks links={primaryLinks} />}
          {sections?.map((category) => {
            if (!category) return null;
            return (
              <Tree
                key={category.title}
                displayTitle={category.title}
                tree={category?.routes?.toSideBarTree()}
                // linkPrefix={linkPrefix}
                className={category?.className}
              />
            );
          })}
        </Scrollbar>
      </SidebarWrapper>
      <Collapser
        tooltipContent="Open sidebar"
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        placement="right"
        className={styles.collapser}
      />
    </div>
  );
}
