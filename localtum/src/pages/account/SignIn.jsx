import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LocalTumLogo from "../../assets/LocalTumLogo.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [loginVal, setLoginVal] = useState({ phoneNumber: "", code: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginVal({ ...loginVal, [name]: value });
  };

  const handleSignIn = () => {
    if (!loginVal.phoneNumber || !loginVal.code) {
      alert("입력하지 않은 값이 있습니다.");
      return;
    }

    console.log("로그인 시도:", loginVal);
    alert("로그인 성공!");
    navigate("/home");
  };

  const handleSignUp = () => {
    navigate("/phoneverification");
  };

  return (
    <Frame>
      <Logo src={LocalTumLogo} alt="LocalTum Logo" />
      <Title>로그인/회원가입</Title>
      <Form>
        <SubTitle>휴대전화번호 등록</SubTitle>
        <InputContainer>
          <Input
            type="text"
            name="phoneNumber"
            placeholder="전화번호를 입력해 주세요."
            value={loginVal.phoneNumber}
            onChange={handleChange}
          />
          <Button color="#A9B782">인증번호 발송</Button>
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            name="code"
            placeholder="인증번호를 입력해 주세요."
            value={loginVal.code}
            onChange={handleChange}
          />
          <Button color="#B5B6B5">인증번호 확인</Button>
        </InputContainer>
      </Form>
      <Notice>
        * 기존 가입 고객은 별도의 회원가입 없이 로그인 화면으로 전환됩니다.
      </Notice>
      <ActionButtonContainer>
        <ActionButton onClick={handleSignUp} variant="outlined">
          회원가입
        </ActionButton>
        <ActionButton onClick={handleSignIn} variant="filled">
          로그인
        </ActionButton>
      </ActionButtonContainer>
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

const SubTitle = styled.div`
  font-size: 0.8rem;
  color: #595b59;
  margin-bottom: 0.5rem;
  width: 100%;
  max-width: 600px;
  text-align: left;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  width: 100%;
  max-width: 600px;
  gap: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  background-color: #f6f3f3;
  border: none;
  border-radius: 15px;
  font-size: 0.7rem;
  color: #b5b6b5;
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  flex-shrink: 0;
`;

const Notice = styled.p`
  font-size: 0.875rem;
  color: #888;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 600px;
  text-align: left;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 464px;
`;

const ActionButton = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
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
