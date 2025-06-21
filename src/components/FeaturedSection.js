import React from "react";
import "./FeaturedSection.css";

const FeaturedSection = () => {
  return (
    <div className="featured-container">
      {/* Background image or video */}
      <div className="featured-bg">
        <div className="featured-overlay">
          <h1 className="featured-title">ENG <span>vs</span> IND</h1>
          <p className="featured-subtitle">1st Test, Day 2 - Leeds</p>
          <div className="featured-info">
            <span className="live-dot">🔴</span>
            <span>9.5Cr Views</span>
            <span>• India Tour of England 2025</span>
            <span>• Cricket</span>
          </div>
          <p className="featured-desc">
            Watch the live stream of Day 2 of the 1st Test between England and India at Headingley, Leeds
          </p>
          <div className="button-group">
  <button className="watch-now-btn">▶ Watch Now</button>
  <div className="watchlist-container">
    <button className="watchlist-btn">+</button>
    <span className="watchlist-tooltip">Watchlist</span>
  </div>
</div>
        </div>
      </div>


      
    </div>
  );
};

export default FeaturedSection;
