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
      midnight: '#423C66',
      gray: '#595D7B',
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
    defaultSize: '16px',
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
};

export type AppTheme = typeof defaultTheme;

export default defaultTheme;
