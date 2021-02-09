import styled from 'styled-components';

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
