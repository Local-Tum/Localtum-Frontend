import React from "react";
import styled from "styled-components";

const StoreInfo = () => {
  return (
    <InfoContainer>
      <StoreTitle>멋쟁이 사자처럼</StoreTitle>
      <StoreDesc>* 개인 컵(텀블러) 지참시 500원이 할인됩니다!</StoreDesc>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  margin-bottom: 1rem;
`;

const StoreTitle = styled.h2`
  font-size: 1.2rem;
  color: #444;
`;

const StoreDesc = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

export default StoreInfo;
