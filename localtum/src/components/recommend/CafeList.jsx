import React from 'react';
import styled from 'styled-components';
import CafeItem from './CafeItem';

const CafeList = ({ cafes, visibleCount }) => {
    return (
        <CafeListContainer>
            {cafes.slice(0, visibleCount).map((cafe, index) => (
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
