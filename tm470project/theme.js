import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#FF90BC',
    },
    secondary: {
      main: '#90ffd3',
    },
    background: {
      default: '#ff90f4',
    },
    error: {
      main: '#ffd390',
    },
  },
});

export default theme;