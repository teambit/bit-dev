import React, { ReactNode, useRef } from 'react';
import { useButton } from '@react-aria/button';
import type { AriaButtonProps } from '@react-types/button';

export type ButtonElementType = 'a' | 'button';

export type ButtonProps = AriaButtonProps & {
  /**
   * children of the Button.
   */
  children: ReactNode,

  /**
   * link to target page. once href is used, Button is considered an A tag.
   */
  href?: string,

  /**
   * class names to inject.
   */
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const ref = useRef();

  const { buttonProps } = useButton({
    ...props,
    elementType: props.href ? 'a' : undefined
  }, ref);

  const allProps = {
    ...buttonProps,
    ...props
  };
  
  return (
    <div>
      {!props.href 
        ? <button ref={ref} {...allProps}>{props.children}</button> 
        : <div className={props.className}><a ref={ref} className="" {...allProps}>{props.children}</a></div>}
    </div>
  );
}
