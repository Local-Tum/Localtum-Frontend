import React from 'react';
import styled from 'styled-components';
import orderIcon from '../../assets/icons/OrderIcon.png';
import orderIconGrey from '../../assets/icons/OrderIconGrey.png';
import gtIcon from '../../assets/icons/gtIcon.png';

const OrderItem = ({ order }) => {
    const icon = order.status === "픽업 완료" ? orderIconGrey : orderIcon;

    return (
        <OrderContainer>
            <IconBox active={order.status === "픽업 대기 중"}>
                <OrderIcon src={icon} alt={order.status} />
                <OrderStatus>{order.status}</OrderStatus>
            </IconBox>
            <InfoBox>
                <TextBox>
                    <CafeName>{order.cafeName}</CafeName>
                    <OrderDate>{order.date}</OrderDate>
                    <OrderNumber>주문번호 {order.orderNumber}</OrderNumber>
                </TextBox>
                <ArrowIcon src={gtIcon} alt=">" />
            </InfoBox>
        </OrderContainer>
    );
};

const OrderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #fff;
    padding: 1rem;
    @media (max-width: 768px) {
        align-items: flex-start;
    }
`;

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => (props.active ? '#a9b782' : '#fff')};
    border-radius: 30px;
    box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.10), 3px 3px 10px 0px rgba(0, 0, 0, 0.10);
    width: 6.6rem;
    height: 6.8rem;
    margin-right: 1rem;
    padding: 0.5rem;
    color: ${props => (props.active ? '#fff' : '#b5b6b5')};
    @media (max-width: 768px) {
        margin-right: 1rem;
        margin-bottom: 1rem;
        width: 5rem;
        height: 5.3rem;
    }
`;

const OrderIcon = styled.img`
    width: 2rem;
    height: 2.3rem;
    margin-bottom: 0.5rem;
`;

const OrderStatus = styled.span`
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: -0.64px;
`;

const InfoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    padding: 1rem;
    height: 5.7rem;
    background: #fff;
    border-radius: 30px;
    box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.10), 3px 3px 10px 0px rgba(0, 0, 0, 0.10);
    @media (max-width: 768px) {
        width: 40%;
        height: auto;
        padding: 1rem 2rem;

    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem 0 2rem;
    @media (max-width: 768px) {
        padding: 0;
    }
`;

const CafeName = styled.div`
    font-weight: 700;
    margin-bottom: 0.3rem;
    font-size: 1.2rem;
    color: #282828;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const OrderDate = styled.div`
    font-size: 0.9rem;
    color: #808180;
    margin-bottom: 0.8rem;
    font-weight: 500;
    letter-spacing: -0.64px;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const OrderNumber = styled.div`
    font-size: 0.9rem;
    color: #467048;
    font-weight: 700;
    letter-spacing: -0.64px;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const ArrowIcon = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1rem;
    @media (max-width: 768px) {
        width: 2rem;
        height: 2rem;
    }
`;

export default OrderItem;
