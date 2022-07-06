import React, { ReactNode, useState, useRef } from 'react';
import copy from 'copy-to-clipboard';
import { CopiedMessage } from '@teambit/documenter.ui.copied-message';
// @ts-ignore
import style from './style.module.scss';

export type TerminalProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  isOutput?: boolean;
};

export function Terminal({ children, isOutput = false }: TerminalProps) {
  const commandSpan = useRef<HTMLSpanElement>(null);
  const [isCopied, setIsCopied] = useState(false);
  const htmlRegex = /(<([^>]+)>)/gi;
  const spacesRegex = /\s\s+/g;

  const handleClick = () => {
    if (!commandSpan.current) return;
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
    copy(
      commandSpan.current.innerHTML
        .replace(htmlRegex, ' ')
        .replace(spacesRegex, ' ')
        .trim()
    );
  };

  return (
    <div className={style.wrapper} data-testid="terminal-wrapper">
      <div className={style.terminal} data-testid="terminal">
        {!isOutput && <span className={style.dollarSign}>$</span>}
        <span ref={commandSpan} data-testid="terminal-text-field">
          {children}
        </span>
        {!isOutput && (
          <div className={style.copy}>
            <CopiedMessage show={isCopied} />
            <img
              src="https://static.bit.cloud/Community/icons/copy.svg"
              onClick={handleClick}
              className={style.copyIcon}
              alt="copy"
            />
          </div>
        )}
      </div>
    </div>
  );
}
