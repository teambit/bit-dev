import React from 'react';
import { Card, CardProps } from '@teambit/bit.quick-start.card';
import { H3 } from '@teambit/design.ui.heading';
import { Carousel } from '@teambit/design.content.carousel';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import styles from './featured.module.scss';

export type FeaturedProps = {
  /**
   * card objects to be rendered
   */
  cards: CardProps[];
} & React.HTMLAttributes<HTMLDivElement>;

export function Featured({ cards = [], className, ...rest }: FeaturedProps) {
  const [selected, setIsSelected] = React.useState(0);
  const navigate = useNavigate();
  const handleClick = (index: number, pathName: string, componentId: string) => {
    setIsSelected(index);
    navigate(pathName, { state: { componentId } });
  };

  return (
    <>
      <div data-testid="featured-container" {...rest} className={classNames(styles.featured, className)}>
        <H3 data-testid="featured heading" className={styles.heading}>
          Start by building your own composable...
        </H3>

        <Carousel animation={false} className={styles.carousel} buttonGroupPosition="topRight">
          {cards.map((card, index) => (
            <Card
              data-testid={`card-${index}`}
              onClick={() =>
                handleClick(index, card.path || card.heading || '', card.frameworkLogos?.[0]?.componentId || '')
              }
              selected={selected === index}
              key={card?.heading}
              className={styles.card}
              heading={card?.heading}
              description={card?.description}
              frameworkLogos={card.frameworkLogos}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}
