import React from 'react';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import Nav from '../../components/home/Nav';

const MyPage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Nav activeIndex={3} />
        </div>
    );
};

export default MyPage;
