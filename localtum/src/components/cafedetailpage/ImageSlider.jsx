import React from "react";
import styled from "styled-components";

const ImageSlider = ({ images }) => {
  return (
    <SliderContainer>
      <SliderButton>{"<"}</SliderButton>
      <ImagePlaceholder>
        {images.map((img, index) => (
          <Image src={img} alt={`Slide ${index}`} key={index} />
        ))}
      </ImagePlaceholder>
      <SliderButton>{">"}</SliderButton>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f3f3;
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const SliderButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #467048;
`;

const ImagePlaceholder = styled.div`
  flex: 1;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #b5b6b5;
  background-color: #fff;
  border: 1px dashed #ccc;
  border-radius: 15px;
  margin: 0 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export default ImageSlider;
