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
import MyPageEdit from "./pages/MyPage/MyPageEdit";
import MyPageCoupon from "./pages/MyPage/MyPageCoupon";
import PolicyPage from "./pages/MyPage/PolicyPage";
import PolicyPageDetail from "./pages/MyPage/PolicyPageDetail";
import StampList from "./pages/MyPage/StampList";
import FavoriteList from "./pages/MyPage/FavoriteList";
import OrderHistoryPage from "./pages/Order/OrderHistoryPage";
import OrderCartSummaryPage from "./pages/payment/OrderCartSummaryPage";
import OrderCartConfirmationPage from "./pages/payment/OrderCartConfirmationpage";
import OrderCartConfirmTestPage from "./pages/payment/OrderCartConfirmTestPage";

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
        <Route path="/order/history" element={<Order />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* 회원가입 */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<TermsAgreement />} />
        <Route path="/Register" element={<Register />} />
        {/* 카페 상세화면 & 음료 주문 */}
        <Route path="/cafe_details/:id" element={<CafeDetailPage />} />
        <Route path="/coupons" element={<CouponPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order" element={<OrderSummaryPage />} />
        <Route path="/order/cart" element={<OrderCartSummaryPage />} />
        <Route
          path="/order/cartconfirm/:orderId/:cafeName"
          element={<OrderCartConfirmationPage />}
        />
        <Route
          path="/order/cartconfirmation"
          element={<OrderCartConfirmationPage />}
        />
        <Route path="/ordersummary" element={<OrderHistoryPage />} />
        <Route
          path="/orderconfirmation"
          element={<OrderCartConfirmTestPage />}
        />
        {/* 마이페이지 */}
        <Route path="/mypageedit" element={<MyPageEdit />} />
        <Route path="/mypagecoupon" element={<MyPageCoupon />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route
          path="/policy/detail/:policyName"
          element={<PolicyPageDetail />}
        />
        <Route path="/stamplist" element={<StampList />} />
        <Route path="/favorite" element={<FavoriteList />} />
      </Routes>
    </Router>
  );
};

export default App;
