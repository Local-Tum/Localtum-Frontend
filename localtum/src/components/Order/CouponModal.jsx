import React, { useState } from "react";
import styled from "styled-components";

const CouponModal = ({ onConfirm, onCancel }) => {
  const [selectedCoupon, setSelectedCoupon] = useState(false);

  const handleCouponSelect = () => {
    setSelectedCoupon(true);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>쿠폰 적용</ModalTitle>
        <CouponItem>
          <CustomCheckbox onClick={handleCouponSelect}>
            <CouponRadioButton
              type="radio"
              name="coupon"
              checked={selectedCoupon}
              readOnly
            />
            <Checkmark />
          </CustomCheckbox>
          <CouponDescription>
            '멋쟁이사자' 음료 2,000원 할인 쿠폰
            <CouponExpiry>유효기간 : ~ 2024년 8월 7일까지</CouponExpiry>
          </CouponDescription>
        </CouponItem>
        <Spacer />
        <ButtonGroup>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <ConfirmButton
            onClick={onConfirm}
            disabled={!selectedCoupon}
            active={selectedCoupon}
          >
            확인
          </ConfirmButton>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 36px 36px 0 0;
  width: 100%;
  max-width: 400px;
  text-align: center;
  height: 60%; /* 기본 높이를 60%로 설정 */
  display: flex;
  flex-direction: column;
  box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.10), 3px 3px 10px 0px rgba(0, 0, 0, 0.10);
`;

const ModalTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const CouponItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const CouponRadioButton = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + span {
    background-color: #a9b782;
  }
`;

const Checkmark = styled.span`
  height: 20px;
  width: 20px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #e7e7e7;
  margin-right: 0.8rem;
  position: relative;
`;

const CouponDescription = styled.div`
  text-align: left;
  color: #595b59;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;

const CouponExpiry = styled.div`
  margin: 0.3rem 0;
  font-size: 0.75rem;
  color: #808180;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const CancelButton = styled.button`
  border-radius: 30px;
  border: 2px solid #808180;
  width: 8rem;
  height: 3rem;
  background: #FFF;
  flex-shrink: 0;
  background: none;
  color: #595b59;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  background: ${({ active }) => (active ? "#467048" : "#808180")};
  color: #fff;
  border: none;
  width: 8rem;
  height: 3rem;
  border-radius: 30px;
  font-size: 1rem;
  cursor: ${({ active }) => (active ? "pointer" : "not-allowed")};
`;

export default CouponModal;
