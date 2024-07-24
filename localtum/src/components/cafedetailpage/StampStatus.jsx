import React from "react";
import styled from "styled-components";
import Stamp1 from "../../assets/Stamp1.png";

const StampStatus = () => {
  return (
    <StampContainer>
      <StampTitle>스탬프 현황</StampTitle>
      <StampGrid>
        {Array(9)
          .fill()
          .map((_, idx) => (
            <Stamp key={idx}>
              <StampImage src={Stamp1} alt="Stamp" />
            </Stamp>
          ))}
        <StampFree>한 잔 무료!</StampFree>
      </StampGrid>
    </StampContainer>
  );
};

const StampContainer = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const StampTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #467048;
  margin-bottom: 0.5rem;
`;

const StampGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  justify-items: center;
`;

const Stamp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
`;

const StampImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StampFree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #467048;
  width: 60px;
  height: 60px;
`;

export default StampStatus;
