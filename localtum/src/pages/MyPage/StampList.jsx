import React from "react";
import styled from "styled-components";
import Header from "../../components/mypageedit/Header";
import StampCard from "../../components/stamp/StampCard";

const StampList = () => {
  const stampsData = [
    { title: "멋쟁이 사자처럼", stamps: 5, maxStamps: 10 },
    { title: "라떼는", stamps: 3, maxStamps: 10 },
    // 필요한 데이터 추가
  ];

  return (
    <Container>
      <Header />
      <Main>
        <Title>스탬프 목록</Title>
        {stampsData.map((stamp, index) => (
          <StampCard
            key={index}
            title={stamp.title}
            stamps={stamp.stamps}
            maxStamps={stamp.maxStamps}
          />
        ))}
        <MoreButton>더보기</MoreButton>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #444;
  margin-bottom: 2rem;
`;

const MoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #d3d3d3;
  color: #467048;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #b0b0b0;
  }
`;

export default StampList;
