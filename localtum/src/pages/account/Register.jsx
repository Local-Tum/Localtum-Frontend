import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mainlogo from "../../assets/logos/mainlogo.png";

const Register = () => {
  const navigate = useNavigate();
  const [registerVal, setRegisterVal] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });
  const [nicknameError, setNicknameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

    if (name === "confirmPassword") {
      if (value !== registerVal.password) {
        setPasswordError("비밀번호가 일치하지 않습니다.");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = () => {
    if (
      !registerVal.username ||
      !registerVal.password ||
      !registerVal.confirmPassword ||
      !registerVal.nickname
    ) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (nicknameError || passwordError) {
      alert("입력한 정보를 다시 확인해주세요.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(registerVal));
    alert("회원가입이 완료되었습니다.");
    navigate("/");
  };

  return (
    <Frame>
      <Logo src={mainlogo} alt="LocalTum Logo" />
      <Title>회원가입</Title>
      <Form>
        <InputContainer>
          <Label>아이디</Label>
          <Input
            type="text"
            name="username"
            placeholder="아이디를 입력해 주세요."
            value={registerVal.username}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Label>비밀번호</Label>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요."
            value={registerVal.password}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호를 확인해 주세요."
            value={registerVal.confirmPassword}
            onChange={handleChange}
          />
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Label>닉네임 설정</Label>
          <Input
            type="text"
            name="nickname"
            placeholder="닉네임을 입력해 주세요."
            value={registerVal.nickname}
            onChange={handleChange}
          />
          {nicknameError && <ErrorMessage>{nicknameError}</ErrorMessage>}
        </InputContainer>
        <ActionButton
          onClick={handleSubmit}
          variant={
            registerVal.username &&
            registerVal.password &&
            registerVal.confirmPassword &&
            registerVal.nickname
              ? "filled"
              : "outlined"
          }
        >
          가입하기
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #595b59;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  background-color: #f6f3f3;
  border: none;
  border-radius: 15px;
  font-size: 13px;
  color: #595b59;
  &::placeholder {
    color: #b5b6b5;
  }
`;

const ErrorMessage = styled.div`
  font-size: 14px;
  color: red;
  margin-top: 0.5rem;
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
`;

export default Register;
