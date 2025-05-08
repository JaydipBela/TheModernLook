
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import "./CommonHero.css";

const CommonHero = ({ title, subtitle, navlink , image }) => {
  useEffect(() => {
    // Animate content elements
    gsap.fromTo(
      ".banner-content h1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      ".banner-content p",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.5, delay: 0.5, ease: "power3.out" }
    );

    // Add a subtle zoom effect to the banner
    gsap.fromTo(
      ".banner",
      { scale: 1.05 },
      { scale: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="banner" style={{
      backgroundImage: image ? `url(${image})` : 'none',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="overlay"></div>
      <div className="banner-content">
        <h1>{title}</h1>
        <p>
          <NavLink className="navlink" to="/">
            {subtitle}
          </NavLink>{" "}
          / {navlink}
        </p>
      </div>
    </section>
  );
};

export default CommonHero;
