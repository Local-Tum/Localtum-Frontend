import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mainlogo from "../../assets/logos/mainlogo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <BackButton onClick={() => navigate(-1)}>
        <ArrowIcon>&lt;</ArrowIcon> 뒤로가기
      </BackButton>
      <LogoContainer>
        <Logo src={mainlogo} alt="LocalTum Logo" />
      </LogoContainer>
      <DummyButton />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  position: relative;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #467048;
  font-size: 1rem;
  cursor: pointer;
  position: absolute;
  left: 0.5rem;
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  width: 20%;
  max-width: 150px;
`;

const DummyButton = styled.div`
  width: 10px;
`;

export default Header;
