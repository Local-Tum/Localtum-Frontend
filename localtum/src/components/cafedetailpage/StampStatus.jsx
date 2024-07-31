import React from "react";
import styled from "styled-components";
import cupGreen from "../../assets/icons/cupGreen.png";

const StampStatus = ({ title, stamps }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardContainer>
        <StampsContainer>
          {Array.from({ length: 10 }).map((_, index) => (
            <Stamp key={index} filled={index < stamps} freeDrink={index === 9}>
              {index === 9 ? (
                <FreeText>한 잔 무료!</FreeText>
              ) : (
                <StampImage src={cupGreen} alt="stamp" />
              )}
            </Stamp>
          ))}
        </StampsContainer>
      </CardContainer>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto 20px auto;
  text-align: left;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const CardContainer = styled.div`
  border: 1px solid #a9b782;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
`;

const CardTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #444;
  text-align: left;
`;

const StampsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
  }
`;

const Stamp = styled.div`
  width: 56px;
  height: 56px;
  border: 2px solid #a9b782;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.filled ? "#A9B782" : "#f9f9f9")};
  position: relative;

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
  }
`;

const StampImage = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 50%;
    height: 50%;
  }
`;

const FreeText = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  color: #467048;
  text-align: center;
`;

export default StampStatus;
