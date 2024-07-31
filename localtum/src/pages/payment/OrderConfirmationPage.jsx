import React from "react";
import styled from "styled-components";
import Header from "../../components/cafedetailpage/Header";

const OrderConfirmationPage = ({ status = "accepted" }) => {
  return (
    <>
      <Container>
        <Header />
        <Main>
          <CafeName>멋쟁이 사자처럼</CafeName>
          <OrderInfo>
            <OrderTime>2024.07.17 15:00</OrderTime>
            <OrderCompleteMessage>주문이 완료되었습니다.</OrderCompleteMessage>
            <OrderNumber>주문번호 282</OrderNumber>
          </OrderInfo>
          <Divider />
          <OrderDetails>
            <Detail>
              <Label>주문 상품</Label>
              <Value>아메리카노</Value>
            </Detail>
            <Detail>
              <Label>결제 금액</Label>
              <Value className="amount">2,500원</Value>
            </Detail>
          </OrderDetails>
          <Divider />
          <OrderProgress>
            <ProgressBar>
              <Progress active={status} />
              <ProgressText>
                <span>결제 완료</span>
                <span>주문 접수</span>
                <span>제조 완료</span>
              </ProgressText>
            </ProgressBar>
          </OrderProgress>
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

const CafeName = styled.h1`
  font-size: 1.25rem;
  color: #467048;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const OrderInfo = styled.div`
  margin: 1rem 0;
`;

const OrderTime = styled.p`
  font-size: 0.875rem;
  color: #888;
  text-align: left;
`;

const OrderCompleteMessage = styled.h2`
  font-size: 1rem;
  color: #444;
  text-align: left;
`;

const OrderNumber = styled.p`
  font-size: 0.875rem;
  color: #467048;
  background-color: #f6f6f6;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  text-align: left;
`;

const Divider = styled.div`
  border-bottom: 1px solid #e7e7e7;
  margin: 1rem 0;
`;

const OrderDetails = styled.div`
  margin: 1rem 0;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 0.875rem;
`;

const Label = styled.div`
  color: #444;
`;

const Value = styled.div`
  color: #444;
  &.amount {
    color: #d9534f;
    font-weight: bold;
  }
`;

const OrderProgress = styled.div`
  margin: 1rem 0;
`;

const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Progress = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  background-color: #e7e7e7;
  border-radius: 5px;
  margin: 1rem 0;

  &::before {
    content: "";
    display: block;
    width: ${(props) =>
      props.active === "complete"
        ? "100%"
        : props.active === "accepted"
        ? "66%"
        : "33%"};
    height: 100%;
    background-color: #467048;
    border-radius: 5px;
  }
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.875rem;
  color: #888;
`;

export default OrderConfirmationPage;
