import styled from 'styled-components';

export const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 380px;
  height: 400px;
  margin: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
  max-width: 380px;
  height: 215px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const PostContent = styled.div`
  display: flex:
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-height: 385px
  max-width: 380px
  padding: 15px 0;
 
`;

export const Paragraph = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin: 20px 0;
`;

export const Title = styled.h2`
  font-weight: 200;
  letter-spaceing: 1px;
  line-height: 1.3;
  margin: 10px 0;
`;
