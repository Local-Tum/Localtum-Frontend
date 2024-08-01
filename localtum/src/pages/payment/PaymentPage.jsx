import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "../../components/mypageedit/Header";

const PaymentPage = () => {
  const location = useLocation();
  const { item } = location.state;
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Grande size 473ml");
  const [temperature, setTemperature] = useState("Hot");
  const [personalOptions, setPersonalOptions] = useState([]);
  const [hasTumblerDiscount, setHasTumblerDiscount] = useState(false);
  const [additionalShotCost, setAdditionalShotCost] = useState(0);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) setQuantity(quantity - 1);
    }
  };

  const handleOptionChange = (option, isSelected) => {
    if (option === "샷 추가 +500원") {
      const cost = isSelected ? 500 : -500;
      setAdditionalShotCost(additionalShotCost + cost);
    }
    if (option === "2샷 추가 +1,000원") {
      const cost = isSelected ? 1000 : -1000;
      setAdditionalShotCost(additionalShotCost + cost);
    }
    if (option === "연유 추가 +700원") {
      const cost = isSelected ? 700 : -700;
      setAdditionalShotCost(additionalShotCost + cost);
    }
    if (option === "샷 저당 스테비아 추가 +600원") {
      const cost = isSelected ? 600 : -600;
      setAdditionalShotCost(additionalShotCost + cost);
    }
    if (option === "텀블러 지참 시 500원 할인") {
      setHasTumblerDiscount(isSelected);
    }
    if (isSelected) {
      setPersonalOptions([...personalOptions, option]);
    } else {
      setPersonalOptions(personalOptions.filter((item) => item !== option));
    }
  };

  const basePrice = additionalShotCost + parseInt(item.price, 10);
  const totalPrice = basePrice * quantity;
  const discount = (hasTumblerDiscount ? -500 : 0 ) * quantity;
  const finalPrice = totalPrice + discount;

  return (
    <>
      <Container>
        <Header />
        <MainContainer>
          <Main>
            <ProductInfo>
              <ProductImage src={item.image} alt={item.name} />
              <ProductTitle>{item.name}</ProductTitle>
            </ProductInfo>
            <Divider />
            <Options>
              <OptionGroup>
                <OptionTitle>
                  사이즈 <span>*필수</span>
                </OptionTitle>
                <Option>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="size"
                      value="Tall size 355ml"
                      checked={size === "Tall size 355ml"}
                      onChange={(e) => setSize(e.target.value)}
                    />
                    <Checkmark />
                    Tall size 355ml
                  </CustomCheckbox>
                </Option>
                <Option>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="size"
                      value="Grande size 473ml"
                      checked={size === "Grande size 473ml"}
                      onChange={(e) => setSize(e.target.value)}
                    />
                    <Checkmark />
                    Grande size 473ml
                  </CustomCheckbox>
                </Option>
                <Option>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="size"
                      value="Venti size 591ml"
                      checked={size === "Venti size 591ml"}
                      onChange={(e) => setSize(e.target.value)}
                    />
                    <Checkmark />
                    Venti size 591ml
                  </CustomCheckbox>
                </Option>
              </OptionGroup>
              <Divider />
              <OptionGroup>
                <OptionTitle>
                  HOT / ICE <span>*필수</span>
                </OptionTitle>
                <Option>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="temperature"
                      value="Hot"
                      checked={temperature === "Hot"}
                      onChange={(e) => setTemperature(e.target.value)}
                    />
                    <Checkmark />
                    Hot 뜨겁게
                  </CustomCheckbox>
                </Option>
                <Option>
                  <CustomCheckbox>
                    <RadioButton
                      type="radio"
                      name="temperature"
                      value="Ice"
                      checked={temperature === "Ice"}
                      onChange={(e) => setTemperature(e.target.value)}
                    />
                    <Checkmark />
                    Ice 차갑게
                  </CustomCheckbox>
                </Option>
              </OptionGroup>
              <Divider />
              <OptionGroup>
                <OptionTitle>퍼스널 옵션</OptionTitle>
                <OptionSubTitle>샷 선택</OptionSubTitle>
                <Option>
                  <CustomCheckbox>
                    <Checkbox
                      type="checkbox"
                      value="연하게"
                      onChange={(e) =>
                        handleOptionChange(e.target.value, e.target.checked)
                      }
                    />
                    <Checkmark />
                    연하게
                  </CustomCheckbox>
                </Option>
                <Option>
                  <CustomCheckbox>
                    <Checkbox
                      type="checkbox"
                      value="샷 추가 +500원"
                      onChange={(e) =>
                        handleOptionChange(e.target.value, e.target.checked)
                      }
                    />
                    <Checkmark />
                    샷 추가 +500원
                  </CustomCheckbox>
                </Option>
                <Option>
                  <CustomCheckbox>
                    <Checkbox
                      type="checkbox"
                      value="2샷 추가 +1,000원"
                      onChange={(e) =>
                        handleOptionChange(e.target.value, e.target.checked)
                      }
                    />
                    <Checkmark />
                    2샷 추가 +1,000원
                  </CustomCheckbox>
                </Option>
                <OptionSubTitle>당도 선택</OptionSubTitle>
                <Option>
                  <CustomCheckbox>
                    <Checkbox
                      type="checkbox"
                      value="연유 추가 +700원"
                      onChange={(e) =>
                        handleOptionChange(e.target.value, e.target.checked)
                      }
                    />
                    <Checkmark />
                    연유 추가 +700원
                  </CustomCheckbox>
                </Option>
                <Option>
                  <CustomCheckbox>
                    <Checkbox
                      type="checkbox"
                      value="샷 저당 스테비아 추가 +600원"
                      onChange={(e) =>
                        handleOptionChange(e.target.value, e.target.checked)
                      }
                    />
                    <Checkmark />
                    샷 저당 스테비아 추가 +600원
                  </CustomCheckbox>
                </Option>
              </OptionGroup>
            </Options>
            <Divider />
            <OptionGroup>
              <OptionTitle>텀블러 할인</OptionTitle>
              <Option>
                <CustomCheckbox>
                  <Checkbox
                    type="checkbox"
                    value="텀블러 지참 시 500원 할인"
                    onChange={(e) =>
                      handleOptionChange(e.target.value, e.target.checked)
                    }
                  />
                  <Checkmark />
                  텀블러 지참 시 500원 할인
                </CustomCheckbox>
              </Option>
            </OptionGroup>
            <Divider />
            <QuantityControl>
              <QuantityButton onClick={() => handleQuantityChange("decrement")}>
                -
              </QuantityButton>
              <Quantity>{quantity}</Quantity>
              <QuantityButton onClick={() => handleQuantityChange("increment")}>
                +
              </QuantityButton>
              <Price>{totalPrice.toLocaleString()}원</Price>
            </QuantityControl>
            <Divider />
            <Summary>
              <SummaryItem>
                <SummaryLabel>할인 금액</SummaryLabel>
                <SummaryValue negative={discount < 0}>
                  {discount.toLocaleString()}원
                </SummaryValue>
              </SummaryItem>
              <SummaryItem>
                <SummaryLabel>상품 금액</SummaryLabel>
                <SummaryValue>{finalPrice.toLocaleString()}원</SummaryValue>
              </SummaryItem>
            </Summary>
            <Actions>
              <CartButton>장바구니 담기</CartButton>
              <OrderButton>바로 주문</OrderButton>
            </Actions>
          </Main>
        </MainContainer>
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 0 1rem;
`;

const Main = styled.main`
  width: 100%;
  max-width: 480px;
  flex: 1;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-sizing: border-box;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  background-color: #f6f3f3;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #b5b6b5;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h2`
  font-size: 20px;
  color: #444;
  margin: 0;
`;

const Options = styled.div`
  margin-bottom: 1rem;
`;

const OptionGroup = styled.div`
  margin-bottom: 1rem;
`;

const OptionTitle = styled.h3`
  font-size: 18px;
  color: #444;
  font-weight: 600;
  letter-spacing: -0.96px;
  margin-bottom: 0.5rem;
  span {
    margin-left: 0.2rem;
    font-size: 0.65rem;
    color: #ca7070;
  }
`;

const OptionSubTitle = styled.h4`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: #595b59;
  margin-bottom: 0.5rem;
  letter-spacing: -0.64px;
`;

const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
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

const Divider = styled.div`
  background-color: #e7e7e7;
  border: 1px solid #e7e7e7;
  margin: 1rem 0;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #808180;
  border: none;
  border-radius: 50%;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #f3f3f3;
`;

const Quantity = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  color: #595b59;
  margin: 0 1rem;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #444;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const SummaryLabel = styled.div`
  font-size: 0.875rem;
  color: #444;
  font-weight: 600;
`;

const SummaryValue = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${({ negative }) => (negative ? "#ca7070" : "#444")};
  text-align: right;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartButton = styled.button`
  width: 48%;
  padding: 0.75rem;
  background-color: white;
  color: #467048;
  border: 2px solid #a9b782;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const OrderButton = styled.button`
  width: 48%;
  padding: 0.75rem;
  background-color: #467048;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export default PaymentPage;
