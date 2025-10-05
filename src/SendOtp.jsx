import { useState } from "react";

function SendOtp({ onOtpSent }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");

    setLoading(true);
    try {
      const res = await fetch("https://talrn-express-backend.onrender.com/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("OTP sent successfully!");
        onOtpSent(email); // pass email to VerifyOtp component
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Error sending OTP: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom right, #a5f3fc, #fcd34d)",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            background: "linear-gradient(90deg, #16a34a, #f43f5e)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: "15px",
          }}
        >
          Send OTP
        </h2>
        <form onSubmit={handleSendOtp}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#10b981")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <button
            type="submit"
            style={{
              padding: "12px 25px",
              background: "linear-gradient(90deg, #f59e0b, #f43f5e)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              width: "100%",
            }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendOtp;
