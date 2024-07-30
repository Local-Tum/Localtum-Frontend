import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from './Item';

const ItemList = ({ items, visibleCount }) => {
    return (
        <StyledList>
            {items.slice(0, visibleCount).map(item => {
                const status = localStorage.getItem(`cafe-${item.id}-status`) || 'closed';
                
                return (
                    <Item
                        key={item.id}
                        name={item.name}
                        address={item.address}
                        status={status}
                        image={item.image}
                    />
                );
            })}
        </StyledList>
    );
};

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export default ItemList;
