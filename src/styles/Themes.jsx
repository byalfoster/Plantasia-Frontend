import { createTheme } from '@mui/material/styles';

const themes = createTheme({
  palette: {
    primary: {
      light: '#337066',
      main: '#004d40',
      dark: '#00352c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b7deb8',
      main: '#a5d6a7',
      dark: '#739574',
      contrastText: '#000',
    },
  },
});

export default themes;