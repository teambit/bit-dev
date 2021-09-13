import React from "react";
import { Link } from "./link";

export const BasicLink = () => (
  <Link href="https://bit.dev">
    bit.dev
  </Link>
);
export const ExternalLink = () => (
  <Link href="https://bit.dev" external>
    bit.dev
  </Link>
);
