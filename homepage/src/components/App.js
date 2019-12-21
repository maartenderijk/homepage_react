import React from 'react';
import './App.css';
import Album from './Album';
import Appbar from './Appbar'
import Footer from './Footer'
import Hero from './Hero'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#66bb6a',
    },
    secondary: amber,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <CssBaseline />
      <Appbar />
      <Hero />
      <Album />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;



