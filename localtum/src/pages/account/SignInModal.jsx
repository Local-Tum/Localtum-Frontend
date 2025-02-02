import React from 'react';
import styled from 'styled-components';
import closeIcon from '../../assets/icons/closeIcon.png';

const MembershipModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton src={closeIcon} alt="x" onClick={onClose} />
                <ModalTitle>아이디/비밀번호 오류</ModalTitle>
                <HorizontalRule />
                <ModalFooter>
                    등록된 회원정보가 없습니다.<br />
                    올바르게 입력해 주세요.
                </ModalFooter>
            </ModalContent>
        </ModalOverlay>
    );
};

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: #fff;
    padding: 1rem 0;
    border-radius: 30px;
    width: 60vw;
    max-width: 400px;
    height: auto;
    position: relative;
    text-align: center;
    z-index: 1001;
`;

const CloseButton = styled.img`
    position: absolute;
    right: 2rem;
    background: none;
    border: none;
    width: 1rem;
    cursor: pointer;
    @media (max-width: 768px) {
        right: 1rem;
    }

    @media (max-width: 480px) {
        right: 1rem;
    }

`;

const ModalTitle = styled.h2`
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #444;
    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

const HorizontalRule = styled.hr`
    width: 100%;
    border: none;
    border-top: 2px solid #e7e7e7;
    margin: 1rem 0;
`;

const ModalFooter = styled.p`
    margin-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 150%;
    color: #ca7070;
    white-space: pre-line;
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
    }

`;

export default MembershipModal;
