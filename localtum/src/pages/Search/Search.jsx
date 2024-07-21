import React from 'react';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import Nav from '../../components/home/Nav';

const Search = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Nav activeIndex={1} />
        </div>
    );
};

export default Search;
