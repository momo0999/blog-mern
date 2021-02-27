import React from 'react';
import ReactDOM from 'react-dom';
import {
  ModalWindow,
  ModalContainer,
  ModalButtonWrapper,
  Text,
  ModalTitle,
} from '../utils/utilsStyles.styled';
const Modal = ({ title, content, actions }) => {
  return ReactDOM.createPortal(
    <ModalWindow>
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        <Text>{content}</Text>
        <ModalButtonWrapper>{actions}</ModalButtonWrapper>
      </ModalContainer>
    </ModalWindow>,
    document.querySelector('#modal')
  );
};

export default Modal;
