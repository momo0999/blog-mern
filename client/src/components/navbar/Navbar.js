import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import {
  StyledNavbar,
  StyledList,
  StyledLink,
  StyledShoppingCartIcon,
  StyledAccountCircleIcon,
  Logo,
  StyledSearchIcon,
  StyledBurgerButton,
  RowContainer,
} from './Navbar.styled';

const Navbar = () => {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  return (
    <StyledNavbar>
      <Logo>Logo</Logo>
      <StyledBurgerButton>
        <Hamburger toggled={openHamburgerMenu} toggle={setOpenHamburgerMenu} />
      </StyledBurgerButton>
      <RowContainer>
        <StyledList
          openHamburgerMenu={openHamburgerMenu}
          className='navbar__links'
        >
          <li>
            <StyledLink to='/'>Blog</StyledLink>
          </li>
          <li>
            <StyledLink to='/photography'>Photogrphy</StyledLink>
          </li>
          <li>
            <StyledLink to='/about'>About</StyledLink>
          </li>
          <li>
            <StyledLink to='/shopping/checkout'>Shop</StyledLink>
          </li>
          <li>
            <StyledLink to='/login'>
              <StyledAccountCircleIcon />
            </StyledLink>
          </li>
        </StyledList>
        <StyledList>
          <li>
            <StyledLink to='/Search'>
              <StyledSearchIcon />
            </StyledLink>
          </li>

          <li>
            <StyledLink to='/shopping/checkout'>
              <StyledShoppingCartIcon />
            </StyledLink>
          </li>
        </StyledList>
      </RowContainer>
    </StyledNavbar>
  );
};

export default Navbar;
