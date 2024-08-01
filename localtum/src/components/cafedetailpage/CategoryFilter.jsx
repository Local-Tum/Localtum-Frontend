import React from "react";
import styled from "styled-components";

const categories = ["추천메뉴", "커피", "디카페인", "음료", "티", "푸드"];

const CategoryFilter = () => {
  return (
    <CategoryContainer>
      {categories.map((category, index) => (
        <CategoryButton key={index} active={index === 1}>
          {category}
        </CategoryButton>
      ))}
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 3px;
  width: 100%;
  max-width: 480px;
  box-sizing: border-box;
`;

const CategoryButton = styled.button`
  flex: 1;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "#467048" : "#b0b0b0")};
  position: relative;
  padding: 0.5rem 0;
  text-align: center;

  &:after {
    content: "";
    display: ${(props) => (props.active ? "block" : "none")};
    width: 100%;
    height: 2px;
    background-color: #467048;
    position: absolute;
    bottom: -1px;
    left: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.4rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.3rem 0;
  }
`;

export default CategoryFilter;
