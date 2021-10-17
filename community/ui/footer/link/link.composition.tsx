import React from 'react';
import { Link } from './link';

export const LinkWithIcon = () => (
  <Link text="Slack" icon="slack" href="https://slack.com"></Link>
);

export const LinkWithImage = () => (
  <Link text="Bit" icon="https://static.bit.dev/bit-logo.svg" data-testid="bit-link"></Link>
);

export const PlainLink = () => (
  <Link text="Bit" data-testid="simple-link"></Link>
);
