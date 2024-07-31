import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/mypageedit/Header";
import Alert from "../../components/mypageedit/Alert";

const MyPageEdit = () => {
  const [nickname, setNickname] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNicknameSubmit = () => {
    if (nickname.length > 8) {
      setAlertMessage("닉네임은 8자 이내이어야 합니다.");
      setIsAlertVisible(true);
    } else {
      setAlertMessage(`'${nickname}'로 변경되었습니다.`);
      setIsAlertVisible(true);
    }
  };

  const handleAccountDelete = () => {
    setIsDeleteConfirmationVisible(true);
  };

  const confirmAccountDelete = () => {
    setAlertMessage("회원 탈퇴 완료되었습니다.");
    setIsDeleteConfirmationVisible(false);
    setIsAlertVisible(true);
  };

  const handleAlertClose = () => {
    setIsAlertVisible(false);
    setAlertMessage("");
  };

  return (
    <>
      <Container>
        <Header />
        <Main>
          <Title>회원 정보 수정</Title>
          <Form>
            <FormField>
              <InputContainer>
                <LabelTag>닉네임</LabelTag>
                <NicknameInput
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  maxLength={8}
                />
              </InputContainer>
              <ErrorMessage>* 8자 이내로 입력해주세요.</ErrorMessage>
            </FormField>
            <ButtonGroup>
              <DeleteButton onClick={handleAccountDelete}>
                회원 탈퇴
              </DeleteButton>
              <SubmitButton onClick={handleNicknameSubmit}>
                수정하기
              </SubmitButton>
            </ButtonGroup>
          </Form>
        </Main>
        {isAlertVisible && (
          <Alert message={alertMessage} onClose={handleAlertClose} />
        )}
        {isDeleteConfirmationVisible && (
          <Alert
            message="회원 탈퇴 하시겠습니까?"
            onClose={() => setIsDeleteConfirmationVisible(false)}
            onConfirm={confirmAccountDelete}
            showConfirmButtons
          />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Main = styled.main`
  padding: 2rem 1rem;
  flex: 1;
  overflow: hidden; /* Prevents scrolling */
`;

const Title = styled.h2`
  text-align: center;
  color: #444;
  margin-bottom: 4rem;
  font-size: 1.2rem;
  letter-spacing: -1px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LabelTag = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  margin-right: 10px;
  white-space: nowrap;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
`;

const NicknameInput = styled.input`
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  background-color: #fff;
`;

const ErrorMessage = styled.p`
  font-size: 0.7rem;
  color: red;
  margin-top: 0.5rem;
  text-align: left;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-top: 2rem;
`;

const DeleteButton = styled.button`
  width: 45%;
  padding: 0.75rem;
  background-color: white;
  color: #a9b782;
  border: 1px solid #a9b782;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled.button`
  width: 45%;
  padding: 0.75rem;
  background-color: #467048;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default MyPageEdit;
