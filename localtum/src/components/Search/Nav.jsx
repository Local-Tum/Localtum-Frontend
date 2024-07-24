import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import search from '../../assets/icons/search.png';
import searchColor from '../../assets/icons/searchColor.png';

const NavBar = ({ activeIndex, onSelect }) => {
    const [currentIndex, setCurrentIndex] = useState(activeIndex);
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentIndex(activeIndex);
    }, [activeIndex]);

    const handleItemClick = (index) => {
        setCurrentIndex(index);
        onSelect(index);
    };

    return (
        <NavContainer>
            <Nav>
                <NavItem
                    className={currentIndex === 0 ? 'distance' : ''}
                    active={currentIndex === 0}
                    onClick={() => handleItemClick(0)}
                >
                    <StyledLink to="#">내 주변에서 선택</StyledLink>
                </NavItem>
                <NavItem
                    active={currentIndex === 1}
                    onClick={() => handleItemClick(1)}
                >
                    <StyledLink to="#">지도로 선택</StyledLink>
                </NavItem>
                <NavItem
                    active={currentIndex === 2}
                    onClick={() => handleItemClick(2)}
                >
                    <StyledLink to="#">즐겨찾기</StyledLink>
                </NavItem>
                <NavItem
                    active={currentIndex === 3}
                    onClick={() => handleItemClick(3)}
                >
                    <StyledLinkImg to="#" src={currentIndex === 3 ? searchColor : search}></StyledLinkImg>
                </NavItem>
            </Nav>
            <HorizontalLine />
        </NavContainer>
    );
};

const NavContainer = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Nav = styled.nav`
    display: flex;
    gap: 7vw;
    justify-content: space-between;
    align-items: center;
`;

const NavItem = styled.div`
    color: ${({ active }) => (active ? '#467048' : '#808180')};
    text-decoration: none;
    font-weight: ${({ active }) => (active ? '700' : '400')};
    font-size: 0.9rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::after {
        content: '';
        display: ${({ active }) => (active ? 'block' : 'none')};
        width: ${({ className }) => (className === 'distance' ? '120%' : '150%')};
        height: 0.15rem;
        background: #467048;
        position: absolute;
        bottom: -0.65rem;
        border-radius: 1rem;
    }
`;

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

const StyledLinkImg = styled.img`
    height: 1.3rem;
    padding: 0 0.3rem 0 0.3rem;
`;

const HorizontalLine = styled.hr`
    width: 40%;
    border: 0;
    height: 0.15rem;
    background: #f3f3f3;
    margin-top: 0.5rem;
`;

export default NavBar;
