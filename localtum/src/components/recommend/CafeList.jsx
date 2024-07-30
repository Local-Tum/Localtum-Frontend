import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CafeItem from './CafeItem';

const CafeList = ({ cafes, visibleCount }) => {
    const [sortedCafes, setSortedCafes] = useState([]);

    useEffect(() => {
        const cafesWithDistance = cafes.map(cafe => {
            const distance = localStorage.getItem(`distance-${cafe.id}`);
            return { ...cafe, distance: distance ? parseFloat(distance) : Infinity };
        });

        const sorted = cafesWithDistance.sort((a, b) => a.distance - b.distance);
        setSortedCafes(sorted);
    }, [cafes]);

    return (
        <CafeListContainer>
            {sortedCafes.slice(0, visibleCount).map((cafe, index) => (
                <CafeItem key={index} cafe={cafe} />
            ))}
        </CafeListContainer>
    );
};

const CafeListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 40vw;

    @media (max-width: 768px) {
        width: 80vw;
        gap: 1rem;
    }
`;

export default CafeList;
