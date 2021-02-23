import React from 'react';
import ReactDOM from 'react-dom';
import { ModalWindow, ModalContainer } from '../utils/utilsStyles.styled';
const Modal = ({ title, content, actions }) => {
  return ReactDOM.createPortal(
    <ModalWindow>
      <ModalContainer>
        <h1>{title}</h1>
        <p>{content}</p>
        {actions}
      </ModalContainer>
    </ModalWindow>,
    document.querySelector('#modal')
  );
};

export default Modal;
