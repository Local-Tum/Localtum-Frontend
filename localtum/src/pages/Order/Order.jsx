import React from 'react';
import styled from 'styled-components';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import Nav from '../../components/home/Nav';
import OrderItem from '../../components/Order/OrderItem';

const orders = [
    { cafeName: "멋쟁이 사자처럼", date: "2024.07.17 15:00", orderNumber: "282", status: "픽업 대기 중" },
    { cafeName: "멋쟁이 사자처럼", date: "2024.07.17 15:00", orderNumber: "282", status: "픽업 완료" },
    { cafeName: "멋쟁이 사자처럼", date: "2024.07.17 15:00", orderNumber: "282", status: "픽업 완료" }
];

const Order = () => {
    return (
        <Container>
            <Header />
            <Banner />
            <Nav activeIndex={2} />
            <Content>
                <OrderContainer>
                    <Notice>*3개월 이내 주문내역만 표시됩니다.</Notice>
                    <OrderList>
                        {orders.map((order, index) => (
                            <OrderItem key={index} order={order} />
                        ))}
                    </OrderList>
                </OrderContainer>
                <MoreButton>더보기</MoreButton>
            </Content>
        </Container>
    );
};

const Container = styled.div`
`;

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
    color: #FFF;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    margin-top: 2rem;
    margin-bottom: 4rem; 
`;

export default Order;
