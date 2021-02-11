import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.darkGrey};
  background-color: ${({ theme }) => theme.lightGrey};
  padding: 5px 40px;
  border-radius: 2px;
  font-weight: 200;
  margin: 15px;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PostDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  margin: 50px 150px;
  @media (max-width: ${({ theme }) => theme.mobileSecondeShowCase}) {
    margin: 50px 75px;
  }
  @media (max-width: ${({ theme }) => theme.mobileThirdShowCase}) {
    margin: 50px 25px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-content: space-around;
  overflow: hidden;
  max-width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const Title = styled.h1`
  font-weight: 200;
  letter-spaceing: 1px;
  line-height: 1.3;
  margin: 10px 0;
`;

export const Text = styled.p`
  letter-spacing: 1px;
  line-height: 1.5;
  margin: 20px 0;
`;

export const StyledHomeScreen = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 150px;
  @media (max-width: ${({ theme }) => theme.mobileSecondeShowCase}) {
    margin: 0 50px;
  }
  @media (max-width: ${({ theme }) => theme.mobileThirdShowCase}) {
    margin: 0 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
