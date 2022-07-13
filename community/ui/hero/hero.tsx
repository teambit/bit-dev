import React, { useEffect } from "react";
import { Heading } from "@teambit/community.ui.heading";
import classNames from "classnames";
import { WideColumn } from "@teambit/base-ui.layout.page-frame";
import { Button } from "@teambit/design.ui.buttons.button";
import { Subtitle } from "@teambit/design.ui.content.subtitle";
import { BubbleNode } from "@teambit/community.entity.graph.bubble-graph";
// import { GridNode } from '@teambit/community.entity.graph.grid-graph';
import { CopyBox } from "@teambit/documenter.ui.copy-box";
import { ComponentID } from "@teambit/component-id";
import { BubbleHighlighter } from "@teambit/community.ui.bubble-highlighter";
import { BubbleGraph } from "@teambit/community.ui.graph.bubble-graph";
import { useXarrow } from "react-xarrows";
import styles from "./hero.module.scss";
import { useHeroState, HeroState } from "./use-hero-state";

export type HeroProps = {
  /**
   * title to use in the Hero section.
   */
  title?: string;

  /**
   * teaser.
   */
  teaser?: string;

  /**
   * state for hero background graph.
   */
  bubbles: BubbleNode[];
};

const defaultTitle = "Build anything in components";
const defaultTeaser =
  "An open-source toolchain for component-driven software. Forget monolithic apps and distribute development to components.";

export function Hero({
  title = defaultTitle,
  teaser = defaultTeaser,
  bubbles,
  ...rest
}: HeroProps) {
  const { heroState } = useHeroState();
  const updateXarrow = useXarrow();

  useEffect(() => {
    const tid = setTimeout(updateXarrow, 80);
    return () => clearTimeout(tid);
  }, []);
  // const headingClass = heroState === HeroState.HEADING_UPDATED ? styles.highlight : '';

  return (
    <WideColumn {...rest}>
      <BubbleGraph nodes={bubbles} className={styles.heroGraph}>
        <div className={styles.title}>
          <BubbleHighlighter
            showId
            cornerSvgSize={40}
            cornerSvgClassName={styles.largeSvg}
            className={classNames(styles.titleHighlighter)}
            componentId={ComponentID.fromString("teambit.community/ui/heading")}
          >
            <Heading
              className={styles.heading}
              highlight={heroState === HeroState.HEADING_UPDATED}
            >
              {title}
            </Heading>
          </BubbleHighlighter>
        </div>
        <div className={styles.subTitle}>
          <BubbleHighlighter
            cornerSvgSize={20}
            cornerSvgClassName={styles.subtitleSvg}
            showId
            className={classNames(styles.subtitleHighlighter)}
            componentId={ComponentID.fromString(
              "teambit.design/ui/content/subtitle"
            )}
          >
            <Subtitle className={styles.marginZero}>{teaser}</Subtitle>
          </BubbleHighlighter>
        </div>
        <div className={styles.getStarted}>
          <BubbleHighlighter
            componentId={ComponentID.fromString(
              "teambit.design/ui/buttons/button"
            )}
            showId
          >
            <Button
              className={styles.getStartedAction}
              href="/docs/quick-start"
            >
              Getting Started
            </Button>
          </BubbleHighlighter>
          <BubbleHighlighter
            componentId={ComponentID.fromString(
              "teambit.documenter/ui/copy-box"
            )}
            showId
          >
            <CopyBox className={styles.copyBox}>
              npx @teambit/bvm install
            </CopyBox>
          </BubbleHighlighter>
        </div>
      </BubbleGraph>
    </WideColumn>
  );
}
