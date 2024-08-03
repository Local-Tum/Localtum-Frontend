import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/mypageedit/Header";
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
  const defaultCafe = Cafes.find((cafe) => cafe.id === 1);
  const status = localStorage.getItem(`status-${id}`) || "closed";
  const [notificationCount, setNotificationCount] = useState(0);

  if (!cafe) {
    return <div>카페 정보를 찾을 수 없습니다.</div>;
  }

  const menu = cafe.menu ? cafe.menu : defaultCafe.menu;

  const handleCouponRequest = async () => {
    const token = localStorage.getItem("token"); // 저장된 토큰 가져오기

    try {
      const response = await axios.post(
        `https://15.165.139.216.nip.io/localtum/cafe_details/${encodeURIComponent(
          cafe.name
        )}/coupon`,
        { description: 2000 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("쿠폰 받기 성공!"); // 쿠폰 받기 성공 알림
    } catch (error) {
      console.error("쿠폰 받기 요청 실패:", error);
      alert("쿠폰 받기 실패"); // 쿠폰 받기 실패 알림
    }
  };

  const handleProductClick = (product) => {
    navigate("/payment", {
      state: {
        item: {
          ...product,
          cafe_name: cafe.name, // cafe_name 추가
        },
      },
    });
  };

  return (
    <Container>
      <Header />
      <Main>
        <ContentWrapper>
          <StoreInfo
            id={cafe.id}
            name={cafe.name}
            address={cafe.address}
            status={status}
            hours={cafe.hours}
            image={cafe.image}
          />
          <StampStatus />
          <StyledHR />
          <CategoryFilter />
          {menu ? (
            <ProductList menu={menu} onProductClick={handleProductClick} />
          ) : (
            <div>메뉴 정보를 불러올 수 없습니다.</div>
          )}
        </ContentWrapper>
      </Main>
      <CouponButton>
        <ButtonText onClick={handleCouponRequest}>할인쿠폰 받기</ButtonText>
        <CartContainer onClick={() => navigate("/order")}>
          <CartIcon src={shoppingCartIcon} alt="Cart" />
          <NotificationBadge>{notificationCount}</NotificationBadge>
        </CartContainer>
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
  flex: 1;
  margin-top: 2rem;
  margin-bottom: 2rem;
  overflow-y: auto;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const StyledHR = styled.hr`
  border: 1rem;
  height: 3px;
  background-color: #e7e7e7;
  margin-bottom: 1rem;
  width: 100%;
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
  box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.1),
    3px 3px 10px 0px rgba(0, 0, 0, 0.1);
`;

const ButtonText = styled.span`
  color: #595b59;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.64px;
  padding: 0.3rem 1rem;
  border-radius: 30px;
  background-color: white;
  box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.1),
    3px 3px 10px 0px rgba(0, 0, 0, 0.1);
`;

const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 0.2rem;
`;

const CartIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #e7e7e7;
  color: #808180;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 600;
`;

export default CafeDetailPage;
