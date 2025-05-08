import React, { useState } from "react";
import "./HomeHover.css";
import images from "../../../assets/images.js";

// Items with titles, icons, and associated background images
const items = [
    { title: "Sofa", icon: images.icon1, bg: images.hover1 },
    { title: "Cabinet", icon: images.icon2, bg: images.hover2 },
    { title: "Shelving Units", icon: images.icon3, bg: images.hover3 },
    { title: "Tea Table", icon: images.icon4, bg: images.hover4 },
    { title: "Decors", icon: images.icon5, bg: images.hover5 },
    // { title: "Office Table", icon: images.icon6, bg: images.hover6 },
    // { title: "Storage Furniture", icon: images.icon7, bg: images.hover7 },
    // { title: "Kitchen Furniture", icon: images.icon8, bg: images.hover8 },
  ];


const HomeHover = () => {
  const [background, setBackground] = useState(images.hover1);
  const [isMobile, setIsMobile] = useState(false);


  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };


    checkMobile();


    window.addEventListener('resize', checkMobile);


    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInteraction = (bg) => {
    setBackground(bg);
  };

  return (
    <div
      className="hover-section-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hover-section-overlay">
        <div className="hover-section-content">
          <div className="hover-items">
            {items.map((item, index) => (
              <div
                key={index}
                className="hover-item"
                onMouseEnter={() => handleInteraction(item.bg)}
                onClick={() => handleInteraction(item.bg)}
                onTouchStart={() => isMobile && handleInteraction(item.bg)}
              >
                <span className="hover-title">{item.title}</span>
                <img
                  className="hover-icon"
                  src={item.icon}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHover;
