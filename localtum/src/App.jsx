import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/account/SignIn";
import TermsAgreement from "./pages/account/TermsAgreement";
import Register from "./pages/account/Register";
import CafeDetailPage from "./pages/cafedetailpage/CafeDetailPage";
import CouponPage from "./components/cafedetailpage/CouponPage";
import PaymentPage from "./pages/payment/PaymentPage";
import OrderSummaryPage from "./pages/payment/OrderSummaryPage";
import OrderConfirmationPage from "./pages/payment/OrderConfirmationPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<TermsAgreement />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/CafeDetail" element={<CafeDetailPage />} />
        <Route path="/coupons" element={<CouponPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order" element={<OrderSummaryPage />} />
        <Route path="/orderconfirmation" element={<OrderConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
