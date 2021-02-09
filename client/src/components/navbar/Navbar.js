import React, { useEffect, useRef } from 'react';
import Hamburger from 'hamburger-react';
import {
  StyledNavbar,
  List,
  StyledLink,
  StyledShoppingCartIcon,
  StyledAccountCircleIcon,
  Logo,
  StyledSearchIcon,
  BurgerButton,
  RowContainer,
  LinksContainer,
} from './Navbar.styled';

const Navbar = ({ openHamburgerMenu, setOpenHamburgerMenu }) => {
  const ref = useRef();
  const menuRef = useRef();
  const linkRef = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if (
        (ref.current && ref.current.contains(e.target)) ||
        e.target === menuRef.current
      ) {
        return;
      }
      setOpenHamburgerMenu(false);
    };
    document.body.addEventListener('click', onBodyClick);
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, [setOpenHamburgerMenu]);
  return (
    <StyledNavbar>
      <Logo>Logo</Logo>
      <BurgerButton ref={ref}>
        <Hamburger
          toggled={openHamburgerMenu}
          toggle={() => setOpenHamburgerMenu((prevValue) => !prevValue)}
          size={30}
        />
      </BurgerButton>
      <RowContainer>
        <List ref={menuRef} openHamburgerMenu={openHamburgerMenu}>
          <li>
            <StyledLink ref={linkRef} to='/'>
              Blog
            </StyledLink>
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
          <LinksContainer>
            <li>
              <StyledLink to='/login'>
                <StyledAccountCircleIcon />
              </StyledLink>
            </li>
            <li>
              <StyledLink to='/shopping/checkout'>
                <StyledShoppingCartIcon />
              </StyledLink>
            </li>
            <li>
              <StyledLink to='/Search'>
                <StyledSearchIcon />
              </StyledLink>
            </li>
          </LinksContainer>
        </List>
      </RowContainer>
    </StyledNavbar>
  );
};

export default Navbar;
