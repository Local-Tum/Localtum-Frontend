import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import locationIcon from '../../assets/icons/locationIcon.png';
import ItemList from './ItemList';
import cafes from '../Cafes/Cafes';

const MainContent = () => {
    const [visibleCount, setVisibleCount] = useState(2);
    const [district, setDistrict] = useState('위치 찾는 중');

    useEffect(() => {
        const apiKey = process.env.REACT_APP_KAKAO_API_KEY;
        if (!apiKey) {
            setDistrict('API 키가 설정되지 않았습니다.');
            return;
        }

        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;
        script.async = true;

        script.onload = () => {
            window.kakao.maps.load(() => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        position => {
                            const { latitude, longitude } = position.coords;
                            fetchDistrictName(latitude, longitude);
                            calculateDistancesAndStore(latitude, longitude);
                        },
                        error => {
                            console.error('Geolocation error:', error);
                            setDistrict('위치를 찾을 수 없습니다');
                        }
                    );
                } else {
                    console.error("Geolocation is not supported by this browser.");
                    setDistrict('위치를 찾을 수 없습니다');
                }
            });
        };

        script.onerror = () => {
            console.error('Failed to load the Kakao Map script.');
            setDistrict('위치를 찾을 수 없습니다');
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const fetchDistrictName = (latitude, longitude) => {
        const geocoder = new window.kakao.maps.services.Geocoder();
        const coord = new window.kakao.maps.LatLng(latitude, longitude);

        geocoder.coord2RegionCode(coord.getLng(), coord.getLat(), (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const region = result.find(item => item.region_type === 'H');
                if (region) {
                    const districtName = region.address_name.split(' ')[1]; // 구 이름만 추출
                    setDistrict(districtName);
                } else {
                    console.error('No region found for the given coordinates.');
                    setDistrict('위치를 찾을 수 없습니다.');
                }
            } else {
                console.error('Failed to fetch district name:', status);
                setDistrict('위치를 찾을 수 없습니다.');
            }
        });
    };

    const calculateDistancesAndStore = (latitude, longitude) => {
        const updatedCafes = cafes.map(cafe => {
            const distance = getDistanceFromLatLonInKm(latitude, longitude, cafe.latitude, cafe.longitude) * 1000;
            return { ...cafe, distance: Math.round(distance) };
        });

        updatedCafes.forEach(cafe => {
            localStorage.setItem(`distance-${cafe.id}`, cafe.distance);
        });
    };

    const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
    };

    const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
    };

    const loadMoreItems = () => {
        setVisibleCount(prevCount => prevCount + 2);
    };

    return (
        <StyledMain>
            <Title>내 주변 카페</Title>
            <RightContainer>
                <ToggleButton>
                    <LocationIcon src={locationIcon} alt="locationIcon" />
                    {district}
                </ToggleButton>
            </RightContainer>
            <ItemList items={cafes.slice(0, visibleCount)} />
            {visibleCount < cafes.length && (
                <LoadMoreButton onClick={loadMoreItems}>더보기</LoadMoreButton>
            )}
        </StyledMain>
    );
};

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 25vw 5rem 25vw;
    text-align: center;

    @media (max-width: 768px) {
        padding: 1rem;
    }

    @media (max-width: 480px) {
        padding: 1rem;
    }
`;

const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 1rem;
    padding-right: 1rem;

    @media (max-width: 768px) {
        padding-right: 2rem;
    }

    @media (max-width: 480px) {
        padding-right: 2rem;
    }
`;

const ToggleButton = styled.button`
    background-color: #ffffff;
    border-radius: 15px;
    border: none;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: #467048;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.1);
    margin-right: 0.5rem;

    @media (max-width: 768px) {
        font-size: 0.7rem;
        padding: 0.2rem 0.4rem;
    }

    @media (max-width: 480px) {
        font-size: 0.6rem;
        padding: 0.2rem 0.3rem;
    }
`;

const LocationIcon = styled.img`
    height: 0.8rem;
    cursor: pointer;
    margin-right: 0.3rem;

    @media (max-width: 768px) {
        height: 0.7rem;
    }

    @media (max-width: 480px) {
        height: 0.6rem;
    }
`;

const LoadMoreButton = styled.button`
    background-color: #b5b6b5;
    border-radius: 30px;
    border: none;
    padding: 1rem 7rem;
    font-size: 1rem;
    color: #FFF;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    margin-top: 20px;

    @media (max-width: 768px) {
        padding: 0.8rem 5rem;
        font-size: 0.875rem;
    }

    @media (max-width: 480px) {
        padding: 0.6rem 3rem;
        font-size: 0.75rem;
    }
`;

export default MainContent;
