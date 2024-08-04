import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import Nav from '../../components/home/Nav';
import NavBar from '../../components/Search/Nav';
import CafeList from '../../components/recommend/CafeList';
import CafeMap from '../../components/Search/CafeMap';
import SearchKeyword from '../../components/Search/SearchKeyword';
import cafes from '../../components/Cafes/Cafes';
import { getBookmarks, addBookmark, deleteBookmark } from '../../apis/api/favorites';

const Search = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleCount0, setVisibleCount0] = useState(2);
    const [visibleCount2, setVisibleCount2] = useState(2);
    const [favoriteCafes, setFavoriteCafes] = useState([]);

    const fetchFavoriteCafes = async () => {
        try {
            const response = await getBookmarks();
            if (response.status === 200) {
                const transformedCafes = response.data.data.map(item => {
                    const cafe = cafes.find(cafe => cafe.name === item.cafeName);
                    const storedDistance = localStorage.getItem(`distance-${cafe.id}`);
                    return {
                        ...cafe,
                        distance: storedDistance || 'N/A'
                    };
                });
                setFavoriteCafes(transformedCafes);
            } else {
                console.error('Failed to fetch favorite cafes:', response);
            }
        } catch (error) {
            console.error('Failed to fetch favorite cafes:', error);
        }
    };

    useEffect(() => {
        fetchFavoriteCafes();
    }, []); // 컴포넌트가 마운트될 때 즐겨찾기 카페를 가져옴

    useEffect(() => {
        if (activeIndex === 2) {
            fetchFavoriteCafes();
        }
    }, [activeIndex]); // activeIndex가 2로 변경될 때 즐겨찾기 카페를 다시 가져옴

    const loadMoreCafes0 = () => {
        setVisibleCount0(prevCount => prevCount + 2);
    };

    const loadMoreCafes2 = () => {
        setVisibleCount2(prevCount => prevCount + 2);
    };

    const toggleFavorite = async (cafe) => {
        if (cafe.isFavorite) {
            try {
                const response = await deleteBookmark(cafe.name);
                if (response.status === 200) {
                    setFavoriteCafes(prev => prev.filter(item => item.name !== cafe.name));
                } else {
                    console.error('Failed to remove favorite:', response);
                }
            } catch (error) {
                console.error('Failed to remove favorite:', error);
            }
        } else {
            try {
                const response = await addBookmark(cafe.name);
                if (response.status === 200) {
                    setFavoriteCafes(prev => [
                        ...prev,
                        { ...cafe, isFavorite: true, distance: localStorage.getItem(`distance-${cafe.id}`) || 'N/A' }
                    ]);
                } else {
                    console.error('Failed to add favorite:', response);
                }
            } catch (error) {
                console.error('Failed to add favorite:', error);
            }
        }
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
                        <CafeList cafes={cafes} visibleCount={visibleCount0} toggleFavorite={toggleFavorite} />
                        {visibleCount0 < cafes.length && <LoadMoreButton onClick={loadMoreCafes0}>더보기</LoadMoreButton>}
                    </>
                )}
                {activeIndex === 1 && <CafeMap />}
                {activeIndex === 2 && (
                    <>
                        <CafeList cafes={favoriteCafes} visibleCount={visibleCount2} toggleFavorite={toggleFavorite} />
                        {visibleCount2 < favoriteCafes.length && <LoadMoreButton onClick={loadMoreCafes2}>더보기</LoadMoreButton>}
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
