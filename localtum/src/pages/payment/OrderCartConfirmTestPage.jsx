import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/mypageedit/Header";
import nameIcon from "../../assets/icons/cafeName.png";

const OrderCartConfirmationTestPage = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (storedOrder.length === 0) {
      alert("장바구니가 비어있습니다.");
      navigate("/order/cart");
      return;
    }

    // Assuming the first item in the array for demonstration purposes
    const orderData = {
      cafename: storedOrder[0].cafe_name,
      orderMenu: storedOrder,
      prices: storedOrder.reduce((total, item) => total + Number(item.price) * item.quantity, 0),
      orderStatus: "PREPARE", // or any default status
      createdAt: new Date().toISOString(),
      id: Math.floor(Math.random() * 1000) + 1, // Generate a random order id
    };

    setOrder(orderData);
    const formatted = new Date(orderData.createdAt).toLocaleString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    setFormattedDate(formatted);

    // Clear the local storage
    localStorage.removeItem("cartItems");
  }, [navigate]);

  const progressStatus = () => {
    switch (order?.orderStatus) {
      case "PREPARE":
        return "33%";
      case "PROGRESS":
        return "66%";
      case "COMPLETE":
        return "100%";
      default:
        return "0";
    }
  };

  if (!order) {
    return null;
  }

  return (
    <Container>
      <Header />
      <MainContainer>
        <Main>
          <CafeInfo>
            <CafeNameIcon src={nameIcon} alt="*" />
            <CafeName>{order.cafename}</CafeName>
          </CafeInfo>
          <Divider />
          <OrderInfo>
            <OrderTime>{formattedDate}</OrderTime>
            <OrderCompleteMessage>주문이 완료되었습니다.</OrderCompleteMessage>
            <OrderNumber>주문번호 {order.id}</OrderNumber>
          </OrderInfo>
          <Divider />
          <OrderDetails>
            <Detail>
              <Label>주문 상품</Label>
              <Value>
                {order.orderMenu.map((menu, index) => (
                  <div key={index}>{menu.name}</div>
                ))}
              </Value>
            </Detail>
            <Detail>
              <Label>결제 금액</Label>
              <Value className="amount">{order.prices.toLocaleString()}원</Value>
            </Detail>
          </OrderDetails>
          <Divider />
          <OrderProgress>
            <ProgressBar>
              <Progress width={progressStatus()} />
              <ProgressText>
                <span
                  className={`progress-step ${
                    order.orderStatus === "PREPARE" ? "active" : ""
                  }`}
                >
                  결제 완료
                </span>
                <span
                  className={`progress-step ${
                    order.orderStatus === "PROGRESS" ? "active" : ""
                  }`}
                >
                  주문 접수
                </span>
                <span
                  className={`progress-step ${
                    order.orderStatus === "COMPLETE" ? "active" : ""
                  }`}
                >
                  제조 완료
                </span>
              </ProgressText>
            </ProgressBar>
          </OrderProgress>
        </Main>
      </MainContainer>
    </Container>
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
  font-weight: 700;
  color: #467048;
  background-color: #fff;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  text-align: left;
  box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.1),
    3px 3px 10px 0px rgba(0, 0, 0, 0.1);
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
  font-weight: 600;
  font-size: 1rem;
`;

const Value = styled.div`
  color: #595b59;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: -0.8px;
  &.amount {
    color: #ca7070;
    font-weight: 700;
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
  height: 30px;
  background-color: #e7e7e7;
  border-radius: 30px;
  margin: 1rem 0;

  &::before {
    content: "";
    display: block;
    width: ${(props) => props.width};
    height: 100%;
    background-color: #467048;
    border-radius: 30px;
  }
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;

  .progress-step {
    font-weight: normal;
    color: #808180;

    &.active {
      font-weight: bold;
      color: #444;
    }
  }
`;

export default OrderCartConfirmationTestPage;
