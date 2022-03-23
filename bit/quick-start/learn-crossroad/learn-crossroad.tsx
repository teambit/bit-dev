import React from 'react';
import classnames from 'classnames';
import { Image } from '@teambit/base-react.content.image';
import { H4 } from '@teambit/design.ui.heading';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { Link } from '@teambit/base-react.navigation.link';
import { Edge } from '@teambit/design.graph.edge';
import styles from './learn-crossroad.module.scss';

export type LearnCrossroadProps = {
  /**
   * title of the crossroad
   * @default "Thinking in components"
   * */
  title: string;
  /**
   * description of the crossroad
   * @default "Learn how to use components in your projects"
   * */
  description?: string;

  /**
   * link to the learn page
   * @default "/learn"
   * */
  link: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function LearnCrossroad({ title, description, link, className, ...rest }: LearnCrossroadProps) {
  return (
    <div className={classnames(styles.thinkingInComponents, className)} {...rest}>
      <div className={styles.arrows}>
        <Edge
          data-testid="edge"
          start="a"
          end="b"
          color="#C7BFFF"
          strokeWidth={6}
          startAnchor="bottom"
          endAnchor="right"
        />
        <Edge data-testid="secondEdge" start="a" end="d" color="#6C5CE7" strokeWidth={6} />
        <div data-testid="round" className={styles.round} />
        <div id="a" className={styles.anchorStart} />
        <div id="b" className={styles.anchorEndB} />
        <div id="d" className={styles.anchorEnd} />
      </div>
      <div className={styles.content}>
        <Link href={link} className={styles.link} data-testid="link">
          <H4 data-testid="heading" className={styles.heading} style={{ margin: 0 }}>
            {title}{' '}
          </H4>
          <Paragraph data-testid="description" className={styles.paragraph}>
            {description}
          </Paragraph>
        </Link>
      </div>
    </div>
  );
}
