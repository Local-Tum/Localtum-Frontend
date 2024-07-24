import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const ItemList = ({ items, visibleCount }) => {
    return (
        <StyledList>
            {items.slice(0, visibleCount).map(item => (
                <Item key={item.id} name={item.name} description={item.description} status={item.status} />
            ))}
        </StyledList>
    );
};

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export default ItemList;
