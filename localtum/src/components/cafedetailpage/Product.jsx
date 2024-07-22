import React from "react";
import styled from "styled-components";

const Product = () => {
  return (
    <ProductContainer>
      <ProductImage>상품 이미지</ProductImage>
      <ProductName>아메리카노</ProductName>
      <ProductPrice>3,000원</ProductPrice>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f6f3f3;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #b5b6b5;
  margin-bottom: 0.5rem;
`;

const ProductName = styled.p`
  font-size: 0.9rem;
  color: #444;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin: 0;
`;

export default Product;
