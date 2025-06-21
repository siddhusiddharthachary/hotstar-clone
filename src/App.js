import React from "react";
import Navbar from "./components/Navbar";
import FeaturedSection from "./components/FeaturedSection";
import MoviePreviewCard from "./components/MoviePreviewCard";
import ScrollableSection from "./components/ScrollableSection";
import Scroll2 from "./components/Scroll2"; // ✅ Ensure this file exists and is capitalized

// Dummy cards for demonstration
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
  return (
    <div style={{ display: "flex" }}>
      {/* Left Sidebar */}
      <Navbar />

      {/* Main Content */}
      <main style={{ marginLeft: "60px", flex: 1 }}>
        {/* Top Movie Preview Card */}
        <MoviePreviewCard />

        {/* Featured Section (like ENG vs IND) */}
        <FeaturedSection />

        {/* Scrollable Sections for categories */}
        <ScrollableSection title="Latest Releases" cards={dummyCards} />
        <Scroll2 title="Non-Stop Sports" cards={nsCards} />
        <ScrollableSection title="Top Rated on IMDb" cards={tsCards} />
        <ScrollableSection title="Star Maa Shows" cards={sms} />
        <ScrollableSection title="Peacock's Finest" cards={pf} />
        <ScrollableSection title="Popular Movies" cards={pm} />
        <ScrollableSection title="Crime Vault" cards={cv} />
      </main>
    </div>
  );
}

export default App;