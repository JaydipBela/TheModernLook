import React from "react";
import "./HeroAbout.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import images from "../../../assets/images.js";

const HeroAbout = () => {
  useEffect(() => {
    // Function to check if we're on mobile
    const isMobile = window.innerWidth <= 768;

    // Adjust animations for mobile
    const xOffsetLeft = isMobile ? -50 : -100;
    const xOffsetRight = isMobile ? 50 : 100;

    gsap.fromTo(
      ".home-second-left-side .text-content",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".home-second-left-side",
          start: "top 70%", // Adjusted for better mobile visibility
          end: "top 20%",
          // scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".home-second-right-side .image-container",
      { opacity: 0, x: xOffsetRight },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".home-second-right-side",
          start: "top 70%", // Adjusted for better mobile visibility
          end: "top 20%",
          // scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".home-second-left-side .image-container",
      { opacity: 0, x: xOffsetLeft },
      {
        opacity: 1,
        x: 0,
        duration: 1.5, // Slightly reduced for mobile
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".home-second-left-side .image-container",
          start: "top 70%", // Adjusted for better mobile visibility
          end: "top 20%",
          // scrub: true,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".home-second-right-side .text-content",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".home-second-right-side .text-content",
          start: "top 70%", // Adjusted for better mobile visibility
          end: "top 40%",
          // scrub: true,
          // markers : true,
        },
      }
    );
  }, []);




  return (
    <div className="home-second-section-container">
      {/* Left Side */}
      <div className="home-second-left-side">
        <div className="text-content">
          <h6>Home Decor Hub</h6>
          <h1>Exceptional Furniture's For Indoor & Outdoor</h1>
          <p>
            Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean
            vehicula sodales arcu non mattis. Integer dapibus ac dui pretium
            blandit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
        </div>
        <div className="image-container">
          <img
            src={images.homeAbout1}
            alt="Indoor Furniture"
            className="image"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="home-second-right-side">
        <div className="image-container">
          <img
            src={images.homeAbout2}
            alt="Outdoor Furniture"
            className="image"
            loading="lazy"
          />
        </div>
        <div className="text-content">
          <h2>Discover Endless Designs</h2>
          <p>
            Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Ut
            eleifend mattis ligula, porta finibus urna gravida at. Aenean
            vehicula sodales arcu non mattis.
          </p>
          <ul>
            <li>At eleifend mattis ligula, porta finibus urna gravida at.</li>
            <li>Kenean vehicula sodales arcu non mattis.</li>
            <li>Ginteger dapibus ac dui pretium blans aptent.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
