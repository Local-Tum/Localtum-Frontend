import React, { useEffect } from 'react';
import styled from 'styled-components';
import markerImage from '../../assets/icons/mapIcon.png';
import Cafes from '../../components/Cafes/Cafes';

const CafeMap = () => {
    useEffect(() => {
        const loadKakaoMap = () => {
            if (!window.kakao || !window.kakao.maps) {
                console.error('Kakao Maps API가 로드되지 않았습니다.');
                return;
            }

            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 기본 위치
                level: 3
            };

            const map = new window.kakao.maps.Map(container, options);

            // 현위치 마커
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        const locPosition = new window.kakao.maps.LatLng(lat, lon);

                        const marker = new window.kakao.maps.Marker({
                            map: map,
                            position: locPosition
                        });

                        map.setCenter(locPosition);
                    },
                    function (error) {
                        console.error('Geolocation error:', error);
                        alert('위치를 가져오는 데 실패했습니다. 브라우저 설정을 확인해주세요.');
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                    }
                );
            } else {
                console.error("Geolocation을 사용할 수 없습니다.");
            }

            // 여러 개의 주소 마커
            const imageSize = new window.kakao.maps.Size(25, 30);
            const imageOption = { offset: new window.kakao.maps.Point(16, 34) };
            const addressMarkerImage = new window.kakao.maps.MarkerImage(markerImage, imageSize, imageOption);

            Cafes.forEach((cafe) => {
                const addressPosition = new window.kakao.maps.LatLng(cafe.latitude, cafe.longitude);
                const addressMarker = new window.kakao.maps.Marker({
                    position: addressPosition,
                    image: addressMarkerImage,
                    map: map
                });

                const content = `
                    <div style="
                        display: flex;
                        align-items: center;
                        padding: 8px;
                        background-color: #4d4d4d;
                        color: #fff;
                        border-radius: 30px;
                        font-size: 10px;
                        font-weight: 700;
                        letter-spacing: -0.64px;
                    ">
                        <div>${cafe.name}</div>
                    </div>
                `;
                const customOverlay = new window.kakao.maps.CustomOverlay({
                    position: addressPosition,
                    content: content,
                    yAnchor: 0,
                    xAnchor: 0.5
                });
                customOverlay.setMap(map);
            });
        };

        const script = document.createElement("script");
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(loadKakaoMap);
        };

        script.onerror = () => {
            console.error('Kakao Maps API를 로드하는 중에 오류가 발생했습니다.');
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return <MapContainer id="map" />;
};

const MapContainer = styled.div`
    width: 40%;
    height: 80vh;

    @media (max-width: 768px) {
        width: 80%;
        height: 60vh;
    }
`;

export default CafeMap;
