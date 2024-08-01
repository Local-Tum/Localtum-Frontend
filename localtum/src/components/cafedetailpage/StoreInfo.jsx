import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import openIcon from '../../assets/icons/openIcon.png';
import closedIcon from '../../assets/icons/closedIcon.png';
import cafeName from '../../assets/icons/cafeName.png';
import favoriteButton from '../../assets/icons/favoriteButton.png';
import favoriteButtonOff from '../../assets/icons/favoriteButtonOff.png';

const StoreInfo = ({ name, address, status, image }) => {

    const [isFavorite, setIsFavorite] = useState(() => {
        const favoriteStatus = localStorage.getItem(`favorite-${name}`);
        return favoriteStatus ? JSON.parse(favoriteStatus) : false;
    });

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem(`favorite-${name}`, JSON.stringify(isFavorite));
    }, [isFavorite, name]);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <InfoContainer>
            <ImageContainer>
                <FavoriteButton
                    src={isFavorite ? favoriteButton : favoriteButtonOff}
                    alt="★"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite();
                    }}
                />
                {image ? (
                    <BackgroundImage src={image} alt="카페 사진" />
                ) : (
                    <Placeholder>카페 사진</Placeholder>
                )}
            </ImageContainer>
            <ItemDetails>
                <TextContainer>
                    <ItemName>
                        <CafeNameIcon src={cafeName} alt="*" />
                        {name}
                    </ItemName>
                    <AddressContainer>
                        <ItemDescription>{address}</ItemDescription>
                        <ItemStatus
                            src={status === 'closed' ? closedIcon : openIcon}
                            alt={status === 'closed' ? '영업종료' : '영업중'}
                        />
                    </AddressContainer>
                </TextContainer>
            </ItemDetails>
            <StoreNotice>* 개인 컵(텀블러) 지참시 500원이 할인됩니다!</StoreNotice>
        </InfoContainer>
    );
};

const InfoContainer = styled.div`
    margin-bottom: 1rem;
    width: 100%;
    max-width: 720px;
    padding: 0 1rem;
    box-sizing: border-box;
`;

const ImageContainer = styled.div`
    border-radius: 30px;
    position: relative;
    height: 250px;
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
`;

const Placeholder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    color: #b5b6b5;
    background-color: #f3f3f3;
    border-radius: 30px;
`;

const ItemStatus = styled.img`
    width: 4rem;
    margin-left: auto;
`;

const FavoriteButton = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #1c6a00;
    height: 2.5rem;
    cursor: pointer;
    z-index: 2;
`;

const ItemDetails = styled.div`
    padding: 1rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
`;

const CafeNameIcon = styled.img`
    width: 1.5rem;
    margin-right: 0.5rem;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const ItemName = styled.h2`
    color: #282828;
    font-size: 1.2rem;
    margin: 0;
    font-weight: 700;
    word-break: break-all;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

const AddressContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
    margin-left: 2rem;
`;

const ItemDescription = styled.span`
    color: #808180;
    font-size: 0.8rem;
    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
    @media (max-width: 480px) {
        font-size: 0.6rem;
    }
`;

const StoreNotice = styled.p`
    margin-top: 0.5rem;
    margin-left: 2rem;
    font-size: 0.7rem;
    color: #ca7070;
`;

export default StoreInfo;
