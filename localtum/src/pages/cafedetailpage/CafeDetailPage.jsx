import React from "react";
import styled from "styled-components";
import Header from "../../components/cafedetailpage/Header";
import ImageSlider from "../../components/cafedetailpage/ImageSlider";
import StoreInfo from "../../components/cafedetailpage/StoreInfo";
import StampStatus from "../../components/cafedetailpage/StampStatus";
import ProductList from "../../components/cafedetailpage/ProductList";
import CategoryFilter from "../../components/cafedetailpage/CategoryFilter";
import GlobalStyles from "../../styles/globalstyles";

const CafeDetailPage = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main>
          <ImageSlider />
          <StoreInfo />
          <StampStatus />
          <CategoryFilter />
          <ProductList />
        </Main>
        <CartButton>할인쿠폰 받기</CartButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 480px; // 최대 너비 설정
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 0 auto; // 가운데 정렬

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Main = styled.main`
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;

const CartButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #467048;
  color: white;
  border: none;
  border-radius: 30px 30px 0 0;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export default CafeDetailPage;
