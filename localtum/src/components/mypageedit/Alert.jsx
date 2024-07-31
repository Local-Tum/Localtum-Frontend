import React from "react";
import styled from "styled-components";

const Alert = ({ message, onClose, onConfirm, showConfirmButtons }) => {
  return (
    <Overlay>
      <AlertBox>
        <Message>{message}</Message>
        {showConfirmButtons ? (
          <ButtonContainer>
            <CancelButton onClick={onClose}>취소</CancelButton>
            <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
          </ButtonContainer>
        ) : (
          <CloseButton onClick={onClose}>X</CloseButton>
        )}
      </AlertBox>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlertBox = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 300px;
  position: relative;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #444;
  text-align: center;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #444;
`;

const CancelButton = styled.button`
  width: 45%;
  padding: 0.5rem;
  background-color: #fff;
  color: #467048;
  border: 1px solid #467048;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  width: 45%;
  padding: 0.5rem;
  background-color: #467048;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

export default Alert;
