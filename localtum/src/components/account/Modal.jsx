import React from "react";
import styled from "styled-components";

const Modal = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  max-width: 80%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: #333;
`;

const CloseButton = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
`;

const ModalContent = styled.div`
  margin-top: 10px;
`;

export default Modal;
