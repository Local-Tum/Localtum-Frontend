import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OrderItem from "../../components/Order/OrderItem";
import Header from "../../components/mypageedit/Header";

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `https://15.165.139.216.nip.io/localtum/cafe_details/{cafe_name}/{menu_name}/order_history`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
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
      {orders.length > 0 ? (
        <OrderList>
          {orders.map((order) => (
            <OrderItem
              key={order.orderNumber}
              order={order}
              onClick={() => handleOrderClick(order)}
            />
          ))}
        </OrderList>
      ) : (
        <NoOrders>주문 내역이 없습니다.</NoOrders>
      )}
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

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const NoOrders = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #808180;
`;

export default OrderHistoryPage;
