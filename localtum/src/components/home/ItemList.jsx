import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ItemList = ({ items, visibleCount }) => {
  return (
    <StyledList>
      {items.slice(0, visibleCount).map((item) => {
        const status = localStorage.getItem(`status-${item.id}`) || "closed";

        return (
          <Item
            key={item.id}
            id={item.id} 
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
