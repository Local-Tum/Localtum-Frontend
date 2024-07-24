import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mainlogo from "../../assets/logos/mainlogo.png";

const TermsAgreement = () => {
  const navigate = useNavigate();
  const [agreements, setAgreements] = useState({
    all: false,
    service: false,
    privacy: false,
    thirdParty: false,
    marketing: false,
  });

  const handleAgreementChange = (e) => {
    const { name, checked } = e.target;
    setAgreements((prev) => ({ ...prev, [name]: checked }));

    if (name === "all") {
      setAgreements({
        all: checked,
        service: checked,
        privacy: checked,
        thirdParty: checked,
        marketing: checked,
      });
    }
  };

  const handleSubmit = () => {
    if (!agreements.service || !agreements.privacy || !agreements.thirdParty) {
      alert("필수 약관에 동의해주세요.");
      return;
    }

    navigate("/Register");
  };

  const isChecked = (name) => agreements[name];

  return (
    <Frame>
      <Logo src={mainlogo} alt="LocalTum Logo" />
      <Title>회원가입</Title>
      <Form>
        <AgreementContainer>
          <Agreement>
            <input
              type="checkbox"
              name="all"
              checked={isChecked("all")}
              onChange={handleAgreementChange}
            />
            전체 동의
          </Agreement>
          <Agreement>
            <input
              type="checkbox"
              name="service"
              checked={isChecked("service")}
              onChange={handleAgreementChange}
            />
            서비스 이용약관 (필수)
          </Agreement>
          <Agreement>
            <input
              type="checkbox"
              name="privacy"
              checked={isChecked("privacy")}
              onChange={handleAgreementChange}
            />
            개인정보 처리방침 (필수)
          </Agreement>
          <Agreement>
            <input
              type="checkbox"
              name="thirdParty"
              checked={isChecked("thirdParty")}
              onChange={handleAgreementChange}
            />
            제 3자 개인정보 활용 동의 (필수)
          </Agreement>
          <Agreement>
            <input
              type="checkbox"
              name="marketing"
              checked={isChecked("marketing")}
              onChange={handleAgreementChange}
            />
            마케팅 활용 동의 (선택)
          </Agreement>
        </AgreementContainer>
        <ActionButton onClick={handleSubmit} variant="filled">
          다음으로
        </ActionButton>
      </Form>
    </Frame>
  );
};

const Frame = styled.div`
  font-family: Pretendard, sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Logo = styled.img`
  width: 20%;
  max-width: 150px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  color: #444444;
  font-size: 1.5rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AgreementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  margin-top: 1rem;
`;

const Agreement = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: bold;
  color: #444444;
  margin-bottom: 0.5rem;
`;

const ActionButton = styled.button`
  width: 100%;
  max-width: 358px;
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: ${(props) =>
    props.variant === "filled" ? "#467048" : "white"};
  color: ${(props) => (props.variant === "filled" ? "white" : "#808180")};
  border: 2px solid
    ${(props) => (props.variant === "filled" ? "#467048" : "#A9B782")};
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.variant === "filled"
      ? "0px 4px 6px rgba(0, 0, 0, 0.1)"
      : "0px 4px 6px rgba(0, 0, 0, 0.05)"};
`;

export default TermsAgreement;
