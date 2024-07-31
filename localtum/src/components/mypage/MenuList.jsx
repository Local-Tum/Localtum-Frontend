import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MenuList = ({ onLogoutClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <UserInfoContainer>
          <UserName>아기사자</UserName>
          <UserNameSuffix>님</UserNameSuffix>
        </UserInfoContainer>
        <MenuItem onClick={() => navigate("/mypageedit")}>
          회원 정보 수정
        </MenuItem>
        <MenuItem onClick={() => navigate("/mypagecoupon")}>쿠폰</MenuItem>
        <MenuItem onClick={() => navigate("/stamplist")}>스탬프</MenuItem>
        <MenuItem onClick={() => navigate("/favoritecafe")}>
          카페 즐겨찾기
        </MenuItem>
        <MenuItem onClick={() => navigate("/policy")}>약관 및 정책</MenuItem>
        <MenuItem onClick={onLogoutClick} style={{ color: "red" }}>
          로그아웃
        </MenuItem>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const UserInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 0.5px solid #b5b6b5;
  box-sizing: border-box;
`;

const UserName = styled.span`
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  margin-right: 5px;
`;

const UserNameSuffix = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const MenuItem = styled.div`
  width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 15px 20px;
  font-size: 14px;
  border-bottom: 0.5px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 12px;
  }
`;

export default MenuList;
