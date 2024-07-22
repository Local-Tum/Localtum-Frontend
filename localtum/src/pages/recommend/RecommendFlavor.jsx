import React from 'react';
import Header from '../../components/recommend/Header';
import Banner from '../../components/recommend/Banner';
import SubContent from '../../components/recommend/SubContent';

const RecommendFlavor = () => {
    return (
        <div>
            <Header />
            <Banner />
            <SubContent type="flavor" />
        </div>
    );
};

export default RecommendFlavor;
