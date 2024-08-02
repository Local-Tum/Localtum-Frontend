import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import openIcon from '../../assets/icons/openIcon.png';
import closedIcon from '../../assets/icons/closedIcon.png';
import favoriteGray from '../../assets/icons/favoriteGray.png';
import favoriteGrayOff from '../../assets/icons/favoriteGrayOff.png';
import line from '../../assets/icons/line2.png';
import { addBookmark, deleteBookmark, getBookmarks } from '../../apis/api/favorites'; // API 함수 임포트

const CafeItem = ({ cafe }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [status, setStatus] = useState('closed');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFavoriteStatus = async () => {
            try {
                const response = await getBookmarks();
                if (response.status === 200) {
                    const favoriteCafes = response.data.data;
                    const isFavoriteCafe = favoriteCafes.some(item => item.cafeName === cafe.name);
                    setIsFavorite(isFavoriteCafe);
                } else {
                    console.error('Failed to fetch favorite cafes:', response);
                }
            } catch (error) {
                console.error('Failed to fetch favorite cafes:', error);
            }
        };

        fetchFavoriteStatus();

        const cafeStatus = getCurrentCafeStatus(cafe.hours);
        setStatus(cafeStatus);
    }, [cafe.name, cafe.id, cafe.hours]);

    const getCurrentCafeStatus = (hours) => {
        const now = new Date();
        const day = now.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
        const dayMap = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        const currentDayKey = dayMap[day];
        const currentDayHours = hours ? hours[currentDayKey] : null;

        if (!currentDayHours) {
            return 'closed';
        }

        const openTime = new Date(now);
        const closeTime = new Date(now);
        const [openHour, openMinute] = currentDayHours.open.split(':');
        const [closeHour, closeMinute] = currentDayHours.close.split(':');

        openTime.setHours(openHour, openMinute);
        closeTime.setHours(closeHour, closeMinute);

        return now >= openTime && now <= closeTime ? 'open' : 'closed';
    };

    const toggleFavorite = async () => {
        console.log('Toggling favorite for:', cafe.name); // 데이터 확인 로그
        if (isFavorite) {
            try {
                const response = await deleteBookmark(cafe.name);
                if (response.status === 200) {
                    setIsFavorite(false);
                } else {
                    console.error('Failed to remove favorite:', response);
                }
            } catch (error) {
                console.error('Failed to remove favorite:', error);
            }
        } else {
            try {
                const response = await addBookmark(cafe.name);
                if (response.status === 200) {
                    setIsFavorite(true);
                } else {
                    console.error('Failed to add favorite:', response);
                }
            } catch (error) {
                console.error('Failed to add favorite:', error);
            }
        }
    };

    const handleClick = () => {
        navigate(`/cafe_details/${cafe.id}`);
      };
    

    return (
        <CafeItemContainer onClick={handleClick}>
            <ImageContainer>
                {cafe.image ? <Placeholder src={cafe.image} alt={cafe.name} /> : <PlaceholderFallback />}
                {status === 'open' && <StatusIcon src={openIcon} alt="open" />}
                {status === 'closed' && <StatusIcon src={closedIcon} alt="closed" />}
            </ImageContainer>
            <CafeDetails>
                <CafeName>{cafe.name}</CafeName>
                <CafeAddress>{cafe.address}</CafeAddress>
                <Distance>
                    여기서부터
                    <Line src={line} />
                    <span className={"distance"}>{cafe.distance !== 'N/A' ? `${cafe.distance} m` : '거리 측정 불가'}</span>
                </Distance>
            </CafeDetails>
            <FavoriteButton
                src={isFavorite ? favoriteGray : favoriteGrayOff}
                alt="★"
                onClick={toggleFavorite}
            />
        </CafeItemContainer>
    );
};

const PlaceholderFallback = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 400;
    color: #b5b6b5;
    background-color: #e7e7e7;
    border-radius: 30px;
`;

const CafeItemContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 30px;
    padding: 1rem 1rem 1rem 2rem;
    box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.10), 3px 3px 10px 0px rgba(0, 0, 0, 0.10);
    position: relative;
    cursor: pointer;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 140px;
    height: 100px;
    background-color: #e7e7e7;
    border-radius: 30px;
    margin-right: 1rem;

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
        margin-right: 0;
        margin-bottom: 1rem;
    }
`;

const Placeholder = styled.img`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 400;
    color: #b5b6b5;
    background-color: #e7e7e7;
    border-radius: 30px;
`;

const StatusIcon = styled.img`
    position: absolute;
    bottom: 5px;
    right: -40px;
    width: 70px;

    @media (max-width: 768px) {
        right: -20px;
        width: 50px;
    }
`;

const CafeDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-left: 3rem;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

const CafeName = styled.h2`
    color: #282828;
    font-size: 1.3rem;
    margin: 1rem 0 0 0;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: -0.8px;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const CafeAddress = styled.span`
    color: #595b59;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: -0.48px;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

const Distance = styled.span`
    color: #808180;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: -0.48px;
    margin-bottom: 1rem;

    .distance {
        color: #ca7070;
        font-weight: 600;
        font-size: 1rem;
        margin-left: 0.5rem;
    }
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

const Line = styled.img`
    margin-left: 0.3rem;
    width: 2rem;
`;

const FavoriteButton = styled.img`
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    width: 30px;
    height: 30px;

    @media (max-width: 768px) {
        width: 25px;
        height: 25px;
    }
`;

export default CafeItem;
