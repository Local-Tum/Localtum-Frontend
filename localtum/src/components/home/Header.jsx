import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mainlogo from '../../assets/logos/mainlogo.png';
import bar from '../../assets/icons/bar.png';
import membershipIcon from '../../assets/icons/membershipIcon.png';
import mycouponIcon from '../../assets/icons/mycouponIcon.png';
import alarmIcon from '../../assets/icons/alarmIcon.png';
import MembershipModal from './MembershipModal';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notificationCount, setNotificationCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn');
        if (loginStatus !== null) {
            try {
                setIsLoggedIn(JSON.parse(loginStatus));
            } catch (e) {
                console.error('Error parsing login status from localStorage', e);
            }
        }

        const storedNotificationCount = JSON.parse(localStorage.getItem('notificationCount')) || 0;
        setNotificationCount(storedNotificationCount);
    }, []);

    const handleMembershipClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCouponClick = () => {
        window.location.href = '/mycoupon';
    };

    const handleAlarmClick = () => {
        window.location.href = '/alarm';
    };

    const handleLoginClick = () => {
        navigate('/signin');
    };

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return (
        <StyledHeader>
            <LogoDiv>
                <Logo src={mainlogo} alt="Logo" />
            </LogoDiv>
            <ButtonBox>
                {isLoggedIn ? (
                    <>
                        <IconButton src={membershipIcon} alt="멤버십" onClick={handleMembershipClick} />
                        <IconButton src={mycouponIcon} alt="내 쿠폰" onClick={handleCouponClick} />
                        <AlarmContainer onClick={handleAlarmClick}>
                            <AlarmIconButton src={alarmIcon} alt="알람" />
                            {notificationCount > 0 && (
                                <NotificationBadge>{notificationCount}</NotificationBadge>
                            )}
                        </AlarmContainer>
                    </>
                ) : (
                    <>
                        <Button onClick={handleLoginClick}>로그인</Button>
                        <Bar src={bar} alt="|" />
                        <Button onClick={handleSignUpClick}>회원가입</Button>
                    </>
                )}
            </ButtonBox>
            <MembershipModal isOpen={isModalOpen} onClose={handleCloseModal} />
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

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: end;
  margin-right: 15%;
  color: #808180;

  @media (max-width: 768px) {
    margin-right: 5%;
  }

  @media (max-width: 480px) {
    margin-right: 0%;
  }
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

const IconButton = styled.img`
  height: 2rem;
  cursor: pointer;
  margin-right: 0.5rem;
`;

const AlarmContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 0.2rem;
`;

const AlarmIconButton = styled(IconButton)`
  height: 2.2rem;
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -8px;
  right: 2px;
  background-color: #e7e7e7;
  color: #808180;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
`;

export default Header;
