import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

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
  border-radius: 2px;
  font-size: 15px;
  margin: 10px;
  background-color: ${({ theme }) => theme.lightGrey};
  color: ${({ theme }) => theme.primaryDark};
  &:hover {
    opacity: 0.8;
  }
`;

export const PrimaryButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 8px 30px;
  border-radius: 2px;
  font-size: 15px;
  margin: 10px;
  background-color: ${({ theme }) => theme.lightGrey};
  color: ${({ theme }) => theme.primaryDark};
  &:hover {
    opacity: 0.8;
  }
`;

export const DangerButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.primaryDanger};
  color: ${({ theme }) => theme.primaryLight};
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const PostDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.mobileSecondeShowCase}) {
  }
  @media (max-width: ${({ theme }) => theme.mobileThirdShowCase}) {
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
  max-width: 70%;
  margin: 20px;
  @media (max-width: ${({ theme }) => theme.mobileThirdShowCase}) {
    max-width: 100%;
    margin: 20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 60%;
  @media (max-width: ${({ theme }) => theme.mobileThirdShowCase}) {
    max-width: 100%;
    margin: 20px;
  }
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
  flex-direction: column;
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

// Form

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
`;
export const WrapperLabelInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
`;

export const Label = styled.label`
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.labelFontColor};
  margin-bottom: 10px;
  &:after {
    content: '*';
  }
`;

export const Input = styled.input`
  background-color: #fff;
  border-radius: 4px;
  color: #363636;
  font-size: 15px;
  letter-spacing: 1px;
  box-shadow: none;
  max-width: 100%;
  width: 100%;
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 35px;
  padding: 25px 10px;
  &::placeholder {
    color: ${({ theme }) => theme.labelFontColor};
    font-size: 15px;
    font-weight: 200;
    opacity: 0.8;
  }
`;

export const Textarea = styled.textarea`
  background-color: #fff;
  color: #363636;
  border-radius: 4px;
  box-shadow: none;
  max-width: 100%;
  width: 100%;
  height: 100px;
  padding: 10px 10px;
  border: 1px solid #e7e7e7;
  &::placeholder {
    color: ${({ theme }) => theme.labelFontColor};
    font-size: 15px;
    font-weight: 200;
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryLight};
  background-color: ${({ theme }) => theme.primaryDark};
  padding: 8px 30px;
  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.8;
  }
`;

// Modal Container

export const ModalWindow = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  color: black;
  padding: 20px;
  border-radius: 3px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #fff;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.h1`
  slef-align: flex-start;
`;

//Dashboard

export const IconButtonLarge = styled(IconButton)`
  width: 60px;
  height: 60px;
  font-size: 40px;
  &:hover {
    color: ${({ theme }) => theme.primaryBlue};
  }
`;

export const ButtonIcon = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin: 2px;
  &:hover {
    color: ${({ theme }) => theme.primaryBlue};
  }
`;

export const Wrapper = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 70%;
  margin-bottom: 30px;
  margin-top: 10px;
`;
export const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;
export const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;
