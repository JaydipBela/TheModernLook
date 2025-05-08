import React, { useState, useEffect, useRef } from 'react';
import HeroAbout from '../Home/HeroAbout/HeroAbout';
import ReviewSection from '../Home/ReviewSection/ReviewSection';
import './About.css';
import { IoMdSend } from "react-icons/io";
import CommonHero from '../../components/CommonHero/CommonHero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import images from '../../assets/images.js';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: 'Products Sold', value: 10000 },
    { label: 'Years Service', value: 35 },
    { label: 'Outlets Worldwide', value: 450 },
    { label: 'Satisfied Customers', value: 1000 },
];


const team = [
    { name: 'Charles Carter', role: 'Ceo', image: images.team1 },
    { name: 'Lina Hendrick', role: 'Product Designer', image: images.team2 },
    { name: 'Roger Marcus', role: 'VP Sales', image: images.team3 },
    { name: 'Mark Harrison', role: 'Managing Director', image: images.team4 },
];

const items = [
    {
        id: 1,
        title: "Luxury Furniture",
        image: images.HomeB1,
    },
    {
        id: 2,
        title: "Modern Design",
        image: images.HomeB2,
    },
    {
        id: 3,
        title: "Quality Materials",
        image: images.HomeB3,
    },
    {
        id: 4,
        title: "Expert Craftsmanship",
        image: images.HomeB4,
    },
    {
        id: 5,
        title: "Customer Satisfaction",
        image: images.HomeB5,
    },
];

const About = () => {

    return (
        <>
            <CommonHero title="About" navlink="About" subtitle="Home"  image={images.Contact} />
            <HeroAbout />

            <div className="about-stats-container">
                <div className="about-overlay"></div>
                {stats.map((stat, index) => (
                    <div key={index} className="about-stat-item">
                        <h2>{stat.value}+</h2>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>



            <div className="about-team-section">
                <p>Comfort Crafters</p>
                <h2>Special Team</h2>
                <div className="about-team-container">
                    {team.map((member, index) => (
                        <div key={index} className="about-team-member">
                            <img src={member.image} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <ReviewSection />


            <div className="home-eight">
                {items.map((item) => (
                    <div className="home-eight-card" key={item.id}>
                        <div
                            className="home-eight-card-image"
                            style={{ backgroundImage: `url(${item.image})` }}
                        ></div>
                        <div className="home-eight-card-overlay"></div>
                        <div className="home-eight-card-title">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="home-nine-content">
                <div className="home-nine-content-overlay">
                    <p className="home-nine-subtitle">ART OF COMFORT</p>
                    <h1 className="home-nine-title">Transforming Spaces, Transforming Style</h1>
                    <div className="home-nine-input-container">
                        <input
                            type="email"
                            className="home-nine-input"
                            placeholder="Enter your mail id here"
                        />
                        <button className="home-nine-button">
                            <span><IoMdSend /></span>
                        </button>
                    </div>
                    <p className="home-nine-privacy">
                        Your email is safe with us, we don't spam.{" "}
                        <a href="#" className="home-nine-privacy-link">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;