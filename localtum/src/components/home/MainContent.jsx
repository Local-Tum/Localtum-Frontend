import React from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';

const MainContent = () => {
    return (
        <StyledMain>
            <Title>내 주변 카페</Title>
            <ItemList />
            <LoadMoreButton>더보기</LoadMoreButton>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 1rem;
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
    margin-top: 20px;
`;

export default MainContent;
