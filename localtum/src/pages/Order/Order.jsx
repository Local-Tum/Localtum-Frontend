import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/home/Header";
import Banner from "../../components/home/Banner";
import Nav from "../../components/home/Nav";
import OrderItem from "../../components/Order/OrderItem";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      const cafeName = "exampleCafe";
      const menuName = "exampleMenu";
      const url = `https://15.165.139.216.nip.io/localtum/cafe_details/${cafeName}/${menuName}/order_history`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleOrderClick = (order) => {
    navigate("/orderconfirmation", { state: { order } });
  };

  return (
    <Container>
      <Header />
      <Banner />
      <Nav activeIndex={2} />
      <Content>
        <OrderContainer>
          <Notice>*3개월 이내 주문내역만 표시됩니다.</Notice>
          <OrderList>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <OrderItem
                  key={index}
                  order={order}
                  onClick={() => handleOrderClick(order)}
                />
              ))
            ) : (
              <NoOrders>주문 내역이 없습니다.</NoOrders>
            )}
          </OrderList>
        </OrderContainer>
        {orders.length > 0 && <MoreButton>더보기</MoreButton>}
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const Notice = styled.p`
  font-size: 0.875rem;
  color: #808180;
  margin: 3rem 0 2rem 0;
  align-self: flex-start;
  margin-left: 1rem;
  font-weight: 300;
  letter-spacing: -0.64px;
`;

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MoreButton = styled.button`
  background-color: #b5b6b5;
  border-radius: 30px;
  border: none;
  padding: 1rem 7rem;
  font-size: 1rem;
  color: #fff;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const NoOrders = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #808180;
`;

export default Order;
