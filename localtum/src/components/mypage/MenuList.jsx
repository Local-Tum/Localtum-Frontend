import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../../apis/api/user';

const MenuList = ({ onLogoutClick }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await getUserInfo();
        setUserName(data.data); // 사용자 이름 설정
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <Container>
        <UserInfoContainer>
          <UserName>{userName}</UserName>
          <UserNameSuffix>님</UserNameSuffix>
        </UserInfoContainer>
        <MenuItemContainer>
          <MenuItem onClick={() => navigate('/mypageedit')}>회원 정보 수정</MenuItem>
          <MenuItem onClick={() => navigate('/mycoupon')}>쿠폰</MenuItem>
          <MenuItem onClick={() => navigate('/stamplist')}>스탬프</MenuItem>
          <MenuItem onClick={() => navigate('/favorite')}>카페 즐겨찾기</MenuItem>
          <MenuItem onClick={() => navigate('/policy')}>약관 및 정책</MenuItem>
          <MenuItem onClick={onLogoutClick} style={{ color: '#ca7070' }}>로그아웃</MenuItem>
        </MenuItemContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const UserInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  padding-bottom: 30px;
  border-bottom: 2px solid #b5b6b5;
`;

const UserName = styled.div`
  color: #595b59;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  margin-right: 5px;
  box-shadow: -3px -3px 10px 0px rgba(0, 0, 0, 0.10), 3px 3px 10px 0px rgba(0, 0, 0, 0.10);
`;

const UserNameSuffix = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const MenuItemContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 18px 30px;
  font-size: 14px;
  border-bottom: 0.5px solid #ccc;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: #f9f9f9;
  }

  @media (max-width: 480px) {
    padding: 12px 30px;
    font-size: 12px;
  }
`;

export default MenuList;
