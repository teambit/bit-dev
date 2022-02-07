import { BaseThemeSchema } from './base-theme-schema';

/**
 * maintained by design tokens go here!
 * the designer.
 */
export const baseThemeDefaults: BaseThemeSchema = {
  focusOpacity: '.12',
  hoverOpacity: '.08',

  primaryColor: '#6C5CE7',
  onPrimaryColor: '#FFFFFF',
  borderColor: '#E3E5E9',
  backgroundColor: '#FFFFFF',
  // TODO: @kutner why removed this?
  onBackgroundColor: '#9598A1',
  onBackgroundColorLow: '#9598A1',
  onBackgroundColorMedium: '#707279',
  onBackgroundColorHigh: '#2B2B2BF0',

  onSurfaceColor: '#2B2B2B',
  // surface01Color: '#FFFBFF',
  // surface02Color: '#F7F2FD',
  // surface03Color: '#F2EDFC',
  // surface04Color: '#EDE7FA',
  // surface05Color: '#EBE5FA',
  // surface06Color: '#E8E2F9',

  surfaceColor: '#FFFFFF',
  surfaceHoverColor: '#EDEBFC',
  surfaceActiveColor: '#DCD8F9',
  surfaceFocusColor: '#E2DEFA',
};
