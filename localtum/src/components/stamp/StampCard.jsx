import React from "react";
import styled from "styled-components";
import cupGreen from "../../assets/icons/cupGreen.png";
import cupDone from "../../assets/icons/cupDone.png";

const StampCard = ({ title, stamps }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardContainer>
        <StampsContainer>
          {Array.from({ length: 10 }).map((_, index) => (
            <Stamp key={index} filled={index < stamps} freeDrink={index === 9}>
              {index === 9 ? (
                <FreeText filled={index < stamps}>한 잔 무료!</FreeText>
              ) : (
                <StampImage
                  src={index < stamps ? cupDone : cupGreen}
                  alt="stamp"
                />
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
  margin: 2rem auto 1rem auto;
  text-align: left;
  padding: 0 1rem;
  box-sizing: border-box;
  position: relative;
`;

const CardContainer = styled.div`
  border: 4px solid #a9b782;
  border-radius: 30px;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const CardTitle = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
  text-align: left;
  position: absolute;
  top: -25px;
  left: 28px;
  background-color: #467048;
  padding: 3px 10px;
  height: 5rem;
  border-radius: 16px;
  
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
  border: 3px solid #a9b782;
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
  font-size: 0.7rem;
  font-weight: 600;
  color: ${(props) => (props.filled ? "#fff" : "#a9b782")};
  letter-spacing: -0.64px;
  text-align: center;
`;

export default StampCard;
