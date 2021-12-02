import React from 'react';
import { IconLink } from './icon-link';

export const LinkWithIcon = () => <IconLink text="Slack" icon="slack" href="https://slack.com" external />;

export const LinkWithImage = () => (
  <IconLink
    text="Bit"
    icon="https://static.bit.dev/bit-logo.svg"
    href="https://bit.dev"
    external
    data-testid="bit-link"
  />
);

export const PlainLink = () => <IconLink text="Bit" href="https://bit.dev" external data-testid="simple-link" />;
