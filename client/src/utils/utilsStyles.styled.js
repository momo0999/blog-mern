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

export const PrimaryLink = styled(Link)`
  text-decoration: none;
  padding: 8px 30px;
  margin: 0 0 50px 50px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.primaryDark};
  color: #fff;
  &:hover {
    opacity: 0.8;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
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
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const ImagePhotography = styled.img`
  cursor: pointer;
  object-fit: cover;
  width: 400px;
  height: 400px;
  margin: 20px;
  @media (max-width: ${({ theme }) => theme.mobileThirdShowCase}) {
    margin: 10px;
    width: 90%;
  }
`;

export const ImagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  align-items: center;
`;

export const ModelDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModelImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 80%;
  margin: 70px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  border: 3px solid white;
  opacity: 1;
  @media (max-width: ${({ theme }) => theme.mobileThirdShowCase}) {
    max-width: 90%;
  }
`;

export const PageTitleWrapper = styled.div`
  display: flex;
  flex-direction: columns;
  align-items: center;
  justify-content center;
  text-align: center;
`;

export const PageTitle = styled.h1`
  font-weight: 200;
  font-size: 40px;
  padding: 30px;
  letter-spacing: 3px;
  text-align: center;
  border-bottom: 2px solid #f4f4f4;
  margin-bottom: 40px;
`;

export const BorderDiv = styled.div`
  height: 2px;
  width: 30px;
  background: #f4f4f4;
`;
