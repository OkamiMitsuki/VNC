import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#b2e0ee',
    },
    secondary: {
      main: '#eec0b2',
    },
    error: {
      main: '#eeb2e0',
    },
    warning: {
      main: '#eeb2e0',
    },
    info: {
      main: '#b2c2ee',
    },
    success: {
      main: '#b2eede',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'LimoneB',
    ].join(','),
    button: {
      letterSpacing: '0.07em',
      lineHeight: 0.86,
      fontSize: '0.8rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'LimoneB';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url('/fonts/LIMONEB.TTF') ;
      }
    `,
    },
  },
});

export default theme;