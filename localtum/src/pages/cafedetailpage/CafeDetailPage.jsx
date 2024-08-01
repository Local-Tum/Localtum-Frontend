import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/mypageedit/Header";
import ImageSlider from "../../components/cafedetailpage/ImageSlider";
import StoreInfo from "../../components/cafedetailpage/StoreInfo";
import StampStatus from "../../components/cafedetailpage/StampStatus";
import ProductList from "../../components/cafedetailpage/ProductList";
import CategoryFilter from "../../components/cafedetailpage/CategoryFilter";
import shoppingCartIcon from "../../assets/icons/shoppingCart.png";
import Cafes from "../../components/Cafes/Cafes";

const CafeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cafe = Cafes.find((cafe) => cafe.id === parseInt(id, 10));
  return (
    <Container>
      <Header />
      <Main>
        <ContentWrapper>
          <ImageSlider images={[cafe.image]} />
          <StoreInfo
            name={cafe.name}
            address={cafe.address}
            hours={cafe.hours}
          />
          <StampStatus />
          <CategoryFilter />
          {cafe.menu ? (
            <ProductList menu={cafe.menu} />
          ) : (
            <div>메뉴 정보를 불러올 수 없습니다.</div>
          )}
        </ContentWrapper>
      </Main>
      <CouponButton onClick={() => navigate("/coupons")}>
        <ButtonText>할인쿠폰 받기</ButtonText>
        <CartIcon src={shoppingCartIcon} alt="Cart" />
      </CouponButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
`;

const Main = styled.main`
  width: 100%;
  padding: 1rem 0;
  flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
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
  max-width: 480px;
  margin: 0 auto;
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
