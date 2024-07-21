import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const ItemList = () => {
    const items = [
        { id: 1, name: '멋쟁이 사자처럼', description: '서울시 성북구 삼선교로 16길', status: '영업중' },
        { id: 2, name: '디저트 맛있다', description: '서울시 성북구 삼선교로 16길', status: '영업중' }
    ];

    return (
        <StyledList>
            {items.map(item => (
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
