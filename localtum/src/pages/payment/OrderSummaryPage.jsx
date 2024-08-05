import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/mypageedit/Header";
import CouponModal from "../../components/Order/CouponModal";
import nameIcon from "../../assets/icons/cafeName.png";
import underIcon2 from "../../assets/icons/underIcon2.png";
import upperIcon from "../../assets/icons/upperIcon.png";
import rightIcon from "../../assets/icons/rightIcon.png";

const OrderSummaryPage = () => {
  const location = useLocation();
  const {
    item,
    size = "기본 사이즈",
    temperature = "HOT",
    prices = item.price,
    options = [],
    quantity = 1,
  } = location.state;
  const [expandedItem, setExpandedItem] = useState(null);
  const [isCouponModalOpen, setCouponModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = (itemName) =>
    setExpandedItem(expandedItem === itemName ? null : itemName);

  const handleOrderButtonClick = async () => {
    const token = localStorage.getItem("token");
    const orderData = {
      couponName: appliedCoupon ? appliedCoupon.couponName : "", // null 대신 빈 문자열
      coupon: couponDiscount,
      size,
      status: temperature,
      prices,
      options,
      quantity,
    };

    // 콘솔에 orderData 객체 출력하여 확인
    console.log("Order Data:", orderData);

    try {
      const response = await axios.post(
        `https://15.165.139.216.nip.io/localtum/cafe_details/${encodeURIComponent(
          item.cafe_name
        )}/${encodeURIComponent(item.name)}/order`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("주문이 성공적으로 완료되었습니다!");
      navigate("/orderconfirmation", {
        state: {
          order: response.data.data[0],
        },
      });

      if (appliedCoupon) {
        const storedCoupons = JSON.parse(localStorage.getItem("coupons")) || [];
        const updatedCoupons = storedCoupons.map((coupon) =>
          coupon.cafe_name === appliedCoupon.cafe_name
            ? { ...coupon, used: true }
            : coupon
        );
        localStorage.setItem("coupons", JSON.stringify(updatedCoupons));
      }
    } catch (error) {
      console.error("주문 요청 실패:", error);
      alert("주문에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleCouponClick = () => setCouponModalOpen(true);

  const applyCoupon = (coupon) => {
    if (coupon.cafe_name === item.cafe_name) {
      setCouponDiscount(Number(coupon.couponAmount));
      setAppliedCoupon(coupon);
      alert("쿠폰이 적용되었습니다.");
    } else {
      alert("이 쿠폰은 해당 카페에서 사용할 수 없습니다.");
    }
  };

  const handleCouponConfirm = () => setCouponModalOpen(false);

  const handleCouponCancel = () => setCouponModalOpen(false);

  const handlePaymentChange = (e) => setSelectedPayment(e.target.value);

  return (
    <>
      <Container>
        <Header />
        <MainContainer>
          <Main>
            <CafeInfo>
              <CafeNameIcon src={nameIcon} alt="*" />
              <CafeName>{item.cafe_name}</CafeName>
            </CafeInfo>
            <Divider />
            <OrderItem>
              <ItemInfo>
                <ItemName>주문 상품</ItemName>
                <ItemDetails onClick={() => toggleExpand(item.name)}>
                  {item.name}{" "}
                  <ExpandButton
                    src={expandedItem === item.name ? upperIcon : underIcon2}
                    alt={expandedItem === item.name ? "▲" : "▼"}
                  />
                </ItemDetails>
              </ItemInfo>
              {expandedItem === item.name && (
                <ExpandedDetails>
                  <Detail>{size}</Detail>
                  <Detail>{temperature}</Detail>
                </ExpandedDetails>
              )}
            </OrderItem>
            <Divider />
            <AdditionalSections>
              <Section>
                <SectionTitle>매장 요청 사항</SectionTitle>
                <Input placeholder="매장 요청사항이 있으면 적어주세요." />
              </Section>
              <Divider />
              <Section>
                <SectionTitle>쿠폰 적용</SectionTitle>
                <CouponInput onClick={handleCouponClick}>
                  쿠폰
                  <CouponButton src={rightIcon} />
                </CouponInput>
                {appliedCoupon && (
                  <AppliedCoupon>
                    적용된 쿠폰: '{appliedCoupon.couponName}' 음료{" "}
                    {appliedCoupon.couponAmount}원 할인 쿠폰
                  </AppliedCoupon>
                )}
              </Section>
              <Divider />
              <Section>
                <SectionTitle>결제 수단</SectionTitle>
                <PaymentOption>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="payment"
                      value="신용카드"
                      onChange={handlePaymentChange}
                    />
                    <Checkmark />
                    신용카드
                  </CustomCheckbox>
                </PaymentOption>
                <PaymentOption>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="payment"
                      value="간편카드 결제"
                      onChange={handlePaymentChange}
                    />
                    <Checkmark />
                    간편카드 결제
                  </CustomCheckbox>
                </PaymentOption>
                <PaymentOption>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="payment"
                      value="네이버 페이"
                      onChange={handlePaymentChange}
                    />
                    <Checkmark />
                    네이버 페이
                  </CustomCheckbox>
                </PaymentOption>
                <PaymentOption>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="payment"
                      value="카카오 페이"
                      onChange={handlePaymentChange}
                    />
                    <Checkmark />
                    카카오 페이
                  </CustomCheckbox>
                </PaymentOption>
              </Section>
            </AdditionalSections>
            <Divider />
            <Summary>
              <SummaryItem>
                <SummaryLabel>상품 금액</SummaryLabel>
                <SummaryValue>
                  {(prices * quantity).toLocaleString()}원
                </SummaryValue>
              </SummaryItem>
              <SummaryItem>
                <SummaryLabel>할인 금액</SummaryLabel>
                <SummaryValue>
                  -{couponDiscount.toLocaleString()}원
                </SummaryValue>
              </SummaryItem>
              <SummaryItem>
                <SummaryLabelTotal>결제 금액</SummaryLabelTotal>
                <SummaryValueTotal>
                  {(prices * quantity - couponDiscount).toLocaleString()}원
                </SummaryValueTotal>
              </SummaryItem>
            </Summary>
            <OrderButton
              onClick={handleOrderButtonClick}
              disabled={!selectedPayment}
              active={!!selectedPayment}
            >
              결제하기
            </OrderButton>
          </Main>
        </MainContainer>
        {isCouponModalOpen && (
          <CouponModal
            onConfirm={handleCouponConfirm}
            onCancel={handleCouponCancel}
            applyCoupon={applyCoupon}
          />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  overflow-y: auto;
  box-sizing: border-box;
`;

const Main = styled.main`
  width: 100%;
  max-width: 480px;
  flex: 1;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-sizing: border-box;
  padding: 0 1rem;
`;

const CafeInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CafeNameIcon = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
`;

const CafeName = styled.h2`
  font-size: 1.2rem;
  color: #282828;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Divider = styled.div`
  background-color: #e7e7e7;
  height: 1px;
  margin: 1rem 0;
`;

const OrderItem = styled.div`
  margin-bottom: 0.5rem;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
  color: #444;
`;

const ItemDetails = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #595b59;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExpandButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1.5rem;
`;

const ExpandedDetails = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.3rem;
  margin-left: auto;
  text-align: right;
`;

const Detail = styled.div`
  margin-bottom: 0.3rem;
`;

const AdditionalSections = styled.div`
  margin-bottom: 1rem;
`;

const Section = styled.div`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 650;
  letter-spacing: -1px;
  color: #444;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 90%;
  padding: 0.8rem 1rem;
  font-size: 0.8rem;
  border: 2px solid #e7e7e7;
  border-radius: 30px;
  ::placeholder {
    color: #b5b6b5;
  }
`;

const CouponInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #595b59;
  cursor: pointer;
`;

const CouponButton = styled.img`
  height: 1rem;
`;

const AppliedCoupon = styled.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #595b59;
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.64px;
  color: #595b59;
  margin-bottom: 1rem;
`;

const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const RadioButton = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + span {
    background-color: #a9b782;
  }
`;

const Checkbox = styled.input`
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
  height: 15px;
  width: 15px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #e7e7e7;
  margin-right: 8px;
  position: relative;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

const SummaryLabel = styled.div`
  font-size: 1rem;
  color: #444;
  font-weight: 600;
`;

const SummaryLabelTotal = styled.div`
  font-size: 1.1rem;
  color: #282828;
  font-weight: 700;
`;

const SummaryValue = styled.div`
  font-size: 1rem;
  color: #444;
  font-weight: 700;
`;

const SummaryValueTotal = styled.div`
  font-size: 1rem;
  color: #ca7070;
  font-weight: 700;
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ active }) => (active ? "#467048" : "#808180")};
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: ${({ active }) => (active ? "pointer" : "not-allowed")};
`;

export default OrderSummaryPage;
