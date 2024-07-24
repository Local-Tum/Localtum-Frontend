import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import MyCoupon from './pages/Home/MyCoupon';
import Alarm from './pages/Home/Alarm';
import Search from './pages/Search/Search';
import Order from './pages/Order/Order';
import MyPage from './pages/MyPage/MyPage';
import Recommend from './pages/recommend/Recommend.jsx';
import RecommendFeeling from './pages/recommend/RecommendFeeling.jsx';
import RecommendFlavor from './pages/recommend/RecommendFlavor.jsx';
import RecommendDetail from './pages/recommend/RecommendDetail.jsx';
import RecommendCafe from './pages/recommend/RecommendCafe.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* 홈 */}
                <Route path="/" element={<Home />} />
                <Route path="/mycoupon" element={<MyCoupon />} />
                <Route path="/alarm" element={<Alarm />} />

                {/* 퍼스널 메뉴 추천 */}
                <Route path="/recommend" element={<Recommend />} />
                <Route path="/recommend/feeling" element={<RecommendFeeling />} />
                <Route path="/recommend/flavor" element={<RecommendFlavor />} />
                <Route path="/recommend/detail" element={<RecommendDetail />} />
                <Route path="/recommend/cafe" element={<RecommendCafe />} />

                <Route path="/search" element={<Search />} />
                <Route path="/order" element={<Order />} />
                <Route path="/mypage" element={<MyPage />} />              
            </Routes>
        </Router>
    );
};

export default App;
