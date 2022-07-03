import React, { useRef, useState, HTMLAttributes } from 'react';
import AnimateHeight from 'react-animate-height';
import cx from 'classnames';
import { Heading, Element } from '@teambit/base-ui.text.heading';
import { Separator } from '@teambit/design.ui.separator';
import { Text } from '@teambit/design.typography.text';
import { Icon } from '@teambit/design.elements.icon';
import { ellipsis } from '@teambit/design.ui.styles.ellipsis';
import { ContentExpanded } from './content-expanded';
// @ts-ignore
import styles from './styles.module.scss';

export type CollapsibleProps = {
  title: string | React.ReactNode;
  hSize?: Element;
  content: string | React.ReactNode;
  className: string;
  hasSeperator?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const ANIMATION_DURATION = 600;

export function Collapsible({
  title,
  hSize = 'h2',
  content,
  className,
  hasSeperator = true,
  ...rest
}: CollapsibleProps) {
  const [isOpen, setOpen] = useState(false);
  const isAnimating = useRef(false);

  const toggleHide = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <>
        <div
          {...rest}
          className={cx(styles.row, className)}
          onClick={() => (!isAnimating.current ? toggleHide() : null)}
        >
          <Icon
            role="openDetails"
            of="arrow_right"
            style={{
              margin: '0 1em 0 0.4em',
              transition: 'transform 100ms ease',
              transform: isOpen ? 'rotate(90deg)' : '',
            }}
          />
          <div className={cx(styles.rightAligned, ellipsis)}>
            {typeof title === 'string' ? (
              <Heading className={styles.heading} element={hSize}>
                {title}
              </Heading>
            ) : (
              title
            )}
          </div>
          <div className={styles.wrapper}>
            <Text className={styles.scopes}> </Text>
          </div>
        </div>
        <Text className={cx(styles.rightAligned, styles.padL15, styles.hide)}>{}</Text>
        {/* @ts-ignore */}
        <AnimateHeight
          duration={ANIMATION_DURATION}
          height={isOpen ? 'auto' : 0}
          onAnimationStart={() => (isAnimating.current = true)}
          onAnimationEnd={() => (isAnimating.current = false)}
        >
          <ContentExpanded showDetails={isOpen} content={content} />
        </AnimateHeight>
        {hasSeperator && <Separator className={styles.separator} />}
      </>
    </>
  );
}
