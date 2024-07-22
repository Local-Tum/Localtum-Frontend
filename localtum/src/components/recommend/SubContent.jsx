import React from 'react';
import styled from 'styled-components';
import feelingIconColor from '../../assets/icons/feelingIconColor.png';
import flavorIconColor from '../../assets/icons/flavorIconColor.png';
import { useNavigate } from 'react-router-dom';

const SubContent = ({ type }) => {
    const navigate = useNavigate();

    const feelingOptions = [
        "우울해요", "기분이 좋아요", "스트레스 받아요", 
        "피곤해요", "편안하고 싶어요", "집중하고 싶어요"
    ];

    const flavorOptions = [
        "달콤한 맛", "쓴 맛", "상큼한 맛", 
        "고소한 맛", "시원한 맛", "따뜻한 맛"
    ];

    const options = type === 'feeling' ? feelingOptions : flavorOptions;

    return (
        <Container>
            <Header>
                <Icon src={type === 'feeling' ? feelingIconColor : flavorIconColor} alt="Icon" />
                <Title>{type === 'feeling' ? '기분' : '맛'}</Title>
            </Header>
            <OptionsContainer>
                {options.map((option, index) => (
                    <Option key={index}>{option}</Option>
                ))}
            </OptionsContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #A9B782;
    box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.10), 3px 3px 10px 0px rgba(0, 0, 0, 0.10);
    border-radius: 20px;
    padding: 1rem 2rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 40%;
    height: 11vh;
    max-width: 600px;
    text-align: center;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

const Icon = styled.img`
    width: 50px;
    height: 50px;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    color: #fff;
    margin: 0.3rem;
`;

const OptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 0;
    justify-items: center;
    width: 100%;
    max-width: 600px;
    color: #595b59;
    font-weight: 500;
`;

const Option = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f3f3;
    border: 1px solid #E7E7E7;
    border-radius: 30px;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
    height: 2rem;
    max-width: 12rem;
    font-weight: 700;
    letter-spacing: -0.64px;
    

    @media (max-width: 768px) {
        width: 75%;
    }

    &:hover {
        background-color: #81694e;
        color: #fff;
    }
`;

export default SubContent;
