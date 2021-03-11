import React from 'react';
import ReactDOM from 'react-dom';
import {
  ModalWindow,
  ModalContainer,
  ModalButtonWrapper,
  Text,
  ModalTitle,
} from '../utils/utilsStyles.styled';
const Modal = ({ title, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <ModalWindow onClick={onDismiss}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalTitle>{title}</ModalTitle>
        <Text>{content}</Text>
        <ModalButtonWrapper>{actions}</ModalButtonWrapper>
      </ModalContainer>
    </ModalWindow>,
    document.querySelector('#modal')
  );
};

export default Modal;
