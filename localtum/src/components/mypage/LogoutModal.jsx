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
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Text = styled.div`
  font-size: 1rem;
  margin-bottom: 20px;
  color: #d9534f;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; /* 버튼 간격 조정 */
`;

const CancelButton = styled.button`
  background-color: white;
  color: #595b59;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  width: 100px;
  font-size: 0.875rem;
  font-weight: bold;
`;

const ConfirmButton = styled.button`
  background-color: #595b59;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  width: 100px; 
  font-size: 0.875rem;
  font-weight: bold;
`;

export default LogoutModal;
