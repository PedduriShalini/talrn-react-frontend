import { useState } from "react";

function Join({ onNext }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://talrn-assessment-backend-shalini.onrender.com/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      });
      const data = await res.json();
      alert(data.message);
      onNext(form.email);
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
        background: "linear-gradient(to bottom right, #fcd34d, #a5f3fc)",
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
            background: "linear-gradient(90deg, #16a34a, #f59e0b)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: "25px",
          }}
        >
          Join Talrn Clone
        </h2>
        <form onSubmit={handleSubmit}>
          {["name", "email", "password", "confirmPassword"].map((field, i) => (
            <input
              key={i}
              type={field.includes("password") ? "password" : "text"}
              name={field}
              placeholder={field
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              value={form[field]}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#f43f5e")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          ))}
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
              transition: "all 0.3s ease",
            }}
            disabled={loading}
            onMouseOver={(e) =>
              (e.target.style.background = "linear-gradient(90deg, #f43f5e, #ec4899)")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "linear-gradient(90deg, #f59e0b, #f43f5e)")
            }
          >
            {loading ? "Sending OTP..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
