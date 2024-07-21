import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = ({ activeIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(activeIndex);
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentIndex(activeIndex);
    }, [activeIndex]);

    const handleItemClick = (index) => {
        setCurrentIndex(index);
        if (index === 0) {
            navigate("/");
        } else if (index === 1) {
            navigate("/search");
        } else if (index === 2) {
            navigate("/order");
        } else if (index === 3) {
            navigate("/mypage");
        }
    };

    return (
        <NavContainer>
            <Nav>
                <NavItem
                    active={currentIndex === 0}
                    onClick={() => handleItemClick(0)}
                >
                    {currentIndex === 0 && <Circle />}
                    <StyledLink to="/home">홈</StyledLink>
                </NavItem>
                <NavItem
                    active={currentIndex === 1}
                    onClick={() => handleItemClick(1)}
                >
                    {currentIndex === 1 && <Circle />}
                    <StyledLink to="/search">검색</StyledLink>
                </NavItem>
                <NavItem
                    active={currentIndex === 2}
                    onClick={() => handleItemClick(2)}
                >
                    {currentIndex === 2 && <Circle />}
                    <StyledLink to="/order">주문내역</StyledLink>
                </NavItem>
                <NavItem
                    active={currentIndex === 3}
                    onClick={() => handleItemClick(3)}
                >
                    {currentIndex === 3 && <Circle />}
                    <StyledLink to="/mypage">마이페이지</StyledLink>
                </NavItem>
            </Nav>
            <HorizontalLine />
        </NavContainer>
    );
};

const NavContainer = styled.div`
    padding-top: 20px;
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
    font-size: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &::after {
        content: '';
        display: ${({ active }) => (active ? 'block' : 'none')};
        width: 200%;
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

const Circle = styled.div`
    width: 5px;
    height: 5px;
    background: #467048;
    border-radius: 50%;
    margin-top: 2px;
`;

const HorizontalLine = styled.hr`
    width: 100%;
    border: 0;
    height: 0.15rem;
    background: #f3f3f3;
    margin-top: 0.5rem;
`;

export default NavBar;
