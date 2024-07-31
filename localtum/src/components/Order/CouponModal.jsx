import React from "react";
import styled from "styled-components";

const CouponModal = ({ onConfirm, onCancel }) => (
  <ModalOverlay>
    <ModalContent>
      <ModalTitle>쿠폰 적용</ModalTitle>
      <CouponItem>
        <CouponRadioButton type="radio" name="coupon" />
        <CouponDescription>
          '멋쟁이사자' 음료 2,000원 할인 쿠폰
          <br />
          <CouponExpiry>유효기간 : ~ 2024년 8월 7일까지</CouponExpiry>
        </CouponDescription>
      </CouponItem>
      <ButtonGroup>
        <CancelButton onClick={onCancel}>취소</CancelButton>
        <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
      </ButtonGroup>
    </ModalContent>
  </ModalOverlay>
);

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  text-align: center;
`;

const ModalTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const CouponItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const CouponRadioButton = styled.input`
  margin-right: 10px;
`;

const CouponDescription = styled.div`
  text-align: left;
`;

const CouponExpiry = styled.p`
  font-size: 0.75rem;
  color: #888;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 1rem;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  background: #467048;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

export default CouponModal;
