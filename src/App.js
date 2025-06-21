import React from "react";
import Navbar from "./components/Navbar";
import FeaturedSection from "./components/FeaturedSection";
import MoviePreviewCard from "./components/MoviePreviewCard";

function App() {
  return (
    <div style={{ display: "flex" }}>
      {/* Left sidebar */}
      <Navbar />
        

      {/* Main content */}
      <main style={{ marginLeft: "60px", flex: 1 }}>
        {/* Featured Video Card */}
        <MoviePreviewCard />
        <FeaturedSection />

        {/* Movie Card (like Mistry card you mentioned) */}
      </main>
    </div>
  );
}

export default App;
