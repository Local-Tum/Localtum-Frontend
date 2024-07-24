import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CafeList from '../recommend/CafeList';

const SearchKeyword = ({ items }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleCount, setVisibleCount] = useState(2);
    const [searchHistory, setSearchHistory] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(storedHistory);
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchFocus = () => {
        setIsFocused(true);
    };

    const handleHistoryClick = (term) => {
        setSearchTerm(term);
        setIsFocused(false);
    };

    const loadMoreResults = () => {
        setVisibleCount((prevCount) => prevCount + 2);
    };

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm && !searchHistory.includes(searchTerm)) {
            const updatedHistory = [searchTerm, ...searchHistory].slice(0, 5); // 마지막 5개 기록만 저장
            setSearchHistory(updatedHistory);
            localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
        }
    };

    const handleClearHistory = () => {
        setSearchHistory([]);
        localStorage.removeItem('searchHistory');
    };

    const handleDeleteHistory = (term) => {
        const updatedHistory = searchHistory.filter(item => item !== term);
        setSearchHistory(updatedHistory);
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    };

    return (
        <SearchContainer>
            <SearchForm onSubmit={handleSearchSubmit}>
                <SearchBar
                    type="text"
                    placeholder="카페를 검색해주세요."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onFocus={handleSearchFocus}
                />
            </SearchForm>
            {isFocused && !searchTerm && searchHistory.length > 0 && (
                <HistoryContainer>
                    <HistoryHeader>
                        <ClearHistoryButton onClick={handleClearHistory}>전체삭제</ClearHistoryButton>
                    </HistoryHeader>
                    {searchHistory.map((term, index) => (
                        <HistoryItem key={index}>
                            <HistoryTerm onClick={() => handleHistoryClick(term)}>
                                {term}
                            </HistoryTerm>
                            <DeleteButton onClick={() => handleDeleteHistory(term)}>×</DeleteButton>
                        </HistoryItem>
                    ))}
                </HistoryContainer>
            )}
            {searchTerm && (
                <>
                    <StyledCafeListContainer>
                        <CafeList cafes={filteredItems} visibleCount={visibleCount} />
                    </StyledCafeListContainer>
                    {visibleCount < filteredItems.length && (
                        <LoadMoreButton onClick={loadMoreResults}>더보기</LoadMoreButton>
                    )}
                </>
            )}
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    width: 40%;
    @media (max-width: 768px) {
        width: 70%;
    }
    @media (max-width: 480px) {
        width: 80%;
    }
`;

const SearchBar = styled.input`
    width: 100%;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    border-radius: 30px;
    border: 2px solid #E7E7E7;
    font-size: 1rem;
    outline: none;
    color: #595b59;
    letter-spacing: -0.64px;
    
    &::placeholder {
        color: #b5b6b5;
        letter-spacing: -0.64px;
    }

    &:focus {
        border-color: #E7E7E7;
    }
`;

const StyledCafeListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem; // 여기서 margin-top을 추가
`;

const LoadMoreButton = styled.button`
    background-color: #b5b6b5;
    border-radius: 30px;
    border: none;
    padding: 1rem 7rem;
    font-size: 1rem;
    color: #fff;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    margin-top: 4rem;
`;

const HistoryContainer = styled.div`
    width: 40%;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        width: 70%;
    }
    @media (max-width: 480px) {
        width: 80%;
    }
`;

const HistoryHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
`;

const ClearHistoryButton = styled.button`
    font-size: 0.9rem;
    background: none;
    border: none;
    color: #808180;
    cursor: pointer;
`;

const HistoryItem = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1.5rem;
    cursor: pointer;
    color: #595b59;
    font-weight: 400;
    border-bottom: 2px solid #e7e7e7;
    &:hover {
        background: #f0f0f0;
    }
`;

const HistoryTerm = styled.div`
    flex-grow: 1;
`;

const DeleteButton = styled.div`
    background: none;
    border: none;
    color: #b5b6b5;
    cursor: pointer;
    font-size: 2rem;
    margin-left: 1rem;
`;

export default SearchKeyword;
