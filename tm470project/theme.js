import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#FF90BC',
    },
    secondary: {
      main: '#81F4E1',
    },
    background: {
      default: '#ff90f4',
    },
    error: {
      main: '#ffd390',
    },
    text: {
      primary: '#ffffff',
    }
  },
});

export default theme;