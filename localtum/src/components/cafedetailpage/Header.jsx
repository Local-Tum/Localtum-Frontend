import React from "react";
import styled from "styled-components";
import LocalTumLogo from "../../assets/LocalTumLogo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <BackButton>뒤로가기</BackButton>
      <LogoContainer>
        <Logo src={LocalTumLogo} alt="LocalTum Logo" />
      </LogoContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #467048;
  font-size: 1rem;
  cursor: pointer;
  flex-shrink: 0;
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

export default Header;
