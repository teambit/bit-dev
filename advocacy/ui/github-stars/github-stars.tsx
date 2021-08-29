import React from 'react';
import {Icon} from "@teambit/design.elements.icon";
// import {useStars} from '@teambit/advocacy.ui.hooks.use-stars'
import styles from './github-stars.module.scss';

export type GithubStarsProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function GithubStars({className, ...rest}: GithubStarsProps) {
  // const stars = useStars() - cors issues 
  return (
    <div {...rest} className={styles.githubStars}>
      <Icon of="github-logo" />
      <span>teambit/bit</span>
      <Icon of="experience" />
      <span>14k</span>
    </div>
  )
}
