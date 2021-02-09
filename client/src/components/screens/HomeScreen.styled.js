import styled from 'styled-components';

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

export const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
