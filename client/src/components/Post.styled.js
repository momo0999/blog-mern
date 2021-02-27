import styled from 'styled-components';

export const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 330px;
  height: 400px;
  margin: 10px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-height: auto;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const PostContent = styled.div`
  display: flex:
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-height: 300px
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
  text-align: left;
`;
