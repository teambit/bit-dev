import React from "react";
import {
  GridGraph,
  GridGraphProps,
  getValidId,
  getCell,
} from "@teambit/community.ui.graph.grid-graph";
import { Edge } from "@teambit/community.ui.graph.edge";
import { ComponentBubble } from "@teambit/community.ui.graph.component-bubble";
import styles from "./bubble-graph.module.scss";

export type BubbleGraphProps = {} & GridGraphProps;

export function BubbleGraph({ list, children, ...rest }: BubbleGraphProps) {
  // console.log("list", list)
  return (
    // <div>
    <GridGraph
      className={styles.hero}
      {...rest}
      list={list}
      Item={({ id, dependencies, ...rest }) => {
        console.log("id>>", id);
        const componentId = getValidId(id.toString({ ignoreVersion: true }));
        return (
          <div>
            <ComponentBubble
              {...rest}
              id={id}
              componentId={id}
              className={styles.bubble}
            />
            {dependencies.map((dependency) => {
              const depId = getValidId(
                dependency.toString({ ignoreVersion: true })
              );
              console.log("depId", depId);
              // console.log("componentId", componentId)
              return (
                <Edge
                  key={`${componentId}->${depId}`}
                  start={componentId}
                  end={depId}
                />
              );
            })}
          </div>
        );
      }}
    >
      {children}
    </GridGraph>
    // </div>
  );
}
