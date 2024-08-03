import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mainlogo from "../../assets/logos/mainlogo.png";
import SignInModal from "./SignInModal";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [loginVal, setLoginVal] = useState({ memberId: "", password: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginVal({ ...loginVal, [name]: value });
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "https://15.165.139.216.nip.io/localtum/signIn", // 백엔드 서버 URL 직접 사용
        loginVal,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("isLoggedIn", true); // 로그인 상태 저장
      localStorage.setItem("token", response.data.token); // 토큰 저장
      alert("로그인 성공!");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "로그인 중 오류 발생");
      handleModalOpen();
    }
  };

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  return (
    <Frame>
      <Logo src={mainlogo} alt="LocalTum Logo" />
      <Title>로그인/회원가입</Title>
      <Form>
        <InputContainer>
          <Label>아이디</Label>
          <Input
            type="text"
            name="memberId"
            placeholder="아이디를 입력해 주세요."
            value={loginVal.memberId}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Label>비밀번호</Label>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요."
            value={loginVal.password}
            onChange={handleChange}
          />
        </InputContainer>
      </Form>
      <ButtonContainer>
        <ActionButton onClick={handleSignIn} variant="filled">
          로그인
        </ActionButton>
        <ActionButton onClick={handleSignUp} variant="outlined">
          회원가입
        </ActionButton>
      </ButtonContainer>
      <SignInModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        message={errorMessage}
      />
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
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -2px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: #595b59;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  background-color: #f6f3f3;
  border: none;
  border-radius: 15px;
  font-size: 13px;
  font-weight: 400;
  color: #595b59;
  &::placeholder {
    color: #b5b6b5;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const ActionButton = styled.button`
  width: 80%;
  max-width: 464px;
  margin: 0.5rem 0;
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

export default SignIn;
