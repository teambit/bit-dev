
/**
 * maintained by design tokens go here!
 * the designer.
 */
export const baseThemeDefaults: BaseThemeType = {
  primaryColor: '#6C5CE7',
  onPrimaryColor: '#FFFFFF',
  focusOpacity: '.12',
  hoverOpacity: '.08',
  backgroundColor: '#FFFFFF',
  onBackgroundColor: '#2B2B2B',
  onBackgroundColorMedium: '#707279',
  onBackgroundColorHigh: '#9598A1',
  borderColor: '#E3E5E9',
  surfaceColor: '#FFFFFF',
  onSurfaceColor: '#2B2B2B',
  surfaceHoverColor: '#707279',
  surfaceActiveColor: '#DDDDDD',
};

/**
 * a point for agreement between designers and developers.
 */
export interface BaseThemeType {
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
   * surface color.
   */
  surfaceColor: string;

  /**
   * a color to be used on top of the surfaceColor
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
}
