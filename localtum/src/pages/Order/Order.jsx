import React from 'react';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import Nav from '../../components/home/Nav';

const Order = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Nav activeIndex={2} />
        </div>
    );
};

export default Order;
