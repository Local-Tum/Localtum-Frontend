import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mainlogo from '../../assets/logos/mainlogo.png';
import backIcon from '../../assets/icons/backIcon.png';
import alarmCircle from '../../assets/icons/alarmCircle.png';
import { useNavigate } from 'react-router-dom';

const Alarm = () => {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
        setNotifications(storedNotifications);
    }, []);

    const handleBackClick = () => {
        setNotifications([]);
        localStorage.setItem('notifications', JSON.stringify([]));
        localStorage.setItem('notificationCount', JSON.stringify(0));
        navigate(-1);
    };

    return (
        <StyledContainer>
            <StyledHeader>
                <Logo src={mainlogo} alt="Logo" />
            </StyledHeader>
            <BackButtonContainer>
                <BackButton onClick={handleBackClick}>
                    <BackIcon src={backIcon} alt="<" />
                    <BackText>뒤로가기</BackText>
                </BackButton>
            </BackButtonContainer>
            <TitleContainer>
                <Title>알림</Title>
                <AlarmCircle>
                    <AlarmText>{notifications.length}</AlarmText>
                </AlarmCircle>
            </TitleContainer>
            <NotificationList>
                {notifications.map((notification, index) => (
                    <Notification key={index}>
                        <CafeName>{notification.cafeName} : </CafeName>{notification.message}
                    </Notification>
                ))}
            </NotificationList>
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

const AlarmCircle = styled.div`
    position: absolute;
    top: 3px;
    left: 51%;
    transform: translateX(50%);
    width: 1.5rem;
    height: 1.5rem;
    background: url(${alarmCircle}) no-repeat center center;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.1rem;

    @media (max-width: 768px) {
        top: 0px;
        left: 51%;
        width: 1.2rem;
        height: 1.2rem;
    }

    @media (max-width: 480px) {
        top: 1px;
        left: 52%;
        width: 1rem;
        height: 1rem;
    }
`;

const AlarmText = styled.span`
    font-size: 1rem;
    color: #ca7070;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 0.875rem;
    }

    @media (max-width: 480px) {
        font-size: 0.75rem;
    }
`;

const NotificationList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
        gap: 1rem;
    }

    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

const Notification = styled.div`
    background-color: #fff;
    border-radius: 30px;
    padding: 1rem 2rem;
    width: 40vw;
    box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.10), 3px 3px 10px 0px rgba(0, 0, 0, 0.10);
    font-size: 1rem;
    font-weight: 400;
    color: #282828;

    @media (max-width: 768px) {
        width: 60vw;
        padding: 0.75rem 1.5rem;
        font-size: 0.875rem;
        box-shadow: -1px -1px 5px 0px rgba(0, 0, 0, 0.10), 1px 1px 5px 0px rgba(0, 0, 0, 0.10);
    }

    @media (max-width: 480px) {
        width: 70vw;
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
        box-shadow: -1px -1px 5px 0px rgba(0, 0, 0, 0.10), 1px 1px 5px 0px rgba(0, 0, 0, 0.10);
    }
`;

const CafeName = styled.span`
    font-weight: 700;
`;

export default Alarm;
