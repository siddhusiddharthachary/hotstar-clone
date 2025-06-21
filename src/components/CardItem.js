import React, { useState } from 'react';
import './CardItem.css';

const CardItem = ({ card }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card-item ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={card.image} alt={card.title} />
      {hovered && (
        <div className="card-hover-details">
          <button className="watch-now">▶ Watch Now</button>
          <button className="watchlist">＋</button>
          <p className="meta">{card.year} • {card.rating} • {card.duration} • {card.language}</p>
          <p className="description">{card.description}</p>
        </div>
      )}
    </div>
  );
};

export default CardItem;
