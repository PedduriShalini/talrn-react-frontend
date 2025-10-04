import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./Join";
import VerifyOtp from "./VerifyOtp";
import Success from "./Success"; // Create this next

function App() {
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join onNext={setEmail} />} />
        <Route path="/verify" element={<VerifyOtp email={email} onVerified={() => setVerified(true)} />} />
        <Route path="/success" element={verified ? <Success /> : <Join onNext={setEmail} />} />
      </Routes>
    </Router>
  );
}

export default App;
