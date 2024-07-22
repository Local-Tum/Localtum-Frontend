import React from 'react';
import Header from '../../components/recommend/Header';
import Banner from '../../components/recommend/Banner';
import SubContent from '../../components/recommend/SubContent';

const RecommendFeeling = () => {
    return (
        <div>
            <Header />
            <Banner />
            <SubContent type="feeling" />
        </div>
    );
};

export default RecommendFeeling;
