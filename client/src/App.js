import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Navbar from './components/navbar/Navbar';
import HomeScreen from './components/screens/HomeScreen';
import PostScreen from './components/screens/PostScreen';
import PostCategoryScreen from './components/screens/PostCategoryScreen';

const App = () => {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles openHamburgerMenu={openHamburgerMenu} />
        <div>
          <Navbar
            openHamburgerMenu={openHamburgerMenu}
            setOpenHamburgerMenu={setOpenHamburgerMenu}
          />
          <Route exact path='/' component={HomeScreen} />
          <Route path='/post/:id' component={PostScreen} />
          <Route
            path='/posts/category/:category'
            component={PostCategoryScreen}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
