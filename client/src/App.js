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
import DeletePostScreen from './components/screens/DeletePostScreen';
import EditPostScreen from './components/screens/EditPostScreen';

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
          <Route path='/posts/create' component={CreatePostScreen} />
          <Route path='/posts/edit/:id' component={EditPostScreen} />
          <Route exact path='/photography' component={PhotographyScreen} />
          <Route
            path='/photography/category/:category'
            component={ImageCategoryScreen}
          />
          <Route exact path='/post/:id' component={PostScreen} />
          <Route exact path='/posts/delete/:id' component={DeletePostScreen} />
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
