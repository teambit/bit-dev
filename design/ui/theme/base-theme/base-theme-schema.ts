/**
 * a point for agreement between designers and developers.
 */
export interface BaseThemeSchema {
  /**
   * primary color.
   */
  primaryColor: string;

  /**
   * color to be applied on the primary color.
   */
  onPrimaryColor: string;

  /**
   * opacity to use for focus state.
   */
  focusOpacity: string;

  /**
   * opacity to use for hover state.
   */
  hoverOpacity: string;

  /**
   * general purpose background color.
   */
  backgroundColor: string;

  /**
   * color to use on top of a `backgroundColor`.
   */
   onBackgroundColor: string;

  /**
   * color to use on top of a `onBackgroundColor`.
   */
  onBackgroundColorLow: string;

  /**
   * a color to be used on top of a `onBackgroundColorMedium`
   */
  onBackgroundColorHigh: string;

  /**
   * a color to be used on top of a `onBackgroundColor`
   */
  onBackgroundColorMedium: string;

  /**
   * color of the border.
   */
  borderColor: string;

  /**
   * color to be used for surface on top of 'backgroundColor'
   * surface color
   */
  surfaceColor: string;

  /**
   * a color to be used on top of the surfaceColor (for texts, icons, etc)
   */
  onSurfaceColor: string;

  /**
   * color to be used on top of a surface.
   */
  surfaceHoverColor: string;

  /**
   * color to be used as active on top of a `surfaceColor`.
   */
  surfaceActiveColor: string;

  /**
   * color to be used as focus on top of a `surfaceColor`.
   */
  surfaceFocusColor: string;
}
