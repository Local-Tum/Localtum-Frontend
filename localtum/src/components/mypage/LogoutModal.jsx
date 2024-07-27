import React from "react";
import styled from "styled-components";

const LogoutModal = ({ onConfirm, onCancel }) => (
  <Overlay>
    <ModalContent>
      <Text>로그아웃 하시겠습니까?</Text>
      <ButtonContainer>
        <CancelButton onClick={onCancel}>취소</CancelButton>
        <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
      </ButtonContainer>
    </ModalContent>
  </Overlay>
);

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 480px;
  text-align: center;
`;

const Text = styled.div`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CancelButton = styled.button`
  background-color: #ccc;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  background-color: #467048;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

export default LogoutModal;
