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
        happy: {
            title: "기분이 좋아요",
            subtitle: `"상쾌하고 활기찬 음료를 추천해 드릴게요!"`,
            menu: [
                {
                    name: "아이스 그린티 라떼",
                    description: "상쾌한 그린티와 시원한 라떼의 조화로 활기를 더해줍니다.",
                    image: chocolateLatte,
                },
                {
                    name: "패션후르츠 스무디",
                    description: "열대 과일의 상큼한 맛으로 기분을 더 좋게 만들어줍니다.",
                    image: caramelMacchiato,
                },
                {
                    name: "민트 모히토",
                    description: "상쾌한 민트와 라임의 조화로 활력을 더해줍니다.",
                    image: strawberryMilkShake,
                }
            ]
        },
        stressed : {
            title: "스트레스 받아요",
            subtitle: `"진정 효과가 있는 음료를 추천해 드릴게요!"`,
            menu: [
                {
                    name: "레몬 진저 티",
                    description: "레몬과 생강의 조화로 스트레스를 완화하고 몸을 진정시킵니다.",
                    image: chocolateLatte,
                },
                {
                    name: "페퍼민트 차",
                    description: "페퍼민트의 상쾌함과 진정 효과로 마음을 편안하게 해줍니다.",
                    image: caramelMacchiato,
                },
                {
                    name: "바닐라 카모마일 티",
                    description: "바닐라와 카모마일의 조화로 긴장을 완화하고 마음을 진정시킵니다.",
                    image: strawberryMilkShake,
                }
            ]
        },
        tired : {
            title: "피곤해요",
            subtitle: `"에너지를 충전해주는 음료를 추천해 드릴게요!"`,
            menu: [
                {
                    name: "에스프레소",
                    description: "강한 커피 맛으로 즉각적인 에너지 충전을 도와줍니다.",
                    image: chocolateLatte,
                },
                {
                    name: "아이스 아메리카노",
                    description: "시원한 커피로 피로를 날려줍니다.",
                    image: caramelMacchiato,
                },
                {
                    name: "홍삼 라떼",
                    description: "홍삼의 활력 효과와 커피의 조화로 에너지를 보충해줍니다.",
                    image: strawberryMilkShake,
                }
            ]
        },
        relaxed : {
            title: "편안해요",
            subtitle: `"편안함을 더해주는 음료를 추천해 드릴게요!"`,
            menu: [
                {
                    name: "바닐라 밀크 티",
                    description: "부드러운 바닐라와 밀크티의 조화로 편안함을 더해줍니다.",
                    image: chocolateLatte,
                },
                {
                    name: "오레오 쉐이크",
                    description: "오레오 쿠키의 달콤함과 부드러운 쉐이크로 편안한 기분을 유지시켜줍니다.",
                    image: caramelMacchiato,
                },
                {
                    name: "헤이즐넛 라떼",
                    description: "고소한 헤이즐넛과 부드러운 라떼의 조화로 편안한 느낌을 더해줍니다.",
                    image: strawberryMilkShake,
                }
            ]
        },
        focused : {
            title: "집중하고 싶어요",
            subtitle: `"집중력을 높여주는 음료를 추천해 드릴게요!"`,
            menu: [
                {
                    name: "마차 라떼",
                    description: "녹차의 카페인과 부드러운 맛으로 집중력을 높여줍니다.",
                    image: chocolateLatte,
                },
                {
                    name: "블랙커피",
                    description: "강렬한 커피 맛으로 집중력을 극대화합니다.",
                    image: caramelMacchiato,
                },
                {
                    name: "로즈마리 티",
                    description: "로즈마리의 향긋함과 집중력 향상 효과로 도움이 됩니다.",
                    image: strawberryMilkShake,
                }
            ]
        },
        sweet : {
            title: "달콤한 맛",
            subtitle: `"다양한 종류의 라떼나 스무디 음료를 추천해 드릴게요!"`,
            menu: [
                {
                    name: "카라멜 마키아토",
                    description: "카라멜 시럽과 우유, 에스프레소의 달콤한 조화.",
                    image: chocolateLatte,
                },
                {
                    name: "딸기 스무디",
                    description: "신선한 딸기와 요거트의 달콤한 조합.",
                    image: caramelMacchiato,
                },
                {
                    name: "초콜릿 라떼",
                    description: "진한 초콜릿과 우유가 어우러진 달콤한 음료.",
                    image: strawberryMilkShake,
                }
            ]
        },
        bitter : {
            title: "쓴 맛",
            subtitle: `"커피 본연의 맛을 즐길 수 있는 음료를 추천해 드릴게요!"`,
            menu: [
                {
                    name: "에스프레소",
                    description: "진하고 강렬한 커피의 쓴 맛.",
                    image: chocolateLatte,
                },
                {
                    name: "아메리카노",
                    description: "에스프레소에 물을 더한 깔끔하고 쓴 맛.",
                    image: caramelMacchiato,
                },
                {
                    name: "롱블랙",
                    description: "아메리카노보다 진한 커피 본연의 맛을 즐길 수 있는 음료.",
                    image: strawberryMilkShake,
                }
            ]
        },
        refreshing : {
            title: "상큼한 맛",
            subtitle: `"과일 베이스의 상큼한 음료를 추천해 드릴게요!"`,
            menu: [
                {
                    name: "자몽 에이드",
                    description: "자몽의 상큼함과 탄산의 조화.",
                    image: chocolateLatte,
                },
                {
                    name: "레몬에이드",
                    description: "신선한 레몬의 상큼한 맛과 시원한 탄산.",
                    image: caramelMacchiato,
                },
                {
                    name: "라임 모히토",
                    description: "라임과 민트의 상큼함이 어우러진 음료.",
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
        },
        cool: {
            title: "시원한 맛",
            subtitle: `"시원하고 청량감을 주는 음료를 추천해드릴게요!"`,
            menu: [
                {
                    name: "아이스 민트티",
                    description: "민트의 상쾌함과 차가운 얼음의 조화.",
                    image: hazelnutLatte,
                },
                {
                    name: "블루 레모네이드",
                    description: "블루베리와 레몬의 시원하고 상큼한 조합.",
                    image: almondMilkLatte,
                },
                {
                    name: "청포도 에이드",
                    description: "청포도의 달콤함과 시원한 탄산의 조화.",
                    image: peanutButterShake,
                }
            ]
        },
        warm: {
            title: "따뜻한 맛",
            subtitle: `"따뜻함을 느낄 수 있는 음료를 추천해드릴게요!"`,
            menu: [
                {
                    name: "시나몬 차이 라떼",
                    description: "시나몬의 따뜻한 향과 차이 티의 조화.",
                    image: hazelnutLatte,
                },
                {
                    name: "진저 허니 티",
                    description: "생강의 따뜻함과 꿀의 달콤함이 어우러진 차.",
                    image: almondMilkLatte,
                },
                {
                    name: "핫 코코아",
                    description: "부드럽고 따뜻한 초콜릿 음료.",
                    image: peanutButterShake,
                }
            ]
        },
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
