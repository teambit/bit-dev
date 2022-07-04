import React from 'react';
import { Card, CardProps } from '@teambit/bit.quick-start.card';
import { useLocation, useNavigate } from '@teambit/base-react.navigation.link';
import { H3 } from '@teambit/design.ui.heading';
import { Carousel } from '@teambit/design.content.carousel';

import classNames from 'classnames';
import styles from './featured.module.scss';

export type FeaturedProps = {
  /**
   * card objects to be rendered
   */
  cards: CardProps[];
} & React.HTMLAttributes<HTMLDivElement>;

export function Featured({ cards = [], className, ...rest }: FeaturedProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (card: CardProps) => {
    const pathname = location?.pathname;
    const parts = pathname?.split('/');
    if (!parts?.length) return false;
    return parts[parts.length - 1] === card.path;
  };

  const activeCardIndex = cards.findIndex((card) => isActive(card));
  const activeIndex = activeCardIndex === -1 ? 0 : activeCardIndex;

  return (
    <div data-testid="featured-container" {...rest} className={classNames(styles.featured, className)}>
      <H3 data-testid="featured heading" className={styles.heading}>
        Start building from composable examples...
      </H3>

      <Carousel animation={false} className={styles.carousel} buttonGroupPosition="topRight">
        {cards.map((card, index) => (
          <Card
            data-testid={`card-${index}`}
            onClick={() => navigate(card.path || card.heading || '')}
            selected={activeIndex === index}
            key={card?.heading}
            className={styles.card}
            heading={card?.heading}
            description={card?.description}
            frameworkLogos={card.frameworkLogos}
          />
        ))}
      </Carousel>
    </div>
  );
}
