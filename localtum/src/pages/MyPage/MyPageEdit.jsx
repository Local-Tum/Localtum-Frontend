import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/mypageedit/Header";
import EditModal from "../../components/mypageedit/EditModal";
import AccountDeleteModal from "../../components/mypageedit/AccountDeleteModal";
import DeleteModal from "../../components/mypageedit/DeleteModal";
import { updateNickname } from "../../apis/api/user"; // API 함수 임포트

const MyPageEdit = () => {
  const [nickname, setNickname] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteSuccessModalOpen, setDeleteSuccessModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setNickname(value);

    if (value.length > 8) {
      setErrorMessage("닉네임은 8자 이내이어야 합니다.");
    } else {
      setErrorMessage("");
    }
  };

  const handleNicknameSubmit = async () => {
    if (nickname.length > 8) {
      setErrorMessage("닉네임은 8자 이내이어야 합니다.");
    } else {
      try {
        const response = await updateNickname({ nickname });
        if (response.status === 200) {
          setIsModalOpen(true);
        } else {
          setErrorMessage("닉네임 수정에 실패했습니다.");
        }
      } catch (error) {
        console.error("닉네임 수정 중 오류 발생:", error);
        setErrorMessage("닉네임 수정 중 오류 발생");
      }
    }
  };

  const handleAccountDelete = () => {
    setDeleteModalOpen(true);
  };

  const confirmAccountDelete = () => {
    setDeleteModalOpen(false);
    setDeleteSuccessModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDeleteModalClose = () => {
    setDeleteSuccessModalOpen(false);
    navigate("/"); 
  };

  const handleDeleteSuccessModalClose = () => {
    setDeleteSuccessModalOpen(false);
    navigate("/"); 
  };

  return (
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
            <ErrorMessage>{errorMessage || "* 8자 이내로 입력해주세요."}</ErrorMessage>
          </FormField>
          <ButtonGroup>
            <DeleteButton onClick={handleAccountDelete}>회원 탈퇴</DeleteButton>
            <SubmitButton
              onClick={handleNicknameSubmit}
              disabled={nickname.length > 8} 
            >
              수정하기
            </SubmitButton>
          </ButtonGroup>
        </Form>
      </Main>
      {deleteSuccessModalOpen && (
        <DeleteModal isOpen={deleteSuccessModalOpen} onClose={handleDeleteSuccessModalClose} />
      )}
      {isModalOpen && (
        <EditModal 
          isOpen={isModalOpen} 
          onClose={handleModalClose} 
          nickname={nickname} 
        />
      )}
      {deleteModalOpen && (
        <AccountDeleteModal
          onCancel={handleDeleteModalClose}
          onConfirm={confirmAccountDelete}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
`;

const Main = styled.main`
  padding: 2rem 1rem;
  flex: 1;
  overflow: hidden;
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  color: #444;
  margin-bottom: 4rem;
  font-size: 1.5rem;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LabelTag = styled.div`
  background-color: #ffffff;
  color: #282828;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.8px;
  margin-right: 15px;
  white-space: nowrap;
  box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.10), 3px 3px 10px 0px rgba(0, 0, 0, 0.10);
`;

const NicknameInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  color: #595b59;
  border: none;
  border-radius: 20px;
  box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.10), 3px 3px 10px 0px rgba(0, 0, 0, 0.10);
  outline: none;
  background-color: #fff;
`;

const ErrorMessage = styled.p`
  font-size: 0.7rem;
  color: red;
  margin-top: 0.5rem;
  margin-left: 14rem;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-top: 2rem;
  box-sizing: border-box;
`;

const DeleteButton = styled.button`
  width: 45%;
  padding: 0.75rem;
  background-color: white;
  color: #a9b782;
  border: 2px solid #a9b782;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.8px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 45%;
  padding: 0.75rem;
  background-color: #467048;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default MyPageEdit;
