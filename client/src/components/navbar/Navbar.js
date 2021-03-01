import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
import Hamburger from 'hamburger-react';
import {
  StyledNavbar,
  List,
  StyledLink,
  LoginButton,
  StyledAccountCircleIcon,
  Logo,
  LogoLink,
  StyledSearchIcon,
  BurgerButton,
  RowContainer,
  LinksContainer,
} from './Navbar.styled';

const Navbar = ({ openHamburgerMenu, setOpenHamburgerMenu }) => {
  const ref = useRef();
  const menuRef = useRef();
  const linkRef = useRef();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
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
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <StyledNavbar>
      <LogoLink to='/'>
        <Logo>Logo</Logo>
      </LogoLink>
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
            {userInfo ? (
              <LoginButton onClick={handleLogout}>Logout</LoginButton>
            ) : (
              <StyledLink to='/login'>login</StyledLink>
            )}
          </li>
          <LinksContainer>
            {userInfo && userInfo.isAdmin && (
              <li>
                <StyledLink to='/dashboard'>
                  <StyledAccountCircleIcon />
                </StyledLink>
              </li>
            )}
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
