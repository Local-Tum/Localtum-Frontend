import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/mypageedit/Header";
import StampCard from "../../components/stamp/StampCard";
import { getStampList } from "../../apis/api/stamp";

const StampList = () => {
  const [stamps, setStamps] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStamps = async () => {
      try {
        const data = await getStampList();
        setStamps(data.data);
      } catch (error) {
        setError('Failed to fetch stamps');
        console.error('Failed to fetch stamps:', error);
      }
    };

    fetchStamps();
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <Title>스탬프 목록</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <StampCardsContainer>
          {stamps.map((stamp, index) => (
            <StampCard
              key={index}
              title={stamp.cafename}
              stamps={stamp.stampCount}
              maxStamps={10} // maxStamps 값을 적절히 설정
            />
          ))}
        </StampCardsContainer>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Main = styled.main`
  width: 100%;
  padding: 1rem 0;
  flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  color: #444;
  margin-bottom: 2rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const StampCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

const MoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 15px 100px;
  background-color: #979393;
  color: white;
  border: none;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8px 32px;
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 6px 24px;
    font-size: 0.75rem;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

export default StampList;
