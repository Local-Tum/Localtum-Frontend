import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import Nav from '../../components/home/Nav';
import OrderItem from '../../components/Order/OrderItem';
import { getOrderList } from '../../apis/api/orderlist.js';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3); // 초기값을 3으로 설정
    const [loading, setLoading] = useState(true);

    const loadMoreOrders = () => {
        setVisibleCount(prevCount => prevCount + 3); // 3개씩 더 보여줌
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await getOrderList();
                if (response.status === 200) {
                    console.log("Fetched Orders:", response.data); // 데이터 값을 콘솔에 출력
                    setOrders(response.data);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Header />
            <Banner />
            <Nav activeIndex={2} />
            <Content>
                <OrderContainer>
                    <Notice>*3개월 이내 주문내역만 표시됩니다.</Notice>
                    <OrderList>
                        {orders.slice(0, visibleCount).map((order, index) => (
                            <OrderItem key={index} order={order} />
                        ))}
                    </OrderList>
                </OrderContainer>
                {visibleCount < orders.length && <MoreButton onClick={loadMoreOrders}>더보기</MoreButton>}
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
