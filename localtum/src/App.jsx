import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/account/SignIn";
import TermsAgreement from "./pages/account/TermsAgreement";
import Register from "./pages/account/Register";
import CafeDetailPage from "./pages/cafedetailpage/CafeDetailPage";
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
      </Routes>
    </Router>
  );
}

export default App;
