import React from "react";
import {
  GridGraph,
  GridGraphProps,
  getValidId,
  positions,
  getCell,
} from "@teambit/community.ui.graph.grid-graph";

import { Bubble } from '@teambit/community.entity.hero-graph'

import { Edge } from "@teambit/community.ui.graph.edge";
import { ComponentBubble } from "@teambit/community.ui.graph.component-bubble";

import styles from "./bubble-graph.module.scss";

export type BubbleGraphProps = {
  list: Bubble[];
} & GridGraphProps;

export function BubbleGraph({ list, children, ...rest }: BubbleGraphProps) {
  // console.log("list", list)
  return (
    <GridGraph >
        {list.map((bubble) => {
          const id = getValidId(bubble.id.toString({ignoreVersion: true}))
          const cell = getCell(bubble.row, bubble.col)
          const bubblePosition = bubble.position && positions[bubble.position];
          return (
            <div className={styles.bubbleContainer} style={{ ...cell, ...bubblePosition }}>
              <ComponentBubble key={id} componentId={bubble.id} className={styles.bubble} id={id} icon={bubble.icon} />
              {bubble.dependencies.map((dependency) => {
                const idStr = getValidId(dependency.toString())
                const egdeProps = bubble?.edges?.[dependency.toString()] || {};
                return <Edge key={`${id}->${idStr}`} start={id} end={idStr} {...egdeProps} />
              })}
            </div>
          )
        })}
        {children}
      </GridGraph>
  );
}
