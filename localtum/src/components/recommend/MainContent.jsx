import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import feelingIcon from '../../assets/icons/feelingIcon.png';
import feelingIconColor from '../../assets/icons/feelingIconColor.png';
import flavorIcon from '../../assets/icons/flavorIcon.png';
import flavorIconColor from '../../assets/icons/flavorIconColor.png';

const MainContent = () => {
    const navigate = useNavigate();

    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <Container>
            <Card onClick={() => handleCardClick('/recommend/feeling')}>
                <IconContainer>
                    <Icon src={feelingIcon} alt="기분" className="default-icon" />
                    <Icon src={feelingIconColor} alt="기분 컬러" className="color-icon" />
                </IconContainer>
                <TextContainer>
                    <Title>기분</Title>
                    <Description className="text">
                        <strong>기분 키워드</strong>에 맞춰<br />
                        메뉴를 추천해 드려요!
                    </Description>
                </TextContainer>
            </Card>
            <Card onClick={() => handleCardClick('/recommend/flavor')}>
                <IconContainer>
                    <Icon src={flavorIcon} alt="맛" className="default-icon" />
                    <Icon src={flavorIconColor} alt="맛 컬러" className="color-icon" />
                </IconContainer>
                <TextContainer>
                    <Title>맛</Title>
                    <Description className="text">
                        <strong>맛 키워드</strong>에 맞춰<br />
                        메뉴를 추천해 드려요!
                    </Description>
                </TextContainer>
            </Card>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 600px;
    padding: 2rem;
    border-radius: 20px;
    background-color: #fff;
    color: #444;
    font-weight: 800;
    box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.12), 3px 3px 10px 0px rgba(0, 0, 0, 0.12);
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #A9B782;
        color: #fff;

        .text {
            color: #fff;
        }

        .default-icon {
            display: none;
        }

        .color-icon {
            display: block;
        }
    }
`;

const IconContainer = styled.div`
    position: relative;
    width: 50px;
    height: 50px;

    .color-icon {
        position: absolute;
        top: 0;
        left: 0;
        display: none;
    }
`;

const Icon = styled.img`
    width: 50px;
    height: 50px;
    transition: opacity 0.3s;
`;

const TextContainer = styled.div`
    text-align: center;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

const Description = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: #595b59;
    strong {
        font-weight: 800;
    }
`;

export default MainContent;
