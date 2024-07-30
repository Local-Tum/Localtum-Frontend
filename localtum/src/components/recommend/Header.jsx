import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mainlogo from '../../assets/logos/mainlogo.png';
import backIcon from '../../assets/icons/backIcon.png';

const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <StyledHeader>
            <LogoDiv>
                <Logo src={mainlogo} alt="Logo" onClick={handleLogoClick} />
            </LogoDiv>
            <BackButtonContainer>
                <BackButton onClick={() => navigate(-1)}>
                    <BackIcon src={backIcon} alt="<" />
                    <BackText>뒤로가기</BackText>
                </BackButton>
            </BackButtonContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 3rem 2rem 0 2rem;
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

const BackButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 15rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        padding-left: 1rem;
    }

    @media (max-width: 480px) {
        padding-left: 0rem;
    }
`;

const BackButton = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: #808180;

    @media (max-width: 768px) {
        font-size: 0.875rem;
    }

    @media (max-width: 480px) {
        font-size: 0.75rem;
    }
`;

const BackIcon = styled.img`
    height: 1.5rem;
    margin-right: 0.2rem;

    @media (max-width: 768px) {
        height: 1.2rem;
    }

    @media (max-width: 480px) {
        height: 1rem;
    }
`;

const BackText = styled.span`
    line-height: 1.5rem;
    color: #808180;
    font-weight: 600;

    @media (max-width: 768px) {
        line-height: 1.2rem;
    }

    @media (max-width: 480px) {
        line-height: 1rem;
    }
`;


export default Header;
