import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/recommend/Header';
import line from '../../assets/icons/line.png';
import dot from '../../assets/icons/dot.png';
import chocolateLatte from '../../assets/images/chocolateLatte.png';
import caramelMacchiato from '../../assets/images/caramelMacchiato.png';
import strawberryMilkShake from '../../assets/images/strawberryMilkShake.png';
import hazelnutLatte from '../../assets/images/hazelnutLatte.png';
import almondMilkLatte from '../../assets/images/almondMilkLatte.png';
import peanutButterShake from '../../assets/images/peanutButterShake.png';

const RecommendDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { option } = location.state;

    const data = {
        depressed: {
            title: "우울해요",
            subtitle: `"달콤하고 위로가 되는 음료를 추천해 드릴게요!"`,
            menu: [
                {
                    name: "초코 라떼",
                    description: "진한 초콜릿 맛으로 기분을 달래줍니다.",
                    image: chocolateLatte,
                },
                {
                    name: "카라멜 마끼아토",
                    description: "달콤한 카라멜과 커피의 조화로 기분 전환에 도움을 줍니다.",
                    image: caramelMacchiato,
                },
                {
                    name: "딸기 밀크 쉐이크",
                    description: "딸기의 상큼함과 달콤함으로 우울한 기분을 달래줍니다.",
                    image: strawberryMilkShake,
                }
            ]
        },
        nutty: {
            title: "고소한 맛",
            subtitle: `"고소한 맛을 느낄 수 있는 음료를 추천해드릴게요!"`,
            menu: [
                {
                    name: "헤이즐넛 라떼",
                    description: "고소한 헤이즐넛 시럽과 부드러운 라떼의 조화.",
                    image: hazelnutLatte,
                },
                {
                    name: "아몬드 밀크 라떼",
                    description: "아몬드 밀크의 고소함과 에스프레소의 조화.",
                    image: almondMilkLatte,
                },
                {
                    name: "피넛버터 쉐이크",
                    description: "피넛버터의 고소함과 부드러운 쉐이크의 조화.",
                    image: peanutButterShake,
                }
            ]
        }
    };

    const optionData = data[option];

    return (
        <Container>
            <Header />
            <TitleContainer>
                <Title>{optionData.title}</Title>
            </TitleContainer>
            <Line src={line} alt="line" />
            <SubTitle>{optionData.subtitle}</SubTitle>
            <MenuContainer>
                {optionData.menu.map((item, index) => (
                    <React.Fragment key={index}>
                        <MenuItem>
                            <MenuImage src={item.image} alt={item.name} />
                            <MenuName>{item.name}</MenuName>
                            <MenuDescription>{item.description}</MenuDescription>
                            <MenuLink onClick={() => navigate('/recommend/cafe', { state: { item: item.name } })}>
                                <span><strong>'{item.name}'</strong> 판매하는 카페 →</span>
                            </MenuLink>
                        </MenuItem>
                        {index < optionData.menu.length - 1 && <Dot src={dot} alt="dot" />}
                    </React.Fragment>
                ))}
            </MenuContainer>
            <HomeButton onClick={() => navigate('/')}>홈으로 돌아가기</HomeButton>
        </Container>
    );
};

const Container = styled.div`
    padding: 2rem;
    text-align: center;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;

    @media (max-width: 768px) {
        height: 3rem;
    }
`;

const Line = styled.img`
    width: 1rem;

    @media (max-width: 768px) {
        width: 0.8rem;
    }
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.96px;
    width: 30vw;
    color: #81694e;
    border: 2px solid #81694E;
    border-radius: 30px;
    padding: 0.5rem 2rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        width: 60vw;
    }
`;

const SubTitle = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    color: #444;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
        font-size: 0.9rem;
        margin-bottom: 2rem;
    }
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const MenuImage = styled.img`
    width: 150px;
    height: auto;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        width: 100px;
    }
`;

const MenuName = styled.h3`
    font-size: 1.25rem;
    color: #444;
    margin-bottom: 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const MenuDescription = styled.p`
    font-size: 1rem;
    color: #808180;
    margin-top: 0.3rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

const MenuLink = styled.div`
    font-size: 1rem;
    color: #808180;
    text-decoration: none;
    border-radius: 16px;
    width: 30vw;
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.10), 3px 3px 10px 0px rgba(0, 0, 0, 0.10);
    cursor: pointer;

    @media (max-width: 768px) {
        width: 60vw;
        height: 5vh;
        font-size: 0.7rem;
    }

    &:hover {
        background-color: #81694e;
        color: #fff;
    }
`;

const Dot = styled.img`
    width: 20px;
    height: 20px;
    margin: 2rem auto;

    @media (max-width: 768px) {
        width: 15px;
        height: 15px;
        margin: 1rem auto;
    }
`;

const HomeButton = styled.button`
    margin-top: 6rem;
    padding: 1rem 2rem;
    background-color: #A9B782;
    color: #fff;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1rem;
    width: 30vw;

    @media (max-width: 768px) {
        width: 60vw;
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
    }
`;

export default RecommendDetail;
