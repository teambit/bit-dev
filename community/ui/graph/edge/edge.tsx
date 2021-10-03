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
   * override edge styles
   */
  className?: string;
} & XArrowProps;

export function Edge({ strokeWidth = 2, color = '#ECEAFF', className, ...rest }: EdgeProps) {
  return (
    <div className={className}>
      <XArrow animateDrawing strokeWidth={strokeWidth} color={color} {...rest}>
        {rest}
      </XArrow>
    </div>
  );
}
