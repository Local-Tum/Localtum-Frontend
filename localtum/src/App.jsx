import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/account/SignIn";
import PhoneVerification from "./pages/account/PhoneVerification";
import Register from "./pages/account/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/phoneverification" element={<PhoneVerification />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
