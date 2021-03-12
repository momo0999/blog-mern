import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledPost = styled.div`
  position: relative;
  max-width: 330px;
  height: 350px;
  margin: 10px;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 200px;
  border-radius: 3px;
  object-fit: cover;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin: 20px 0;
`;

export const LinkTitle = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: black;
  font-weight: 200;
  letter-spaceing: 1px;
  line-height: 1.3;
  margin: 10px 0;
  text-align: left;
  align-self: flex-start;
  text-align: left;
  &:hover {
    color: ${({ theme }) => theme.primaryBlue};
  }
`;

export const Title = styled.h2``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryLink = styled(Link)`
  position: absolute;
  bottom: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.darkGrey};
  background-color: ${({ theme }) => theme.lightGrey};
  padding: 5px 40px;
  border-radius: 2px;
  font-weight: 200;
  margin: 15px;
  align-self: flex-start;
  align-content: flex-end;
`;
