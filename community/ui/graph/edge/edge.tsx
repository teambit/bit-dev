import React from 'react';
import XArrow, {xarrowPropsType as XArrowProps} from 'react-xarrows';

export type EdgeProps = {

  /**
   * color of the edge. applies on both line and arrow.
   */
  color?: string,

  /**
   * number of px for line width.
   */
  strokeWidth?: number,

  /**
   * a text to be rendered in the component.
   */
  // text: string
} & XArrowProps & React.HTMLAttributes<HTMLDivElement>;

export function Edge({ strokeWidth = 2, color = '#ECEAFF', ...rest }: EdgeProps) {
  return (
    <div {...rest}>
      <XArrow animateDrawing strokeWidth={strokeWidth} color={color} {...rest}>
        {rest}
      </XArrow>
    </div>
  );
}
