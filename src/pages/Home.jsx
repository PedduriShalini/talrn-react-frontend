import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "50px" }}>
      <h1 style={{ color: "#2563eb" }}>Welcome to Talrn Clone</h1>
      <p style={{ marginTop: "20px" }}>
        A mission-driven platform to connect talent with opportunities.  
        Start your journey by joining us today!
      </p>
      <Link to="/join">
        <button style={{
          marginTop: "30px",
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}>
          Join Now
        </button>
      </Link>
    </div>
  );
}

export default Home;
