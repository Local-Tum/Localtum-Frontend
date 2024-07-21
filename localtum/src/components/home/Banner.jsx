import React, { useState, useEffect } from "react";
import styled from "styled-components";
import banner1 from "../../assets/banners/banner1.png";
// import banner2 from "../../assets/images/banner2.svg";
// import banner3 from "../../assets/images/banner3.svg";

export default function Banner() {
  const [currentBanner, setCurrentBanner] = useState(banner1);

  useEffect(() => {
    const banners = [banner1]; // const banners = [banner1, banner2, banner3];

    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % banners.length;
      setCurrentBanner(banners[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BannerContainer>
      <BannerBox background={currentBanner} />
    </BannerContainer>
  );
}


const BannerContainer = styled.div`
  margin: 0 auto;
  height: 20vh;
  margin-top: 2vh;
  z-index: 10;
  position: relative;
`;

const BannerBox = styled.div`
  border: 1px solid #a8a8a8;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
`;