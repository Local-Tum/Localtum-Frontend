import React from "react";
import styled from "styled-components";

const MenuList = ({ onLogoutClick }) => (
  <Container>
    <MenuItem>회원 정보 수정</MenuItem>
    <MenuItem>쿠폰</MenuItem>
    <MenuItem>스탬프</MenuItem>
    <MenuItem>카페 즐겨찾기</MenuItem>
    <MenuItem>약관 및 정책</MenuItem>
    <MenuItem onClick={onLogoutClick} style={{ color: "red" }}>
      로그아웃
    </MenuItem>
  </Container>
);

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

const MenuItem = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export default MenuList;
