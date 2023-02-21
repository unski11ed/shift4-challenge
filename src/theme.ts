import tinycolor from 'tinycolor2';

const baseTheme = {
  scaleFactor: 8,
  palette: {
    white: {
      main: '#FFFFFF',
    },
    gray: {
      midnight: '#F4F8FA',
      dark: '#1E2A32',
      light: '#F4F8FA',
    },
    purple: {
      light: '#B2A7F4',
      midnight: '#423C66',
      gray: '#595D7B',
      dark: '#241E47',
    },
    salmon: {
      main: '#FFDBCB',
    },
  },
  typography: {
    fontFamily: {
      main: '"Work Sans", "Helvetica", "Arial", sans-serif',
      alt: '"Inter", "Helvetica", "Arial", sans-serif',
      alt2: '"Rubik", "Helvetica", "Arial", sans-serif',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    defaultSize: '14px',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    up(bp: 'xs' | 'sm' | 'md' | 'lg' | 'xl') {
      return `@media (min-width: ${this.values[bp]}px)`;
    },
    down(bp: 'xs' | 'sm' | 'md' | 'lg' | 'xl') {
      return `@media (max-width: ${this.values[bp]}px)`;
    },
  },
  spacing(mul: number = 1) {
    return `${this.scaleFactor * mul}px`;
  },
};

const defaultTheme = {
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    background: {
      default: baseTheme.palette.gray.light,
      paper: baseTheme.palette.white.main,
    },
    text: {
      default: baseTheme.palette.gray.dark,
      alt: baseTheme.palette.gray.midnight,
    },
  },
  typography: {
    ...baseTheme.typography,
    h1: {
      fontSize: '32px',
      fontWeight: baseTheme.typography.fontWeight.semiBold,
      lineHeight: '1.2em',
      fontFamily: baseTheme.typography.fontFamily.main,
    },
    subtitle: {
      fontSize: '16px',
      fontWeight: baseTheme.typography.fontWeight.regular,
      fontFamily: baseTheme.typography.fontFamily.alt,
      lineHeight: '1.25em',
    },
    body: {
      fontSize: baseTheme.typography.defaultSize,
      fontWeight: baseTheme.typography.fontWeight.regular,
      fontFamily: baseTheme.typography.fontFamily.main,
      color: baseTheme.palette.gray.dark,
      lineHeight: '1.3em',
    },
    small: {
      fontSize: '12px',
      fontWeight: baseTheme.typography.fontWeight.regular,
      lineHeight: '1.4em',
      fontFamily: baseTheme.typography.fontFamily.main,
    },
  },
  components: {
    navbar: {
      background: baseTheme.palette.white.main,
      padding: `${baseTheme.spacing(3)} ${baseTheme.spacing(5)}`,
    },
    content: {
      padding: baseTheme.spacing(3),
    },
    paper: {
      background: baseTheme.palette.white.main,
    },
    alert: {
      padding: `${baseTheme.spacing(3)} ${baseTheme.spacing(2)}`,
      radius: '5px',
      default: {
        backgroundColor: baseTheme.palette.gray.light,
        color: baseTheme.palette.gray.dark,
      },
    },
    button: {
      styles: {
        primary: {
          filled: {
            color: baseTheme.palette.white.main,
            default: {
              backgroundColor: baseTheme.palette.purple.midnight,
              borderColor: baseTheme.palette.purple.midnight,
            },
            hover: {
              backgroundColor: baseTheme.palette.purple.gray,
              borderColor: baseTheme.palette.purple.gray,
            },
            pressed: {
              backgroundColor: baseTheme.palette.purple.dark,
              borderColor: baseTheme.palette.purple.dark,
            },
          },
          outline: {
            color: baseTheme.palette.purple.gray,
            default: {
              backgroundColor: 'none',
              borderColor: baseTheme.palette.purple.midnight,
            },
            hover: {
              backgroundColor: tinycolor(baseTheme.palette.purple.light)
                .setAlpha(0.1)
                .toRgbString(),
              borderColor: baseTheme.palette.purple.midnight,
            },
            pressed: {
              backgroundColor: tinycolor(baseTheme.palette.purple.light)
                .setAlpha(0.25)
                .toRgbString(),
              borderColor: baseTheme.palette.purple.midnight,
            },
          },
        },
      },
      padding: `${baseTheme.spacing(2)} ${baseTheme.spacing(4)}`,
      fontSize: '16px',
      fontWeight: baseTheme.typography.fontWeight.semiBold,
      radius: '5px',
    },
  },
  shadows: {
    4: `0px ${baseTheme.spacing(2)} ${baseTheme.spacing(4)} ${tinycolor(
      baseTheme.palette.gray.dark
    )
      .setAlpha(0.08)
      .toRgbString()};`,
  },
};

export type AppTheme = typeof defaultTheme;

export default defaultTheme;
