import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import Nav from '../../components/home/Nav';
import NavBar from '../../components/Search/Nav';
import CafeList from '../../components/recommend/CafeList';
import CafeMap from '../../components/Search/CafeMap';
import SearchKeyword from '../../components/Search/SearchKeyword';
import cafes from '../../components/Cafes/Cafes';

const Search = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleCount0, setVisibleCount0] = useState(2);
    const [visibleCount2, setVisibleCount2] = useState(2);

    const getFavoriteCafes = () => {
        return cafes.filter(cafe => {
            const favoriteStatus = localStorage.getItem(`favorite-${cafe.name}`);
            return favoriteStatus === 'true';
        });
    };

    const loadMoreCafes0 = () => {
        setVisibleCount0(prevCount => prevCount + 2);
    };

    const loadMoreCafes2 = () => {
        setVisibleCount2(prevCount => prevCount + 2);
    };

    return (
        <div>
            <Header />
            <Banner />
            <Nav activeIndex={1} />
            <NavBar activeIndex={activeIndex} onSelect={setActiveIndex} />
            <Content>
                {activeIndex === 0 && (
                    <>
                        <CafeList cafes={cafes} visibleCount={visibleCount0} />
                        {visibleCount0 < cafes.length && <LoadMoreButton onClick={loadMoreCafes0}>더보기</LoadMoreButton>}
                    </>
                )}
                {activeIndex === 1 && <CafeMap />}
                {activeIndex === 2 && (
                    <>
                        <CafeList cafes={getFavoriteCafes()} visibleCount={visibleCount2} />
                        {visibleCount2 < getFavoriteCafes().length && <LoadMoreButton onClick={loadMoreCafes2}>더보기</LoadMoreButton>}
                    </>
                )}
                {activeIndex === 3 && <SearchKeyword items={cafes} />}
            </Content>
        </div>
    );
};

const Content = styled.div`
    margin: 2rem 0 5rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export default Search;
