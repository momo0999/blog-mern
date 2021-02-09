import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8vh;
  width: 100%;
  background-color: white;
  padding-bottom: 50px;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const StyledList = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.mobileFirstShowCase}) {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    right: 0;
    top: 0;
    padding: 0;
    margin: 0;
    height: 100vh;
    width: ${({ openHamburgerMenu }) => (!openHamburgerMenu ? '0' : '100%')};
    font-size: 18px;
    background-color: white;
    transform: ${({ openHamburgerMenu }) =>
      !openHamburgerMenu ? 'translateX(-100%)' : 'translateX(0)'};
    transition: transform 0.4s ease-in, width 0.2s ease-in;
  }
`;
export const StyledListIcons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  list-style: none;
`;

export const Logo = styled.h1`
  font-weight: 200;
  font-size: 40px;
  padding: 18px;
  letter-spacing: 3px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 200;
  padding: 18px;
  color: ${({ theme }) => theme.primaryFontColor};
  &:hover {
    color: ${({ theme }) => theme.primaryBlue};
    transition: color 0.2s ease-in;
  }
`;

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  color: ${({ theme }) => theme.primaryFontColor};
  vertical-align: middle;
  &:hover {
    color: ${({ theme }) => theme.primaryBlue};
    transition: color 0.2s ease-in;
  }
`;

export const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  color: ${({ theme }) => theme.primaryFontColor};
  vertical-align: middle;

  &:hover {
    color: ${({ theme }) => theme.primaryBlue};
    transition: color 0.2s ease-in;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  color: ${({ theme }) => theme.primaryFontColor};
  vertical-align: middle;

  &:hover {
    color: ${({ theme }) => theme.primaryBlue};
    transition: color 0.2s ease-in;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
`;

export const StyledBurgerButton = styled.button`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobileFirstShowCase}) {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    z-index: 1;
    margin: 0;
    padding: 10px;
    border: none;
    background-color: transparent;
  }
`;
