import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/cafedetailpage/Header";
import CouponModal from "../../components/Order/CouponModal";

const OrderSummaryPage = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isCouponModalOpen, setCouponModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleExpand = (itemName) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  const handleOrderButtonClick = () => {
    navigate("/orderconfirmation");
  };

  const handleCouponClick = () => {
    setCouponModalOpen(true);
  };

  const handleCouponConfirm = () => {
    setCouponModalOpen(false);
    alert("쿠폰이 적용되었습니다.");
  };

  const handleCouponCancel = () => {
    setCouponModalOpen(false);
  };

  return (
    <>
      <Container>
        <Header />
        <Main>
          <CafeInfo>
            <CafeName>멋쟁이 사자처럼</CafeName>
          </CafeInfo>
          <Divider />
          <OrderItem>
            <ItemInfo>
              <ItemName>주문 상품</ItemName>
              <ItemDetails onClick={() => toggleExpand("아메리카노")}>
                아메리카노{" "}
                <ExpandButton>
                  {expandedItem === "아메리카노" ? "▲" : "▼"}
                </ExpandButton>
              </ItemDetails>
            </ItemInfo>
            {expandedItem === "아메리카노" && (
              <ExpandedDetails>
                <Detail>Grande size 473ml</Detail>
                <Detail>Ice 차갑게</Detail>
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
                <CouponButton>▼</CouponButton>
              </CouponInput>
            </Section>
            <Divider />
            <Section>
              <SectionTitle>결제 수단</SectionTitle>
              <PaymentOption>
                <RadioButton type="radio" name="payment" value="신용카드" />{" "}
                신용카드
              </PaymentOption>
              <PaymentOption>
                <RadioButton
                  type="radio"
                  name="payment"
                  value="간편카드 결제"
                />{" "}
                간편카드 결제
              </PaymentOption>
              <PaymentOption>
                <RadioButton type="radio" name="payment" value="네이버 페이" />{" "}
                네이버 페이
              </PaymentOption>
              <PaymentOption>
                <RadioButton type="radio" name="payment" value="카카오 페이" />{" "}
                카카오 페이
              </PaymentOption>
            </Section>
          </AdditionalSections>
          <Divider />
          <Summary>
            <SummaryItem>
              <SummaryLabel>상품 금액</SummaryLabel>
              <SummaryValue>3,000원</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>할인 금액</SummaryLabel>
              <SummaryValue>-500원</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>결제 금액</SummaryLabel>
              <SummaryValue>2,500원</SummaryValue>
            </SummaryItem>
          </Summary>
          <OrderButton onClick={handleOrderButtonClick}>결제하기</OrderButton>
        </Main>
        {isCouponModalOpen && (
          <CouponModal
            onConfirm={handleCouponConfirm}
            onCancel={handleCouponCancel}
          />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;

const CafeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem; /* Adjusted margin */
`;

const CafeName = styled.h2`
  font-size: 1.5rem;
  color: #444;
`;

const Divider = styled.div`
  background-color: #e7e7e7;
  height: 1px;
  margin: 1rem 0;
`;

const OrderItem = styled.div`
  margin-bottom: 0.5rem; /* Adjusted margin */
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
  font-weight: bold;
  color: #444;
  cursor: pointer;
  display: flex; /* Added to align the expand button */
  justify-content: space-between; /* Adjusted to ensure text alignment */
`;

const ExpandButton = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
`;

const ExpandedDetails = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.3rem;
  margin-left: 1rem;
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
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 98%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px; /* Increased border-radius */
`;

const CouponInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: #444;
  cursor: pointer;
`;

const CouponButton = styled.span`
  font-size: 1.5rem;
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #444;
  margin-bottom: 1rem; /* Increased margin between options */
`;

const RadioButton = styled.input`
  margin-right: 0.5rem;
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
  margin-bottom: 0.5rem;
`;

const SummaryLabel = styled.div`
  font-size: 1rem;
  color: #444;
`;

const SummaryValue = styled.div`
  font-size: 1rem;
  color: #444;
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #467048;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export default OrderSummaryPage;
