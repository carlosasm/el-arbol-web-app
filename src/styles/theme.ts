import { createTheme } from '@mui/material';

import { MAIN_BODY_FONT, MAIN_TITLE_FONT } from './variables';

import * as colors from './colors';

const interFontFamily = { fontFamily: MAIN_BODY_FONT };

const stabilFontFamily = { fontFamily: MAIN_TITLE_FONT };

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.BRAND_COLOR,
      dark: colors.ACCENT,
      light: colors.LIGHT_ACCENT,
      contrastText: colors.LIGHT_GRAY,
    },
    secondary: {
      main: colors.NAV_BG_COLOR,
      contrastText: colors.SUB_TITLE_COLOR,
    },
    background: {
      default: colors.LAYOUT_BG_COLOR,
      paper: colors.NAV_BG_COLOR,
    },
    success: {
      main: colors.SUCCESS,
      dark: colors.SUCCESS_ACCENT,
    },
    error: {
      main: colors.ERROR,
      dark: colors.ERROR_ACCENT,
    },
    warning: {
      main: colors.WARNING,
      dark: colors.WARNING_ACCENT,
    },
    info: {
      main: colors.INFO,
      light: colors.INFO_ACCENT,
    },
    text: {
      primary: colors.BODY_COLOR,
      secondary: colors.TITLE_COLOR,
      disabled: colors.DISABLED_TEXT,
    },
    grey: {
      500: colors.BG_AVATAR,
    },
    divider: colors.DIVIDER,
  },
  typography: {
    fontFamily: ['Inter', 'StabilGrotesk', 'sans-serif'].join(','),
    h1: stabilFontFamily,
    h2: {
      ...stabilFontFamily,
      color: colors.TITLE_COLOR,
      fontSize: '36px',
      fontWeight: 'bold',
    },
    h3: stabilFontFamily,
    h4: stabilFontFamily,
    h5: stabilFontFamily,
    h6: stabilFontFamily,
    body1: interFontFamily,
    body2: {
      ...interFontFamily,
      fontSize: '14px',
      color: colors.SUB_TITLE_COLOR,
    },
    subtitle1: {
      ...interFontFamily,
      color: colors.SUB_TITLE_COLOR,
      fontSize: '14px',
      fontWeight: 'normal',
    },
    subtitle2: interFontFamily,
    button: interFontFamily,
    caption: {
      ...interFontFamily,
      fontSize: '16px',
      color: colors.SUB_TITLE_COLOR,
    },
    overline: interFontFamily,
  },
});

export { lightTheme };
