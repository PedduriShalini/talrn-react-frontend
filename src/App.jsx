import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./Join";
import SendOtp from "./SendOtp";
import VerifyOtp from "./VerifyOtp";
import Success from "./Success"; 

function App() {
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join onNext={setEmail} />} />
        <Route path="/send-otp" element={<SendOtp email={email} />} />
        <Route path="/verify" element={<VerifyOtp email={email} onVerified={() => setVerified(true)} />} />
        <Route path="/success" element={verified ? <Success /> : <Join onNext={setEmail} />} />
      </Routes>
    </Router>
  );
}

export default App;
