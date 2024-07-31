import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/mypageedit/Header";
import CafeList from "../../components/recommend/CafeList";
import cafes from "../../components/Cafes/Cafes";

const FavoriteList = () => {
  const [visibleCount2, setVisibleCount2] = useState(2);

  const getFavoriteCafes = () => {
    return cafes.filter((cafe) => {
      const favoriteStatus = localStorage.getItem(`favorite-${cafe.name}`);
      return favoriteStatus === "true";
    });
  };

  const loadMoreCafes2 = () => {
    setVisibleCount2((prevCount) => prevCount + 2);
  };

  return (
    <Container>
      <Header />
      <MainContent>
        <Title>즐겨찾기</Title>
        <CafeListContainer>
          <CafeList cafes={getFavoriteCafes()} visibleCount={visibleCount2} />
          {visibleCount2 < getFavoriteCafes().length && (
            <LoadMoreButton onClick={loadMoreCafes2}>더보기</LoadMoreButton>
          )}
        </CafeListContainer>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
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

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
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
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
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
