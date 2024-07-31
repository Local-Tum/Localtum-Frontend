import React from "react";
import styled from "styled-components";
import Header from "../../components/mypageedit/Header";
import ImageSlider from "../../components/cafedetailpage/ImageSlider";
import StoreInfo from "../../components/cafedetailpage/StoreInfo";
import StampStatus from "../../components/cafedetailpage/StampStatus";
import ProductList from "../../components/cafedetailpage/ProductList";
import CategoryFilter from "../../components/cafedetailpage/CategoryFilter";
import { useNavigate } from "react-router-dom";
import shoppingCartIcon from "../../assets/icons/shoppingCart.png";

const CafeDetailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Header />
        <Main>
          <ImageSlider />
          <StoreInfo />
          <StampStatus />
          <CategoryFilter />
          <ProductList />
        </Main>
        <CouponButton onClick={() => navigate("/coupons")}>
          <ButtonText>할인쿠폰 받기</ButtonText>
          <CartIcon src={shoppingCartIcon} alt="Cart" />
        </CouponButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Main = styled.main`
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;

const CouponButton = styled.button`
  width: 100%;
  background-color: #a9b782;
  color: white;
  border: none;
  border-radius: 30px 30px 0 0;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

const ButtonText = styled.span`
  color: #595b59;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: white;
`;

const CartIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export default CafeDetailPage;
