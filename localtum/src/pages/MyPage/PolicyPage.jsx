import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/mypageedit/Header";

const PolicyPage = () => {
  const navigate = useNavigate();

  const handleItemClick = (policyName) => {
    navigate(`/policy/detail/${policyName}`);
  };

  return (
    <Container>
      <Header />
      <MainContent>
        <Title>약관 및 정책</Title>
        <PolicyList>
          <PolicyItem onClick={() => handleItemClick("서비스 이용약관")}>
            서비스 이용약관
            <RightArrow>&gt;</RightArrow>
          </PolicyItem>
          <PolicyItem onClick={() => handleItemClick("개인정보 처리방침")}>
            개인정보 처리방침
            <RightArrow>&gt;</RightArrow>
          </PolicyItem>
          <PolicyItem onClick={() => handleItemClick("제 3자 개인정보 활용 동의")}>
            제 3자 개인정보 활용 동의
            <RightArrow>&gt;</RightArrow>
          </PolicyItem>
          <PolicyItem onClick={() => handleItemClick("마케팅 활용 동의")}>
            마케팅 활용 동의
            <RightArrow>&gt;</RightArrow>
          </PolicyItem>
          <PolicyItem onClick={() => handleItemClick("위치기반 서비스 이용 동의")}>
            위치기반 서비스 이용 동의
            <RightArrow>&gt;</RightArrow>
          </PolicyItem>
        </PolicyList>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -1px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const PolicyList = styled.ul`
  width: 100%;
  max-width: 480px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PolicyItem = styled.li`
  padding: 1rem;
  font-size: 0.8rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:first-child {
    border-top: 1.5px solid #ccc;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const RightArrow = styled.span`
  font-size: 1rem;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export default PolicyPage;
