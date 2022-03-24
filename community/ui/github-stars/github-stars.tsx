import React from 'react';
// import millify from 'millify';
import classNames from 'classnames';
import { Icon } from '@teambit/design.elements.icon';
// import {useStars} from '@teambit/community.ui.hooks.use-stars';
import { ExternalLink } from '@teambit/design.ui.external-link';
import styles from './github-stars.module.scss';

export type GithubStarsProps = {
  /**
   * Github repo to display.
   */
  repo?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function GithubStars({ className, ...rest }: GithubStarsProps) {
  // const stars = 14755; // useStars() - cors issues TODO: guy
  return (
    <ExternalLink href="https://github.com/teambit/bit" className={classNames(styles.githubStars, className)} {...rest}>
      <Icon of="github-logo" />
      {/* <span>teambit/bit</span> */}
      {/* <Icon of="experience" /> */}
      {/* <span>{millify(stars, { lowercase: true })}</span> */}
    </ExternalLink>
  );
}
