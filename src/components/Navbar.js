import React, { useState } from "react";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieIcon from "@mui/icons-material/Movie";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";

const menuItems = [
  { icon: <HomeIcon />, label: "Home" },
  { icon: <SearchIcon />, label: "Search" },
  { icon: <LiveTvIcon />, label: "TV" },
  { icon: <MovieIcon />, label: "Movies" },
  { icon: <SportsSoccerIcon />, label: "Sports" },
  { icon: <FlashOnIcon />, label: "Sparks" },
  { icon: <CategoryIcon />, label: "Categories" },
  { icon: <PersonIcon />, label: "My Space" },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <aside className={`sidebar ${hovered ? "sidebar-hovered" : ""}`}>
      <div
        className="navbar-container"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="sidebar-item">
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};


export default Navbar;