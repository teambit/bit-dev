import React from 'react';
import { ExternalLink } from '@teambit/design.ui.external-link';

export function StackOverflowLink() {
  return (
    <ExternalLink href="https://stackoverflow.com/questions/tagged/bit.dev">
      <StackOverflowIcon />
    </ExternalLink>
  );
}

function StackOverflowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M410.016 466.432H79.186V329.216H32V512h425.731V329.216h-47.715v137.216zM131.673 316.416l9.543-44.544 231.689 47.104-9.546 44.544-231.686-47.104zm30.22-107.008l20.147-41.472 214.19 96.768-19.616 41.472-214.721-96.768zm59.381-101.376l30.22-35.328 181.851 146.432-30.221 35.328-181.85-146.432zM338.973 0L480 183.296l-37.642 27.136L300.799 27.136 338.972 0zM126.371 420.352v-45.568H363.36v45.568H126.372z"
      />
    </svg>
  );
}
