import React from "react";
import "./HomeComport.css";
import { IoMdSend } from "react-icons/io";

const HomeComport = () => {
    return (
        <div className="home-nine">
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
                            <span><IoMdSend/></span>
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
        </div>
    );
};

export default HomeComport;
