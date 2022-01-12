/**
 * maintained by design tokens go here!
 * the designer.
 */
export const baseThemeDefaults: BaseThemeType = {
  primaryColor: '#6C5CE7',
  onPrimaryColor: '#FFFFFF',
  focusOpacity: '.12',
  hoverOpacity: '.08',
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
}
