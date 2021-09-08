import React, { ReactNode, useRef } from 'react';
import { useButton } from '@react-aria/button';
import type { AriaButtonProps } from '@react-types/button';

export type ButtonElementType = 'div' | 'a' | 'button' | 'span';

export type ButtonProps = {
  /**
   * children of the Button.
   */
  children: ReactNode,

  /**
   * element type to use. could be either 'div' | 'a' | 'span' | 'button'
   */
  elementType?: ButtonElementType,

  /**
   * class names to inject.
   */
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement> & AriaButtonProps;

export function Button(props: ButtonProps) {
  const ref = useRef();
  const elementType = props.elementType || 'button';
  const Element = elementType;

  const { buttonProps } = useButton({
    ...props,
    elementType: props.elementType
  }, ref);

  const allProps = {
    ...props,
    ...buttonProps
  }
  
  return (
    <Element ref={ref} {...allProps}>{props.children}</Element>
  );
}
