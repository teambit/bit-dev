import React from 'react';

export type GithubProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Github({ text }: GithubProps) {
  return (
    <div>
      {text}
    </div>
  );
}
