import React from "react";
import styled from "styled-components";

const CartButton = () => {
  return <Button>장바구니 담기</Button>;
};

const Button = styled.button`
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

export default CartButton;
