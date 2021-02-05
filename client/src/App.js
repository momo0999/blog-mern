import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>
          <Navbar />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
