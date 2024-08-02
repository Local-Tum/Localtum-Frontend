import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/mypageedit/Header";
import CafeList from "../../components/recommend/CafeList";
import cafes from "../../components/Cafes/Cafes";
import { getBookmarks } from "../../apis/api/favorites"; // API 함수 임포트

const FavoriteList = () => {
  const [visibleCount2, setVisibleCount2] = useState(2);
  const [favoriteCafes, setFavoriteCafes] = useState([]);

  useEffect(() => {
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

    fetchFavoriteCafes();
  }, []);

  const loadMoreCafes2 = () => {
    setVisibleCount2(prevCount => prevCount + 2);
  };

  return (
    <Container>
      <Header />
      <MainContent>
        <Title>즐겨찾기</Title>
        <CafeListWrapper>
          <CafeList cafes={favoriteCafes} visibleCount={visibleCount2} />
          {visibleCount2 < favoriteCafes.length && (
            <LoadMoreButton onClick={loadMoreCafes2}>더보기</LoadMoreButton>
          )}
        </CafeListWrapper>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  overflow: hidden;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

const CafeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CafeListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 1rem;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #444;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const LoadMoreButton = styled.button`
  background-color: #b5b6b5;
  border-radius: 30px;
  border: none;
  padding: 1rem 7rem;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding: 0.75rem 5rem;
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 3rem;
    font-size: 0.75rem;
  }
`;

export default FavoriteList;
