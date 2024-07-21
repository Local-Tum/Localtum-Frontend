import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Order from './pages/Order/Order';
import MyPage from './pages/MyPage/MyPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/order" element={<Order />} />
                <Route path="/mypage" element={<MyPage />} />              
            </Routes>
        </Router>
    );
};

export default App;
