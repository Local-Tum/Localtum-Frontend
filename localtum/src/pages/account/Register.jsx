import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LocalTumLogo from "../../assets/LocalTumLogo.png";
import Modal from "../../components/account/Modal";

const Register = () => {
  const navigate = useNavigate();
  const [registerVal, setRegisterVal] = useState({
    nickname: "",
    agreements: [],
  });
  const [nicknameError, setNicknameError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterVal({ ...registerVal, [name]: value });

    if (name === "nickname") {
      if (value.length > 8) {
        setNicknameError("* 8자 이하로 입력해주세요.");
      } else {
        setNicknameError("");
      }
    }
  };

  const handleAgreementChange = (e) => {
    const { name, checked } = e.target;

    if (name === "all") {
      if (checked) {
        setRegisterVal((prev) => ({
          ...prev,
          agreements: ["all", "service", "privacy", "thirdParty", "marketing"],
        }));
      } else {
        setRegisterVal((prev) => ({
          ...prev,
          agreements: [],
        }));
      }
    } else {
      if (checked) {
        setRegisterVal((prev) => ({
          ...prev,
          agreements: [...prev.agreements, name],
        }));
      } else {
        setRegisterVal((prev) => ({
          ...prev,
          agreements: prev.agreements.filter((item) => item !== name),
        }));
      }
    }
  };

  const handleSubmit = () => {
    if (!registerVal.nickname || nicknameError) {
      alert("닉네임을 올바르게 입력해주세요.");
      return;
    }

    console.log("회원가입 시도:", registerVal);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/Home");
  };

  const isChecked = (name) => registerVal.agreements.includes(name);

  return (
    <Frame>
      <Logo src={LocalTumLogo} alt="LocalTum Logo" />
      <Title>회원가입</Title>
      <Form>
        <InputContainer>
          <Input
            type="text"
            name="nickname"
            placeholder="닉네임을 입력해 주세요."
            value={registerVal.nickname}
            onChange={handleChange}
          />
          {nicknameError && <ErrorMessage>{nicknameError}</ErrorMessage>}
        </InputContainer>
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
          회원가입
        </ActionButton>
      </Form>
      <Modal show={showModal} onClose={handleCloseModal} title="가입 완료">
        <p>아기사자님 환영합니다!</p>
      </Modal>
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  background-color: #f6f3f3;
  border: none;
  border-radius: 15px;
  font-size: 0.7rem;
  color: #b5b6b5;
`;

const ErrorMessage = styled.div`
  font-size: 0.75rem;
  color: red;
  margin-top: 0.5rem;
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

export default Register;
