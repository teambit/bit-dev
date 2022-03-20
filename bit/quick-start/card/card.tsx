import React, { ReactNode, useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { Card as DesignCard, CardProps as DesignCardProps } from '@teambit/design.ui.cards.card';
import { H3, Sizes } from '@teambit/design.ui.heading';
// import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { Image } from '@teambit/base-react.content.image';
import styles from './card.module.scss';

export type CardProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;

  /**
   * Heading of the card
   *
   */
  heading?: string;

  path?: string;

  /**
   *  Description of the card
   *  */
  description?: string;

  /**
   * Logo and name and link of the frameworks available
   *  */
  frameworkLogos?: {
    alt: string;
    src: string;
    inactiveSrc: string;
    componentId: string;
  }[];

  /**
   * Determines if the card is selected
   *  */
  selected?: boolean;
} & DesignCardProps;

export function Card({ heading, description, frameworkLogos, selected, children, className, ...rest }: CardProps) {
  const [selectedFramework, setSelectedFramework] = useState(frameworkLogos?.[0]);
  const [logoSrc, setLogoSrc] = useState<null | string>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleLogo = (logo: { alt: string; src: string; inactiveSrc: string }) => {
    if (logo === selectedFramework && selected) return selectedFramework.src;

    if (logoSrc === logo.src) return logo.src;

    return logo.inactiveSrc;
  };
  useEffect(() => {
    if (selected) {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selected]);

  return (
    <DesignCard {...rest} className={classNames(className, styles.card, selected && styles.selected)} ref={cardRef}>
      <H3 size="sm" data-testid="heading" className={styles.cardHeading}>
        {heading}
      </H3>
      <p data-testid="description" className={styles.paragraph}>
        {description}
      </p>

      <span data-testid="logos" className={classNames(styles.frameworks, selected && styles.selected)}>
        {frameworkLogos?.map((logo, index) => (
          <Image
            data-testid={`logo-${index}`}
            key={index}
            color="red"
            alt={logo.alt}
            src={handleLogo(logo)}
            className={styles.logo}
            onMouseEnter={() => setLogoSrc(logo.src)}
            onMouseLeave={() => setLogoSrc(logo.inactiveSrc)}
            onClick={() => setSelectedFramework(logo)}
          />
        ))}
      </span>
    </DesignCard>
  );
}
