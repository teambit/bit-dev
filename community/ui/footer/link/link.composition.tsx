import React from 'react';
import { Link } from './link';

export const LinkWithIcon = () => <Link text="Slack" icon="slack" href="https://slack.com" external />;

export const LinkWithImage = () => (
  <Link text="Bit" icon="https://static.bit.dev/bit-logo.svg" href="https://bit.dev" external data-testid="bit-link" />
);

export const PlainLink = () => <Link text="Bit" href="https://bit.dev" external data-testid="simple-link" />;
