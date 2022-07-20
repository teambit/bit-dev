import React from "react";
import classNames from "classnames";
import { Icon } from "@teambit/design.elements.icon";
import { GithubStars } from "@teambit/community.ui.github-stars";
import { ExternalLink } from "@teambit/design.ui.external-link";
import { ThemeToggler } from "@teambit/design.themes.theme-toggler";
import {
  Header as BaseHeader,
  HeaderProps as BaseHeaderProps,
} from "@teambit/design.blocks.header";
import { Toggler } from "@teambit/community.ui.community-highlighter";
import { headerContent } from "./header-links";

import styles from "./header.module.scss";
import { StackOverflowLink } from "./stackoverflow-link";

export type HeaderProps = {} & BaseHeaderProps;

const badgesArray = [
  <GithubStars key="gh-stars" className={styles.githubLink} />,
  <ExternalLink
    className={styles.youtubeLink}
    key="youtube"
    href="https://www.youtube.com/c/Bitdev/videos"
  >
    <Icon of="youtube-logo" />
  </ExternalLink>,
  <ExternalLink
    key="slack"
    href="https://join.slack.com/t/bit-dev-community/shared_invite/zt-1cdjmhrn8-7jrzi0NklvibjIGIX0jtOg"
  >
    <Icon of="slack" />
  </ExternalLink>,
  <StackOverflowLink key="stack" />,
];

const pluginsArray = [
  <Toggler key="highlighter-toggler" />,
  <ThemeToggler key="theme-toggler" />,
];

export function Header({
  className,
  badges = [],
  plugins = [],
  ...rest
}: HeaderProps) {
  return (
    <BaseHeader
      {...rest}
      className={classNames(styles.header, className)}
      menuLinks={headerContent}
      badges={[...badgesArray, ...badges]}
      plugins={[...plugins, ...pluginsArray]}
    />
  );
}
