import React from "react";
import styled from "styled-components";

const AccountDeleteModal = ({ onConfirm, onCancel }) => (
  <Overlay>
    <ModalContent>
      <Text>회원탈퇴 하시겠습니까?</Text>
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
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 30px;
  width: 100%;
  max-width: 360px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Text = styled.div`
  font-size: 1.3rem;
  margin-bottom: 30px;
  color: #ca7070;
  font-weight: 600;
  letter-spacing: -0.96px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const CancelButton = styled.button`
  background-color: white;
  color: #595b59;
  border: 3px solid #b5b6b5;
  padding: 8px 20px;
  border-radius: 30px;
  cursor: pointer;
  width: 100px;
  font-size: 0.875rem;
  font-weight: 600;
`;

const ConfirmButton = styled.button`
  background-color: #808180;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 30px;
  cursor: pointer;
  width: 100px;
  font-size: 0.875rem;
  font-weight: 600;
`;

export default AccountDeleteModal;
