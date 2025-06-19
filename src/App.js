import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <main style={{ marginLeft: "60px", padding: "2rem", flex: 1 }}>
        <h2>Welcome to the Hotstar UI Clone</h2>
      </main>
    {/* <div className="gradient-text">
       New man
       </div> */}
    </div>
  );
}

export default App;
