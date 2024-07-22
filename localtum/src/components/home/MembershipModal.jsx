import React from 'react';
import styled from 'styled-components';
import barcodeImage from '../../assets/images/barcode.png';
import closeIcon from '../../assets/icons/closeIcon.png';

const MembershipModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton src={closeIcon} alt="x" onClick={onClose} />
                <ModalTitle>멤버십 바코드</ModalTitle>
                <BarcodeImage src={barcodeImage} alt="바코드" />
                <ModalFooter>* 바코드를 찍어야 각 카페마다 적립이 돼요!</ModalFooter>
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
    padding: 1rem 2rem;
    border-radius: 30px;
    width: 80vw;
    max-width: 400px;
    height: auto;
    position: relative;
    text-align: center;
    z-index: 1001;
`;

const CloseButton = styled.img`
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: none;
    border: none;
    width: 1rem;
    cursor: pointer;
`;

const ModalTitle = styled.h2`
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #282828;
`;

const BarcodeImage = styled.img`
    width: 80%;
    height: auto;
    margin-bottom: 0.5rem;
`;

const ModalFooter = styled.p`
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #ca7070;
`;

export default MembershipModal;
