import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTransition, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import banner1 from "../../assets/banners/banner1.png";
import banner2 from "../../assets/banners/banner2.png";
import banner3 from "../../assets/banners/banner3.png";

export default function Banner() {
  const banners = [banner1, banner2, banner3];
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(banners[index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  const handleBannerClick = () => {
    if (index === 0) {
      navigate("/recommend");
    }
  };

  return (
    <BannerContainer>
      {transitions((style, item) => (
        <AnimatedBannerBox key={item} style={{ ...style, backgroundImage: `url(${item})` }} onClick={handleBannerClick} />
      ))}
      <NavDots>
        {banners.map((_, dotIndex) => (
          <NavDot
            key={dotIndex}
            active={index === dotIndex}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
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
  cursor: pointer;
`;

const AnimatedBannerBox = styled(animated.div)`
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

const NavDot = styled.button`
  width: 10px;
  height: 10px;
  background-color: ${({ active }) => (active ? "#fff" : "#888")};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;

  &:hover {
    background-color: #fff;
  }
`;
