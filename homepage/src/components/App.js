import React from 'react';
import './App.css';
import Album from './Album';
import Appbar from './Appbar'
import Footer from './Footer'
import Hero from './Hero'
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Appbar />
      <Hero />
      <Album />
      <Footer />
    </div>
  );
}

export default App;



