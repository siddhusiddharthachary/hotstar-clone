import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FeaturedSection from "./components/FeaturedSection";
import MoviePreviewCard from "./components/MoviePreviewCard";
import "./App.css";

// Dummy card data for multiple sections
const dummyCards = [
  { title: "Movie 1", image: "/images/lr1.avif" },
  { title: "Movie 2", image: "/images/lr2.avif" },
  { title: "Movie 3", image: "/images/lr3.avif" },
  { title: "Movie 4", image: "/images/lr4.avif" },
  { title: "Movie 5", image: "/images/lr5.avif" },
  { title: "Movie 6", image: "/images/lr6.avif" },
  { title: "Movie 7", image: "/images/lr7.avif" },
  { title: "Movie 8", image: "/images/lr8.avif" },
];

const nsCards = [
  { title: "NS Movie 1", image: "/images/ns1.avif" },
  { title: "NS Movie 1", image: "/images/ns2.avif" },
  { title: "NS Movie 1", image: "/images/ns3.avif" },
  { title: "NS Movie 1", image: "/images/ns4.avif" },
  { title: "NS Movie 1", image: "/images/ns5.avif" },
  { title: "NS Movie 1", image: "/images/ns6.avif" },
  { title: "NS Movie 1", image: "/images/ns7.avif" },
  { title: "NS Movie 1", image: "/images/ns8.avif" },
];

const tsCards = [
  { title: "NS Movie 1", image: "/images/tr1.webp" },
  { title: "NS Movie 1", image: "/images/tr2.webp" },
  { title: "NS Movie 1", image: "/images/tr3.avif" },
  { title: "NS Movie 1", image: "/images/tr4.avif" },
  { title: "NS Movie 1", image: "/images/tr5.avif" },
  { title: "NS Movie 1", image: "/images/tr6.avif" },
  { title: "NS Movie 1", image: "/images/tr7.avif" },
  { title: "NS Movie 1", image: "/images/tr8.avif" },
  { title: "NS Movie 1", image: "/images/tr9.avif" },
];

const sms = [
  { title: "NS Movie 1", image: "/images/sms1.webp" },
  { title: "NS Movie 1", image: "/images/sms2.webp" },
  { title: "NS Movie 1", image: "/images/sms3.avif" },
  { title: "NS Movie 1", image: "/images/sms4.webp" },
  { title: "NS Movie 1", image: "/images/sms5.webp" },
  { title: "NS Movie 1", image: "/images/sms6.webp" },
  { title: "NS Movie 1", image: "/images/sms7.webp" },
  { title: "NS Movie 1", image: "/images/sms8.webp" },
  { title: "NS Movie 1", image: "/images/sms9.webp" },
];

const pf = [
  { title: "NS Movie 1", image: "/images/pf1.webp" },
  { title: "NS Movie 1", image: "/images/pf2.avif" },
  { title: "NS Movie 1", image: "/images/pf3.avif" },
  { title: "NS Movie 1", image: "/images/pf4.avif" },
  { title: "NS Movie 1", image: "/images/pf5.avif" },
  { title: "NS Movie 1", image: "/images/pf6.avif" },
  { title: "NS Movie 1", image: "/images/pf7.avif" },
  { title: "NS Movie 1", image: "/images/pf8.avif" },
  { title: "NS Movie 1", image: "/images/pf9.webp" },
];

const pm = [
  { title: "NS Movie 1", image: "/images/pm1.avif" },
  { title: "NS Movie 1", image: "/images/pm2.webp" },
  { title: "NS Movie 1", image: "/images/pm3.avif" },
  { title: "NS Movie 1", image: "/images/pm4.avif" },
  { title: "NS Movie 1", image: "/images/pm5.webp" },
  { title: "NS Movie 1", image: "/images/pm6.webp" },
  { title: "NS Movie 1", image: "/images/pm7.avif" },
  { title: "NS Movie 1", image: "/images/pm8.avif" },
  { title: "NS Movie 1", image: "/images/pm9.webp" },
];

const cv = [
  { title: "NS Movie 1", image: "/images/cv1.webp" },
  { title: "NS Movie 1", image: "/images/cv2.avif" },
  { title: "NS Movie 1", image: "/images/cv3.avif" },
  { title: "NS Movie 1", image: "/images/cv4.avif" },
  { title: "NS Movie 1", image: "/images/cv5.webp" },
  { title: "NS Movie 1", image: "/images/cv6.webp" },
  { title: "NS Movie 1", image: "/images/cv7.webp" },
  { title: "NS Movie 1", image: "/images/cv8.webp" },
  { title: "NS Movie 1", image: "/images/cv9.webp" },
];

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex2, setHoveredIndex2] = useState(null);
  const [hoveredIndex3, setHoveredIndex3] = useState(null);
  const [hoveredIndex4, setHoveredIndex4] = useState(null);
  const [hoveredIndex5, setHoveredIndex5] = useState(null);
  const [hoveredIndex6, setHoveredIndex6] = useState(null);
  // You can add more state variables for other sections if needed

  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <main style={{ marginLeft: "60px", flex: 1 }}>
        <MoviePreviewCard />
        <FeaturedSection />

        {/* SECTION 1: Latest Releases */}
        <section className="scroll-section">
          <h2 className="section-title">Latest Releases</h2>
          <div className="scroll-container">
            {dummyCards.map((card, index) => (
              <div
                key={index}
                className={`scroll-card ${hoveredIndex === index ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={card.image} alt={card.title} />
                {hoveredIndex === index && (
                  <div className="hover-content">
                    <button className="watch-now">▶ Watch Now</button>
                    <button className="add-to-list">＋</button>
                    <p className="card-meta">2025 • U/A 13+ • Hindi</p>
                    <p className="card-desc">Thrilling new drama with unexpected twists!</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Top Rated on IMDb */}
        <section className="scroll-section">
          <h2 className="section-title">Non-stop Sports</h2>
          <div className="scroll-container">
            {nsCards.map((card, index) => (
              <div
                key={index}
                className={`scroll-card ${hoveredIndex2 === index ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredIndex2(index)}
                onMouseLeave={() => setHoveredIndex2(null)}
              >
                <img src={card.image} alt={card.title} />
                {hoveredIndex2 === index && (
                  <div className="hover-content">
                    <button className="watch-now">▶ Watch Now</button>
                    <button className="add-to-list">＋</button>
                    <p className="card-meta">2025 • U/A 16+ • Thriller</p>
                    <p className="card-desc">A critically acclaimed story that grips hard!</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        
        <section className="scroll-section">
          <h2 className="section-title">Top Rated on IMDb</h2>
          <div className="scroll-container">
            {tsCards.map((card, index) => (
              <div
                key={index}
                className={`scroll-card ${hoveredIndex3 === index ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredIndex3(index)}
                onMouseLeave={() => setHoveredIndex3(null)}
              >
                <img src={card.image} alt={card.title} />
                {hoveredIndex3 === index && (
                  <div className="hover-content">
                    <button className="watch-now">▶ Watch Now</button>
                    <button className="add-to-list">＋</button>
                    <p className="card-meta">2025 • U/A 16+ • Thriller</p>
                    <p className="card-desc">A critically acclaimed story that grips hard!</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="scroll-section">
          <h2 className="section-title">Star Maa Shows</h2>
          <div className="scroll-container">
            {sms.map((card, index) => (
              <div
                key={index}
                className={`scroll-card ${hoveredIndex4 === index ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredIndex4(index)}
                onMouseLeave={() => setHoveredIndex4(null)}
              >
                <img src={card.image} alt={card.title} />
                {hoveredIndex4 === index && (
                  <div className="hover-content">
                    <button className="watch-now">▶ Watch Now</button>
                    <button className="add-to-list">＋</button>
                    <p className="card-meta">2025 • U/A 16+ • Thriller</p>
                    <p className="card-desc">A critically acclaimed story that grips hard!</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="scroll-section">
          <h2 className="section-title">Peacock's Finest</h2>
          <div className="scroll-container">
            {pf.map((card, index) => (
              <div
                key={index}
                className={`scroll-card ${hoveredIndex5 === index ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredIndex5(index)}
                onMouseLeave={() => setHoveredIndex5(null)}
              >
                <img src={card.image} alt={card.title} />
                {hoveredIndex5 === index && (
                  <div className="hover-content">
                    <button className="watch-now">▶ Watch Now</button>
                    <button className="add-to-list">＋</button>
                    <p className="card-meta">2025 • U/A 16+ • Thriller</p>
                    <p className="card-desc">A critically acclaimed story that grips hard!</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="scroll-section">
          <h2 className="section-title">Popular Movies</h2>
          <div className="scroll-container">
            {pm.map((card, index) => (
              <div
                key={index}
                className={`scroll-card ${hoveredIndex6 === index ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredIndex6(index)}
                onMouseLeave={() => setHoveredIndex6(null)}
              >
                <img src={card.image} alt={card.title} />
                {hoveredIndex6 === index && (
                  <div className="hover-content">
                    <button className="watch-now">▶ Watch Now</button>
                    <button className="add-to-list">＋</button>
                    <p className="card-meta">2025 • U/A 16+ • Thriller</p>
                    <p className="card-desc">A critically acclaimed story that grips hard!</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>



      </main>
    </div>
  );
}

export default App;
