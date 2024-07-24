import React from "react";
import styled from "styled-components";
import Header from "./Header";
import GlobalStyles from "../../styles/globalstyles";

const coupons = [
  {
    title: "멋쟁이사자 음료 2,000원 할인 쿠폰",
    expiry: "2024년 8월 7일까지",
    status: "다운받기",
  },
  {
    title: "달달해 음료 한 잔 무료 쿠폰",
    expiry: "2024년 9월 23일까지",
    status: "다운받기",
  },
  {
    title: "라떼는 음료 2,000원 할인 쿠폰",
    expiry: "2024년 8월 16일까지",
    status: "다운완료",
  },
];

const CouponPage = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main>
          <Title>멋쟁이 사자처럼 쿠폰</Title>
          {coupons.length === 0 ? (
            <NoCoupons>
              <NoCouponsText>쿠폰이 없어요!</NoCouponsText>
            </NoCoupons>
          ) : (
            coupons.map((coupon, index) => (
              <Coupon key={index}>
                <CouponInfo>
                  <CouponTitle>{coupon.title}</CouponTitle>
                  <CouponExpiry>유효기간: {coupon.expiry}</CouponExpiry>
                </CouponInfo>
                <CouponButton status={coupon.status}>
                  {coupon.status}
                </CouponButton>
              </Coupon>
            ))
          )}
        </Main>
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

const Title = styled.h2`
  text-align: center;
  color: #444;
  margin-bottom: 1rem;
`;

const Coupon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const CouponInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CouponTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #444;
`;

const CouponExpiry = styled.p`
  font-size: 0.875rem;
  color: #888;
`;

const CouponButton = styled.button`
  background-color: ${(props) =>
    props.status === "다운받기" ? "#467048" : "#cccccc"};
  color: white;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  cursor: ${(props) => (props.status === "다운받기" ? "pointer" : "default")};
`;

const NoCoupons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const NoCouponsText = styled.div`
  font-size: 1.5rem;
  color: #888;
  text-align: center;
`;

export default CouponPage;
