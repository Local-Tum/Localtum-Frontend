import React from "react";
import styled from "styled-components";
import banner1 from "../../assets/banners/banner1.png";
import underIcon from "../../assets/icons/underIcon.png";

export default function Banner() {
  return (
    <BannerContainer>
      <BannerBox style={{ backgroundImage: `url(${banner1})` }} />
      <NavDots>
        <NavDot src={underIcon} alt="▽" />
      </NavDots>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  margin: 0 auto;
  height: 20vh;
  margin-top: 2vh;
  z-index: 10;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const BannerBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  will-change: opacity;

  @media (max-width: 768px) {
    background-size: 300% 100%;
    background-position: center center;
  }
`;

const NavDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
`;

const NavDot = styled.img`
  width: 1.5rem;
`;
