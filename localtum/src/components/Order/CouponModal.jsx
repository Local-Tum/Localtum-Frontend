import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCouponList } from '../../apis/api/coupon';

const CouponModal = ({ onConfirm, onCancel, applyCoupon }) => {
  const [coupons, setCoupons] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  useEffect(() => {
    const fetchCoupons = async () => {
      const result = await getCouponList();
      if (result.status === 200) {
        const availableCoupons = result.data.filter(coupon => coupon.couponStatus !== "USED");
        setCoupons(availableCoupons);
      } else {
        console.error("Failed to fetch coupons", result);
      }
    };

    fetchCoupons();
  }, []);

  const handleCouponSelect = (coupon) => {
    setSelectedCoupon(coupon);
  };

  const handleConfirm = () => {
    if (selectedCoupon) {
      applyCoupon(selectedCoupon);
      onConfirm();
    } else {
      alert("쿠폰을 선택해주세요.");
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>쿠폰 적용</ModalTitle>
        <CouponList>
          {coupons.length > 0 ? (
            coupons.map((coupon, index) => (
              <CouponItem key={index} onClick={() => handleCouponSelect(coupon)}>
                <CustomCheckbox>
                  <CouponRadioButton
                    type="radio"
                    name="coupon"
                    checked={selectedCoupon === coupon}
                    readOnly
                  />
                  <Checkmark />
                </CustomCheckbox>
                <CouponDescription>
                  '{coupon.cafeName}' 음료 {coupon.couponDescription}원 할인 쿠폰
                  <CouponExpiry>유효기간: {formatDate(coupon.expirationDate)}</CouponExpiry>
                </CouponDescription>
              </CouponItem>
            ))
          ) : (
            <NoCoupons>사용 가능한 쿠폰이 없습니다.</NoCoupons>
          )}
        </CouponList>
        <ButtonGroup>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <ConfirmButton onClick={handleConfirm} active={selectedCoupon}>
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
  height: 60%;
  display: flex;
  flex-direction: column;
  box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.1),
    3px 3px 10px 0px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* Add scroll for long content */
`;

const ModalTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const CouponList = styled.div`
  flex: 1;
  overflow-y: auto; /* Ensure CouponList can scroll if content is long */
`;

const CouponItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
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

const NoCoupons = styled.div`
  font-size: 1rem;
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
  background: #fff;
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
