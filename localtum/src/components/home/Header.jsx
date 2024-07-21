import React from 'react';
import styled from 'styled-components';
import mainlogo from '../../assets/logos/mainlogo.png';
import bar from '../../assets/icons/bar.png';

const Header = () => {
    return (
        <StyledHeader>
            <LogoDiv>
                <Logo src={mainlogo} alt="Logo" />
            </LogoDiv>
            <ButtonBox>
                <Button>로그인</Button>
                <Bar src={bar} alt="|" />
                <Button>회원가입</Button>
            </ButtonBox>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 2rem;
    justify-content: center;
    align-items: center;
`;

const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`;

const Logo = styled.img`
    height: 4rem;
    justify-content: center;
    align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-right: 15%;
  color: #808180;
`;

const Bar = styled.img`
  height: 1rem;
`;

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 0.625rem;
  color: #808180;
  background-color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default Header;
