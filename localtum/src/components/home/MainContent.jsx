import React, { useState } from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';
import locationIcon from "../../assets/icons/locationIcon.png";

const MainContent = () => {
    const [visibleCount, setVisibleCount] = useState(2);

    const loadMoreItems = () => {
        setVisibleCount(prevCount => prevCount + 2);
    };

    const items = [
        { id: 1, name: '멋쟁이 사자처럼', description: '서울시 성북구 삼선교로 16길', status: 'open' },
        { id: 2, name: '디저트 맛있다', description: '서울시 성북구 삼선교로 12길', status: 'closed' },
        { id: 3, name: '초코나라', description: '서울시 성북구 삼선교로 55길', status: 'open' },
        { id: 4, name: '아몬드 나라', description: '서울시 성북구 삼선교로 99길', status: 'closed' }
    ];

    return (
        <StyledMain>
            <Title>내 주변 카페</Title>
            <RightContainer>
                <ToggleButton>
                    <LocationIcon src={locationIcon} alt="locationIcon" />
                    성북구
                </ToggleButton>
            </RightContainer>
            <ItemList items={items} visibleCount={visibleCount} />
            {visibleCount < items.length && (
                <LoadMoreButton onClick={loadMoreItems}>더보기</LoadMoreButton>
            )}
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

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 1rem;
    margin-right: 50vw;
    padding-right: 1rem;

    @media (max-width: 768px) {
        margin-right: 20vw;
    }

    @media (max-width: 480px) {
        margin-right: 10vw;
    }
`;

const ToggleButton = styled.button`
    background-color: #ffffff;
    border-radius: 15px;
    border: none;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: #467048;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.1);
    margin-right: 0.5rem;
`;

const LocationIcon = styled.img`
    height: 0.8rem;
    cursor: pointer;
    margin-right: 0.3rem;
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
