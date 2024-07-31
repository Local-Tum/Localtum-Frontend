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
                <FreeText>한 잔 무료!</FreeText>
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
  margin: 0 auto 20px auto;
  text-align: left;
  box-sizing: border-box;
`;

const CardContainer = styled.div`
  border: 1px solid #a9b782;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const CardTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #444;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const StampsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  align-items: center;
  justify-items: center;

  @media (max-width: 480px) {
    grid-template-columns: repeat(
      5,
      minmax(0, 1fr)
    ); /* 각 스탬프가 일정한 너비를 가지도록 설정 */
    gap: 5px;
  }
`;

const Stamp = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #a9b782;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.filled ? "#A9B782" : "#f9f9f9")};
  position: relative;

  &:not(:last-child) img {
    width: 70%;
    height: 70%;
    background-color: ${(props) => (props.filled ? "#A9B782" : "transparent")};
    border-radius: 50%;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const StampImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
`;

const FreeText = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  color: #467048;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export default StampCard;
