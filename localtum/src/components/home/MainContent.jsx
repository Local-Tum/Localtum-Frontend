import React, { useState, useEffect } from "react";
import styled from "styled-components";
import locationIcon from "../../assets/icons/locationIcon.png";
import ItemList from "./ItemList";
import cafes from "../Cafes/Cafes";

const MainContent = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [district, setDistrict] = useState("위치 찾는 중");
  const [sortedCafes, setSortedCafes] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_KAKAO_API_KEY;
    if (!apiKey) {
      setDistrict("API 키가 설정되지 않았습니다.");
      return;
    }
  }, []);

  return (
    <StyledMain>
      <Title>내 주변 카페</Title>
      <RightContainer>
        <ToggleButton>
          <LocationIcon src={locationIcon} alt="locationIcon" />
          {district}
        </ToggleButton>
      </RightContainer>
      <ItemList items={sortedCafes} visibleCount={visibleCount} />
      {visibleCount < sortedCafes.length && (
        <LoadMoreButton
          onClick={() => setVisibleCount((prevCount) => prevCount + 2)}
        >
          더보기
        </LoadMoreButton>
      )}
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 25vw 5rem 25vw;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 1rem;
  padding-right: 1rem;

  @media (max-width: 768px) {
    padding-right: 2rem;
  }

  @media (max-width: 480px) {
    padding-right: 2rem;
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

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 0.2rem 0.3rem;
  }
`;

const LocationIcon = styled.img`
  height: 0.8rem;
  cursor: pointer;
  margin-right: 0.3rem;

  @media (max-width: 768px) {
    height: 0.7rem;
  }

  @media (max-width: 480px) {
    height: 0.6rem;
  }
`;

const LoadMoreButton = styled.button`
  background-color: #b5b6b5;
  border-radius: 30px;
  border: none;
  padding: 1rem 7rem;
  font-size: 1rem;
  color: #fff;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 0.8rem 5rem;
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 3rem;
    font-size: 0.75rem;
  }
`;

export default MainContent;
