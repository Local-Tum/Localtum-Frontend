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

  const handleCustomCheckboxClick = (name) => {
    setAgreements((prev) => {
      const newAgreements = { ...prev, [name]: !prev[name] };
      if (name === "all") {
        return {
          all: !prev.all,
          service: !prev.all,
          privacy: !prev.all,
          thirdParty: !prev.all,
          marketing: !prev.all,
        };
      }
      if (!newAgreements.service || !newAgreements.privacy || !newAgreements.thirdParty) {
        newAgreements.all = false;
      } else if (newAgreements.service && newAgreements.privacy && newAgreements.thirdParty && newAgreements.marketing) {
        newAgreements.all = true;
      }
      return newAgreements;
    });
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
      <Subtitle>약관 동의</Subtitle>
      <Form>
        <AgreementContainer>
          <Agreement style={{ marginBottom: "1.25rem" }}>
            <CheckboxWrapper onClick={() => handleCustomCheckboxClick("all")}>
              <Checkbox
                type="checkbox"
                name="all"
                checked={isChecked("all")}
                onChange={handleAgreementChange}
              />
              <CustomCheckbox checked={isChecked("all")} />
              <Label>전체 동의</Label>
            </CheckboxWrapper>
          </Agreement>
          <Agreement>
            <CheckboxWrapper onClick={() => handleCustomCheckboxClick("service")}>
              <Checkbox
                type="checkbox"
                name="service"
                checked={isChecked("service")}
                onChange={handleAgreementChange}
              />
              <CustomCheckbox checked={isChecked("service")} />
              <Label>서비스 이용약관 (필수)</Label>
              <Spacer />
              <ViewDetailsButton>전문보기</ViewDetailsButton>
            </CheckboxWrapper>
          </Agreement>
          <Agreement>
            <CheckboxWrapper onClick={() => handleCustomCheckboxClick("privacy")}>
              <Checkbox
                type="checkbox"
                name="privacy"
                checked={isChecked("privacy")}
                onChange={handleAgreementChange}
              />
              <CustomCheckbox checked={isChecked("privacy")} />
              <Label>개인정보 처리방침 (필수)</Label>
              <Spacer />
              <ViewDetailsButton>전문보기</ViewDetailsButton>
            </CheckboxWrapper>
          </Agreement>
          <Agreement>
            <CheckboxWrapper onClick={() => handleCustomCheckboxClick("thirdParty")}>
              <Checkbox
                type="checkbox"
                name="thirdParty"
                checked={isChecked("thirdParty")}
                onChange={handleAgreementChange}
              />
              <CustomCheckbox checked={isChecked("thirdParty")} />
              <Label>제 3자 개인정보 활용 동의 (필수)</Label>
              <Spacer />
              <ViewDetailsButton>전문보기</ViewDetailsButton>
            </CheckboxWrapper>
          </Agreement>
          <Agreement>
            <CheckboxWrapper onClick={() => handleCustomCheckboxClick("marketing")}>
              <Checkbox
                type="checkbox"
                name="marketing"
                checked={isChecked("marketing")}
                onChange={handleAgreementChange}
              />
              <CustomCheckbox checked={isChecked("marketing")} />
              <Label>마케팅 활용 동의 (선택)</Label>
              <Spacer />
              <ViewDetailsButton>전문보기</ViewDetailsButton>
            </CheckboxWrapper>
          </Agreement>
        </AgreementContainer>
        <ActionButton
          onClick={handleSubmit}
          disabled={
            !agreements.service || !agreements.privacy || !agreements.thirdParty
          }
          variant={
            agreements.service && agreements.privacy && agreements.thirdParty
              ? "filled"
              : "outlined"
          }
        >
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
  margin-bottom: 1rem;
  color: #444444;
  font-size: 1.5rem;
`;

const Subtitle = styled.h3`
  margin-bottom: 2rem;
  color: #444444;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.04em;
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 80%;
    }
`;

const AgreementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  margin-top: 1rem;
`;

const Agreement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.75rem;
  padding: 0.2rem;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  cursor: pointer;
`;

const Checkbox = styled.input`
  display: none;
`;

const CustomCheckbox = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: ${(props) => (props.checked ? "#a9b782" : "#fff")};
  border: 2px solid #e7e7e7;
  margin-right: 10px;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.04em;
  color: #444444;
`;

const Spacer = styled.div`
  flex: 1;
`;

const ViewDetailsButton = styled.button`
  background: #f3f3f3;
  border: none;
  border-radius: 20px;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  color: #444444;
  cursor: pointer;
`;

const ActionButton = styled.button`
  width: 100%;
  max-width: 358px;
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: ${(props) =>
    props.variant === "filled" ? "#467048" : "#b5b6b5"};
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.variant === "filled"
      ? "0px 4px 6px rgba(0, 0, 0, 0.1)"
      : "0px 4px 6px rgba(0, 0, 0, 0.05)"};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export default TermsAgreement;
