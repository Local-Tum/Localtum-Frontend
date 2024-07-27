import React from "react";
import styled from "styled-components";

const NicknameSection = ({ nickname }) => (
  <Container>
    <Nickname>{nickname}</Nickname>
  </Container>
);

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
`;

const Nickname = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default NicknameSection;
