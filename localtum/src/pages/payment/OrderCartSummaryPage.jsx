import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/mypageedit/Header";
import CouponModal from "../../components/Order/CouponModal";
import nameIcon from "../../assets/icons/cafeName.png";
import upperIcon from "../../assets/icons/upperIcon.png";
import underIcon2 from "../../assets/icons/underIcon2.png";
import rightIcon from "../../assets/icons/rightIcon.png";
import deleteIcon from "../../assets/icons/deleteIcon.png";

const OrderCartSummaryPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isCouponModalOpen, setCouponModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (storedCartItems.length === 0) {
      alert("장바구니가 비어있습니다. 메뉴를 추가해주세요.");
      navigate(-1);
    } else {
      setCartItems(storedCartItems);
    }
  }, [navigate]);

  const handleOrderButtonClick = async () => {
    const token = localStorage.getItem("token");

    if (cartItems.length === 0) {
      alert("장바구니가 비어있습니다. 메뉴를 추가해주세요.");
      return;
    }

    const cafeName = cartItems[0].cafe_name;

    const requestData = {
      coupon: couponDiscount,
      couponName: appliedCoupon ? appliedCoupon.couponName : "쿠폰이름",
    };

    console.log("Request Data:", JSON.stringify(requestData, null, 2));

    try {
      const response = await axios.post(
        `https://15.165.139.216.nip.io/localtum/cafe_details/${encodeURIComponent(
          cafeName
        )}/${encodeURIComponent(cartItems[0].name)}/order_basket`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("주문이 성공적으로 완료되었습니다!");

      // response.data.data가 제대로 된 값인지 확인
      console.log("Order response data:", response.data.data);

      navigate("/order/cartconfirm", {
        state: {
          cafeName,
          orderId: response.data.data.id,
        },
      });

      localStorage.removeItem("cartItems");
    } catch (error) {
      console.error("주문 요청 실패:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
        alert(`주문 실패: ${error.response.data.message}`);
      } else if (error.request) {
        console.error("Error request:", error.request);
        alert("주문 실패: 서버로부터 응답이 없습니다.");
      } else {
        console.error("Error message:", error.message);
        alert(`주문 실패: ${error.message}`);
      }
    }
  };

  const handleCouponClick = () => setCouponModalOpen(true);

  const applyCoupon = (coupon) => {
    if (coupon.cafeName === cartItems[0]?.cafe_name) {
      setCouponDiscount(Number(coupon.couponDescription));
      setAppliedCoupon(coupon);
      alert("쿠폰이 적용되었습니다.");
    } else {
      alert("이 쿠폰은 해당 카페에서 사용할 수 없습니다.");
    }
  };

  const handleCouponConfirm = () => setCouponModalOpen(false);

  const handleCouponCancel = () => setCouponModalOpen(false);

  const handlePaymentChange = (e) => setSelectedPayment(e.target.value);

  const toggleExpand = (itemName) =>
    setExpandedItem(expandedItem === itemName ? null : itemName);

  const handleDelete = (itemName) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <Container>
        <Header />
        <MainContainer>
          <Main>
            <CafeInfo>
              <CafeNameIcon src={nameIcon} alt="Cafe Icon" />
              <CafeName>{cartItems[0]?.cafe_name || "카페 이름"}</CafeName>
            </CafeInfo>
            <OrderSummary>
              <OrderSummaryTitle>주문 상품</OrderSummaryTitle>
              {cartItems.map((item, index) => (
                <OrderItem key={index}>
                  <ItemInfo>
                    <ItemDetails onClick={() => toggleExpand(item.name)}>
                      <ItemName>{item.name}</ItemName>
                      <ExpandButton
                        src={
                          expandedItem === item.name ? upperIcon : underIcon2
                        }
                        alt={expandedItem === item.name ? "▲" : "▼"}
                      />
                    </ItemDetails>
                    <DeleteButton
                      src={deleteIcon}
                      alt="X"
                      onClick={() => handleDelete(item.name)}
                    />
                  </ItemInfo>
                  {expandedItem === item.name && (
                    <ExpandedDetails>
                      <Detail>{item.size}</Detail>
                      <Detail>{item.temperature}</Detail>
                    </ExpandedDetails>
                  )}
                </OrderItem>
              ))}
            </OrderSummary>
            <Divider />
            <AdditionalSections>
              <Section>
                <SectionTitle>매장 요청 사항</SectionTitle>
                <Input placeholder="매장 요청사항이 있으면 적어주세요." />
              </Section>
              <Divider />
              <Section>
                <SectionTitle>쿠폰 적용</SectionTitle>
                <CouponInput onClick={handleCouponClick}>
                  쿠폰
                  <CouponButton src={rightIcon} />
                </CouponInput>
                {appliedCoupon && (
                  <AppliedCoupon>
                    적용된 쿠폰: '{appliedCoupon.cafeName}' 음료{""}
                    {appliedCoupon.couponDescription}원 할인 쿠폰
                  </AppliedCoupon>
                )}
              </Section>
              <Divider />
              <Section>
                <SectionTitle>결제 수단</SectionTitle>
                <PaymentOption>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="payment"
                      value="신용카드"
                      onChange={handlePaymentChange}
                    />
                    <Checkmark />
                    신용카드
                  </CustomCheckbox>
                </PaymentOption>
                <PaymentOption>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="payment"
                      value="간편카드 결제"
                      onChange={handlePaymentChange}
                    />
                    <Checkmark />
                    간편카드 결제
                  </CustomCheckbox>
                </PaymentOption>
                <PaymentOption>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="payment"
                      value="네이버 페이"
                      onChange={handlePaymentChange}
                    />
                    <Checkmark />
                    네이버 페이
                  </CustomCheckbox>
                </PaymentOption>
                <PaymentOption>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="payment"
                      value="카카오 페이"
                      onChange={handlePaymentChange}
                    />
                    <Checkmark />
                    카카오 페이
                  </CustomCheckbox>
                </PaymentOption>
              </Section>
            </AdditionalSections>
            <Divider />
            <Summary>
              <SummaryItem>
                <SummaryLabel>상품 금액</SummaryLabel>
                <SummaryValue>
                  {cartItems
                    .reduce(
                      (total, item) => total + item.finalPrice * item.quantity,
                      0
                    )
                    .toLocaleString()}
                  원
                </SummaryValue>
              </SummaryItem>
              <SummaryItem>
                <SummaryLabel>할인 금액</SummaryLabel>
                <SummaryValue>
                  -{couponDiscount.toLocaleString()}원
                </SummaryValue>
              </SummaryItem>
              <SummaryItem>
                <SummaryLabelTotal>결제 금액</SummaryLabelTotal>
                <SummaryValueTotal>
                  {(
                    cartItems.reduce(
                      (total, item) => total + item.finalPrice * item.quantity,
                      0
                    ) - couponDiscount
                  ).toLocaleString()}
                  원
                </SummaryValueTotal>
              </SummaryItem>
            </Summary>
            <OrderButton
              onClick={handleOrderButtonClick}
              disabled={!selectedPayment}
              active={!!selectedPayment}
            >
              결제하기
            </OrderButton>
          </Main>
        </MainContainer>
        {isCouponModalOpen && (
          <CouponModal
            onConfirm={handleCouponConfirm}
            onCancel={handleCouponCancel}
            applyCoupon={applyCoupon}
          />
        )}
      </Container>
    </>
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

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  overflow-y: auto;
  box-sizing: border-box;
`;

const Main = styled.main`
  width: 100%;
  max-width: 480px;
  flex: 1;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-sizing: border-box;
  padding: 0 1rem;
`;

const CafeInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CafeNameIcon = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
`;

const CafeName = styled.h2`
  font-size: 1.2rem;
  color: #282828;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Divider = styled.div`
  background-color: #e7e7e7;
  height: 1px;
  margin: 1rem 0;
`;

const OrderSummary = styled.div`
  margin-bottom: 2rem;
`;

const OrderSummaryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #444;
  margin-bottom: 1rem;
`;

const OrderItem = styled.div`
  margin-bottom: 0.5rem;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ItemName = styled.h3`
  font-size: 1rem;
  color: #444;
  margin-left: 1.5rem;
`;

const ItemDetails = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #595b59;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExpandButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1.5rem;
`;

const DeleteButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1.5rem;
`;

const ExpandedDetails = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.3rem;
  margin-left: auto;
  text-align: right;
  margin-right: 6rem;
`;

const Detail = styled.div`
  margin-bottom: 0.3rem;
`;

const AdditionalSections = styled.div`
  margin-bottom: 1rem;
`;

const Section = styled.div`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 650;
  letter-spacing: -1px;
  color: #444;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 90%;
  padding: 0.8rem 1rem;
  font-size: 0.8rem;
  border: 2px solid #e7e7e7;
  border-radius: 30px;
  ::placeholder {
    color: #b5b6b5;
  }
`;

const CouponInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #595b59;
  cursor: pointer;
`;

const CouponButton = styled.img`
  height: 1rem;
`;

const AppliedCoupon = styled.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #595b59;
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.64px;
  color: #595b59;
  margin-bottom: 1rem;
`;

const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const RadioButton = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + span {
    background-color: #a9b782;
  }
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + span {
    background-color: #a9b782;
  }
`;

const Checkmark = styled.span`
  height: 15px;
  width: 15px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #e7e7e7;
  margin-right: 8px;
  position: relative;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

const SummaryLabel = styled.div`
  font-size: 1rem;
  color: #444;
  font-weight: 600;
`;

const SummaryLabelTotal = styled.div`
  font-size: 1.1rem;
  color: #282828;
  font-weight: 700;
`;

const SummaryValue = styled.div`
  font-size: 1rem;
  color: #444;
  font-weight: 700;
`;

const SummaryValueTotal = styled.div`
  font-size: 1rem;
  color: #ca7070;
  font-weight: 700;
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ active }) => (active ? "#467048" : "#808180")};
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: ${({ active }) => (active ? "pointer" : "not-allowed")};
`;

export default OrderCartSummaryPage;
