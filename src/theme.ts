const baseTheme = {
  scaleFactor: 8,
  palette: {
    white: {
      main: "#FFFFFF"
    },
    blue: {
      main: "#005B96",
      dark: "#011F4B",
      light: "#F1FAFE"
    },
    green: {
      main: "#1BC5BD"
    },
    yellow: {
      main: "#F6CA65",
      dark: "#FFC107"
    },
    gray: {
      light: "#F3F6F9",
      main: "#7E8299"
    },
    red: {
      main: "#F24E1E"
    },
    purple: {
      main: "#A259FF"
    }
  },
  typography: {
    fontSize: "16px",
    fontFamily: '"Robot", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    up(bp: "xs" | "sm" | "md" | "lg" | "xl") {
      return `@media (min-width: ${this.values[bp]}px)`;
    },
    down(bp: "xs" | "sm" | "md" | "lg" | "xl") {
      return `@media (max-width: ${this.values[bp]}px)`;
    }
  },
  spacing(mul: number = 1) {
    return `${this.scaleFactor * mul}px`;
  }
};

const defaultTheme = { ...baseTheme };

export default defaultTheme;
