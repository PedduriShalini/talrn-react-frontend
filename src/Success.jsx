function Success() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom right, #f43f5e, #10b981)",
        flexDirection: "column",
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
          Registration Successful!
        </h2>
        <p>Your account has been created and verified.</p>
        <span style={{ fontSize: "50px", color: "#f43f5e" }}>✔️</span>
      </div>
    </div>
  );
}

export default Success;
