import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/recommend/Header';
import CafeList from '../../components/recommend/CafeList';

const RecommendCafe = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { item } = location.state;

    const cafes = [
        { name: "멋쟁이 사자처럼", address: "서울시 성북구 삼선교로 16길", distance: "145m", status: "open" },
        { name: "디저트 맛있다", address: "서울시 성북구 삼선교로 12길", distance: "721m", status: "open" },
        { name: "초코나라", address: "서울시 성북구 삼선교로 55길", distance: "1.2km", status: "closed" },
        { name: "아몬드 나라", address: "서울시 성북구 삼선교로 99길", distance: "2.1km", status: "open" },
    ];

    return (
        <Container>
            <Header />
            <Content>
                <Title>
                    <span><strong>'{item}'</strong> 판매하는 카페</span>
                </Title>
                <CafeList cafes={cafes} />
                <LoadMoreButton>더보기</LoadMoreButton>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    padding: 2rem;
    text-align: center;
    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: -0.96px;
    width: 35vw;
    color: #fff;
    background-color: #81694e;
    border-radius: 16px;
    box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.10), 3px 3px 10px 0px rgba(0, 0, 0, 0.10);
    padding: 0.5rem 2rem;
    text-align: center;
    margin: 2rem 0 5rem 0;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        width: 70vw;
    }
`;

const LoadMoreButton = styled.button`
    background-color: #b5b6b5;
    border-radius: 30px;
    border: none;
    padding: 1rem 7rem;
    font-size: 1rem;
    color: #FFF;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    margin-top: 4rem;
`;

export default RecommendCafe;
