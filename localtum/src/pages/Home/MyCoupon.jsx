import React from 'react';
import styled from 'styled-components';
import mainlogo from '../../assets/logos/mainlogo.png';
import backIcon from '../../assets/icons/backIcon.png';
import couponbase from '../../assets/images/couponbase.png';
import coupondone from '../../assets/images/coupondone.png';
import { useNavigate } from 'react-router-dom';

const MyCoupon = () => {
    const navigate = useNavigate();
    const coupons = [
        { title: "'멋쟁이사자' 음료 2,000원 할인 쿠폰", expiry: "2024년 8월 7일까지", used: false },
        { title: "'달달해' 음료 한 잔 무료 쿠폰", expiry: "2024년 9월 23일까지", used: false },
        { title: "'라떼는' 음료 2,000원 할인 쿠폰", expiry: "2024년 8월 16일까지", used: true }
    ];

    return (
        <StyledContainer>
            <StyledHeader>
                <Logo src={mainlogo} alt="Logo" />
            </StyledHeader>
            <BackButtonContainer>
                <BackButton onClick={() => navigate(-1)}>
                    <BackIcon src={backIcon} alt="<" />
                    <BackText>뒤로가기</BackText>
                </BackButton>
            </BackButtonContainer>
            <TitleContainer>
                <Title>내 쿠폰</Title>
            </TitleContainer>
            <CouponList>
                {coupons.map((coupon, index) => (
                    <CouponItem key={index}>
                        <CouponImage src={coupon.used ? coupondone : couponbase} alt="coupon" />
                        <CouponTextContainer>
                            <CouponTitle>{coupon.title}</CouponTitle>
                            <CouponExpiry>유효기간: {coupon.expiry}</CouponExpiry>
                        </CouponTextContainer>
                    </CouponItem>
                ))}
            </CouponList>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    padding: 2rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem 0rem 2rem;

    @media (max-width: 768px) {
        padding: 2rem 1rem 0 1rem;
    }
`;

const BackButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 15rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        padding-left: 1rem;
    }

    @media (max-width: 480px) {
        padding-left: 1rem;
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

const Logo = styled.img`
    height: 4rem;

    @media (max-width: 768px) {
        height: 3rem;
    }

    @media (max-width: 480px) {
        height: 2.5rem;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
    }

    @media (max-width: 480px) {
        margin-bottom: 1rem;
    }
`;

const Title = styled.h1`
    font-size: 1.5rem;
    color: #444;
    font-weight: 700;
    position: relative;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

const CouponList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        gap: 1rem;
    }

    @media (max-width: 480px) {
        gap: 0rem;
    }
`;

const CouponItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 90%;
    max-width: 700px;
    @media (max-width: 768px) {
        height: 120px;
        margin: 1rem 0;
    }

    @media (max-width: 480px) {
        height: 100px;
        margin: 0;

    }
`;

const CouponImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

const CouponTextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 45px;
    transform: translateY(-50%);
    text-align: left;
    color: black;

    @media (max-width: 768px) {
        left: 40px;
    }

    @media (max-width: 480px) {
        left: 25px;
    }
`;

const CouponTitle = styled.h2`
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    color: #444;

    @media (max-width: 768px) {
        font-size: 0.875rem;
    }

    @media (max-width: 480px) {
        font-size: 0.75rem;
    }
`;

const CouponExpiry = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    
    margin: 0;
    color: #808180;

    @media (max-width: 768px) {
        font-size: 0.75rem;
    }

    @media (max-width: 480px) {
        font-size: 0.625rem;
    }
`;

export default MyCoupon;
