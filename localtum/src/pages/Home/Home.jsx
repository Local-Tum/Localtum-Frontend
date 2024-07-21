import React from 'react';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import Nav from '../../components/home/Nav';
import MainContent from '../../components/home/MainContent';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Nav activeIndex={0} />
            <MainContent />
        </div>
    );
};

export default Home;
