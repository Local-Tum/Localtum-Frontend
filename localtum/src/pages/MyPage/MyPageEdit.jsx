import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/mypageedit/Header";
import Alert from "../../components/mypageedit/Alert";

const MyPageEdit = () => {
  const [nickname, setNickname] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);

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
              <Label>닉네임</Label>
              <NicknameInput
                type="text"
                value={nickname}
                onChange={handleNicknameChange}
              />
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
`;

const Main = styled.main`
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #444;
  margin-bottom: 2rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
  width: 80%;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

const NicknameInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  font-size: 0.875rem;
  color: red;
  margin-top: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const DeleteButton = styled.button`
  width: 45%;
  padding: 0.75rem;
  background-color: #fff;
  color: #467048;
  border: 1px solid #467048;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 45%;
  padding: 0.75rem;
  background-color: #467048;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
`;

export default MyPageEdit;
