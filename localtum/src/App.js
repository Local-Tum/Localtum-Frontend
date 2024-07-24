import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyCoupon from "./pages/Home/MyCoupon";
import Alarm from "./pages/Home/Alarm";
import Search from "./pages/Search/Search";
import Order from "./pages/Order/Order";
import MyPage from "./pages/MyPage/MyPage";
import Recommend from "./pages/recommend/Recommend";
import RecommendFeeling from "./pages/recommend/RecommendFeeling";
import RecommendFlavor from "./pages/recommend/RecommendFlavor";
import RecommendDetail from "./pages/recommend/RecommendDetail";
import RecommendCafe from "./pages/recommend/RecommendCafe";
import SignIn from "./pages/account/SignIn";
import TermsAgreement from "./pages/account/TermsAgreement";
import Register from "./pages/account/Register";
import CafeDetailPage from "./pages/cafedetailpage/CafeDetailPage";
import CouponPage from "./components/cafedetailpage/CouponPage";
import PaymentPage from "./pages/payment/PaymentPage";
import OrderSummaryPage from "./pages/payment/OrderSummaryPage";
import OrderConfirmationPage from "./pages/payment/OrderConfirmationPage";

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
        {/* 회원가입 */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<TermsAgreement />} />
        <Route path="/Register" element={<Register />} />
        {/* 카페 상세화면 & 음료 주문 */}
        <Route path="/CafeDetail" element={<CafeDetailPage />} />
        <Route path="/coupons" element={<CouponPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order" element={<OrderSummaryPage />} />
        <Route path="/orderconfirmation" element={<OrderConfirmationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
