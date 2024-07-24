import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import openIcon from '../../assets/icons/openIcon.png';
import closedIcon from '../../assets/icons/closedIcon.png';
import favoriteGray from '../../assets/icons/favoriteGray.png';
import favoriteGrayOff from '../../assets/icons/favoriteGrayOff.png';
import line from '../../assets/icons/line2.png';

const CafeItem = ({ cafe }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favoriteStatus = localStorage.getItem(`favorite-${cafe.name}`);
        if (favoriteStatus) {
            setIsFavorite(JSON.parse(favoriteStatus));
        }
    }, [cafe.name]);

    useEffect(() => {
        localStorage.setItem(`favorite-${cafe.name}`, JSON.stringify(isFavorite));
    }, [isFavorite, cafe.name]);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <CafeItemContainer>
            <ImageContainer>
                <Placeholder />
                {cafe.status === 'open' && <StatusIcon src={openIcon} alt="open" />}
                {cafe.status === 'closed' && <StatusIcon src={closedIcon} alt="closed" />}
            </ImageContainer>
            <CafeDetails>
                <CafeName>{cafe.name}</CafeName>
                <CafeAddress>{cafe.address}</CafeAddress>
                <Distance>
                    여기서부터
                    <Line src={line} />
                    <span className={"distance"}>{cafe.distance}</span>
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

const CafeItemContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 30px;
    padding: 1rem 1rem 1rem 2rem;
    box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.10), 3px 3px 10px 0px rgba(0, 0, 0, 0.10);
    position: relative; /* Add position relative to the container */

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

const Placeholder = styled.div`
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
`

const FavoriteButton = styled.img`
    position: absolute;
    top: 1rem;
    right: 1rem; /* Position the button in the top-right corner */
    cursor: pointer;
    width: 30px;
    height: 30px;

    @media (max-width: 768px) {
        width: 25px;
        height: 25px;
    }
`;

export default CafeItem;
