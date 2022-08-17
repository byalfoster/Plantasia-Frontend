import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
    text:{
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.54)',
    }
  },
});

export default theme;