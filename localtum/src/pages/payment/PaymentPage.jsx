import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/cafedetailpage/Header";
import GlobalStyles from "../../styles/globalstyles";

const PaymentPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Grande size 473ml");
  const [temperature, setTemperature] = useState("Hot");
  const [personalOptions, setPersonalOptions] = useState([]);
  const [discount, setDiscount] = useState(500);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) setQuantity(quantity - 1);
    }
  };

  const handleOptionChange = (option, isSelected) => {
    if (isSelected) {
      setPersonalOptions([...personalOptions, option]);
    } else {
      setPersonalOptions(personalOptions.filter((item) => item !== option));
    }
  };

  const totalPrice = 3000 * quantity;
  const finalPrice = totalPrice - discount;

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main>
          <ProductInfo>
            <ImagePlaceholder>상품 이미지</ImagePlaceholder>
            <ProductTitle>아메리카노</ProductTitle>
            <ProductDesc>
              에스프레소의 은은한 커피 부드럽고 풍부한 바디감을 느낄 수 있는
              아메리카노
            </ProductDesc>
          </ProductInfo>
          <Divider />
          <Options>
            <OptionGroup>
              <OptionTitle>
                사이즈 <span>*필수</span>
              </OptionTitle>
              <Option>
                <RadioButton
                  type="radio"
                  name="size"
                  value="Tall size 355ml"
                  checked={size === "Tall size 355ml"}
                  onChange={(e) => setSize(e.target.value)}
                />
                Tall size 355ml
              </Option>
              <Option>
                <RadioButton
                  type="radio"
                  name="size"
                  value="Grande size 473ml"
                  checked={size === "Grande size 473ml"}
                  onChange={(e) => setSize(e.target.value)}
                />
                Grande size 473ml
              </Option>
              <Option>
                <RadioButton
                  type="radio"
                  name="size"
                  value="Venti size 591ml"
                  checked={size === "Venti size 591ml"}
                  onChange={(e) => setSize(e.target.value)}
                />
                Venti size 591ml
              </Option>
            </OptionGroup>
            <Divider />
            <OptionGroup>
              <OptionTitle>
                HOT / ICE <span>*필수</span>
              </OptionTitle>
              <Option>
                <RadioButton
                  type="radio"
                  name="temperature"
                  value="Hot"
                  checked={temperature === "Hot"}
                  onChange={(e) => setTemperature(e.target.value)}
                />
                Hot
              </Option>
              <Option>
                <RadioButton
                  type="radio"
                  name="temperature"
                  value="Ice"
                  checked={temperature === "Ice"}
                  onChange={(e) => setTemperature(e.target.value)}
                />
                Ice
              </Option>
            </OptionGroup>
            <Divider />
            <OptionGroup>
              <OptionTitle>퍼스널 옵션</OptionTitle>
              <OptionSubTitle>샷 선택</OptionSubTitle>
              <Option>
                <Checkbox
                  type="checkbox"
                  value="연하게"
                  onChange={(e) =>
                    handleOptionChange(e.target.value, e.target.checked)
                  }
                />
                연하게
              </Option>
              <Option>
                <Checkbox
                  type="checkbox"
                  value="샷 추가 +500원"
                  onChange={(e) =>
                    handleOptionChange(e.target.value, e.target.checked)
                  }
                />
                샷 추가 +500원
              </Option>
              <Option>
                <Checkbox
                  type="checkbox"
                  value="2샷 추가 +1,000원"
                  onChange={(e) =>
                    handleOptionChange(e.target.value, e.target.checked)
                  }
                />
                2샷 추가 +1,000원
              </Option>
              <OptionSubTitle>당도 선택</OptionSubTitle>
              <Option>
                <Checkbox
                  type="checkbox"
                  value="연유 추가 +700원"
                  onChange={(e) =>
                    handleOptionChange(e.target.value, e.target.checked)
                  }
                />
                연유 추가 +700원
              </Option>
              <Option>
                <Checkbox
                  type="checkbox"
                  value="샷 저당 스테비아 추가 +600원"
                  onChange={(e) =>
                    handleOptionChange(e.target.value, e.target.checked)
                  }
                />
                샷 저당 스테비아 추가 +600원
              </Option>
            </OptionGroup>
          </Options>
          <Divider />
          <OptionGroup>
            <OptionTitle>텀블러 할인</OptionTitle>
            <Option>
              <Checkbox
                type="checkbox"
                value="텀블러 지참 시 500원 할인"
                onChange={(e) =>
                  handleOptionChange(e.target.value, e.target.checked)
                }
              />
              텀블러 지참 시 500원 할인
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
            <Price>{totalPrice}원</Price>
          </QuantityControl>
          <Summary>
            <SummaryItem>
              <SummaryLabel>할인 금액</SummaryLabel>
              <SummaryValue>-{discount}원</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>상품 금액</SummaryLabel>
              <SummaryValue>{finalPrice}원</SummaryValue>
            </SummaryItem>
          </Summary>
          <Actions>
            <CartButton>장바구니 담기</CartButton>
            <OrderButton>바로 주문</OrderButton>
          </Actions>
        </Main>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const ImagePlaceholder = styled.div`
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
  font-size: 1.5rem;
  color: #444;
  margin: 0;
`;

const ProductDesc = styled.p`
  font-size: 0.9rem;
  color: #888;
  text-align: center;
  margin: 0.5rem 0;
`;

const Options = styled.div`
  margin-bottom: 1rem;
`;

const OptionGroup = styled.div`
  margin-bottom: 1rem;
`;

const OptionTitle = styled.h3`
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
  span {
    font-size: 0.875rem;
    color: red;
  }
`;

const OptionSubTitle = styled.h4`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.3rem;
  margin-left: 1rem;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

const RadioButton = styled.input`
  margin-right: 0.5rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Divider = styled.div`
  background-color: #e7e7e7;
  border: 1px solid #e7e7e7;
  margin: 1rem 0;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #f6f3f3;
  border: none;
  border-radius: 50%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Quantity = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: #444;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #444;
  margin-left: 0.5rem;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
`;

const SummaryLabel = styled.div`
  font-size: 0.875rem;
  color: #444;
`;

const SummaryValue = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: red;
  text-align: right;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CartButton = styled.button`
  width: 45%;
  padding: 0.75rem;
  background-color: white;
  color: #467048;
  border: 2px solid #467048;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const OrderButton = styled.button`
  width: 45%;
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
