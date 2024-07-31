import React from "react";
import styled from "styled-components";
import mainlogo from "../../assets/logos/mainlogo.png";
import backIcon from "../../assets/icons/backIcon.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <BackButton onClick={() => navigate(-1)}>
        <BackIcon src={backIcon} alt="back" />
        <BackText>뒤로가기</BackText>
      </BackButton>
      <Logo src={mainlogo} alt="Logo" />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
`;

const Logo = styled.img`
  height: 40px;
  object-fit: contain;
`;

const BackButton = styled.div`
  position: absolute;
  left: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
`;

const BackText = styled.span`
  font-size: 1rem;
  color: #707070;
`;

export default Header;
