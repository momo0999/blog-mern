import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

import Navbar from './components/navbar/Navbar';
import HomeScreen from './components/screens/HomeScreen';
import PostScreen from './components/screens/PostScreen';
import PostCategoryScreen from './components/screens/PostCategoryScreen';
import PhotographyScreen from './components/screens/PhotographyScreen';
import ImageCategoryScreen from './components/screens/ImageCategoryScreen';
import CreatePostScreen from './components/screens/CreatePostScreen';
import EditPostScreen from './components/screens/EditPostScreen';
import CreateImageScreen from './components/screens/CreateImageScreen';
import DeleteImageScreen from './components/screens/DeleteImageScreen';
import LoginScreen from './components/screens/LoginScreen';
import DashboardScreen from './components/screens/DashboardScreen';

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
          <Route path='/login' component={LoginScreen} />
          <Route path='/dashboard' component={DashboardScreen} />
          <Route path='/posts/create' component={CreatePostScreen} />
          <Route path='/posts/edit/:id' component={EditPostScreen} />
          <Route exact path='/photography' component={PhotographyScreen} />
          <Route path='/images/create' component={CreateImageScreen} />
          <Route path='/images/delete/:id' component={DeleteImageScreen} />
          <Route
            path='/photography/category/:category'
            component={ImageCategoryScreen}
          />
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
