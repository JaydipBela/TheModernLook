import React, { useEffect } from "react";
import "./home.css";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {

    const tl = gsap.timeline();


    tl.fromTo(
      ".home-first-slider-subtitle",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(
      ".home-first-slider-title",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(
      ".home-first-slider-description",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(
      ".home-first-shop-now-btn",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.5"
    );


    // Update GSAP animations to work with inline styles
    const heroSection = document.querySelector('.home-first-slider-section');

    gsap.fromTo(
      heroSection,
      { backgroundSize: "150%" },
      { backgroundSize: "100%", duration: 1.5, ease: "power2.out" }
    );

    gsap.to(heroSection, {
      backgroundPosition: '50% 70%',
      scrollTrigger: {
        trigger: '.home-first-slider-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });


    const updateAnimations = () => {
      if (window.innerWidth <= 768) {

        gsap.set(".home-first-slider-section", { backgroundPosition: 'center center' });
      }
    };


    updateAnimations();


    window.addEventListener('resize', updateAnimations);


    return () => {
      window.removeEventListener('resize', updateAnimations);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  return (
    <section className="home-first-slider-section" >
      <div className="home-first-slider-content">
        <h5 className="home-first-slider-subtitle">TIMELESS ELEGANCE</h5>
        <h1 className="home-first-slider-title">
          Discover Furniture's For Living
        </h1>

        <p className="home-first-slider-description">
          Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et
          tortor consequat id. Fermentum egestas tellus. Nunc eu hendrerit
          turpis. Fusce non lectus sem. In pellentesque nunc non donec pretium
          gravida neque et placerat.
        </p>

        <a href="#shop" className="home-first-shop-now-btn">
          Shop Now <span className="home-first-arrow"><FaArrowRightLong /></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
