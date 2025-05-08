import React, { useState } from 'react'
import './HomeAnswer.css'
import { GoArrowDownLeft} from "react-icons/go";
import images from "../../../assets/images.js";

const HomeAnswer = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        {
            question: "For furniture purchases, do you have financing options?",
            answer:
                "Dolor sit amet consectetur adipiscing. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.Volutpat diam ut venenatis tellus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.",
        },
        {
            question: "Do you have eco-friendly furniture?",
            answer: "Ultrices dui sapien eget mi. Quam viverra orci sagittis eu volutpat odio. Bibendum neque egestas congue quisque egestas diam in arcu cursus. A pellentesque sit amet porttitor. Aliquet lectus proin nibh nisl condimentum id.Ridiculus mus mauris vitae ultricies leo integer.",
        },
        {
            question: "Is it possible to follow the delivery of my furniture?",
            answer:
                "Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Dui ut ornare lectus sit amet. Morbi leo urna molestie at elementum eu facilisis sed. Eu mi bibendum neque egestas congue quisque. Non odio euismod lacinia at quis risus sed vulputate odio.",
        },
        {
            question:
                "Do you offer design consultations?",
            answer:
                "Purus non enim praesent elementum facilisis leo vel fringilla. Pharetra diam sit amet nisl suscipit. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quamPurus faucibus ornare suspendisse.",
        },
        {
            question:
                "Are custom orders accepted for furniture that isn't in stock?",
            answer:
                "Hac habitasse platea dictumst quisque sagittis purus sit. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in.",
        },
    ];
    return (
        <>
            <div className="home-five-text-container">
            <div className="home-five-text">
                    <span>Tailored Furniture For Specific Needs. </span>
                    <img src={images.icon} alt="Icon" className="home-five-icon" />
                    <span> Ensure Durability And Longevity. </span>
                    <img src={images.icon} alt="Icon" className="home-five-icon" />
                    <span> Diverse Range Of Furniture's. </span>
                    <img src={images.icon} alt="Icon" className="home-five-icon" />
                    <span> Comfort And High Functionality. </span>
                    <img src={images.icon} alt="Icon" className="home-five-icon" />
                    <span>Tailored Furniture For Specific Needs. </span>
                    <img src={images.icon} alt="Icon" className="home-five-icon" />
                    <span> Ensure Durability And Longevity. </span>
                    <img src={images.icon} alt="Icon" className="home-five-icon" />
                    <span> Diverse Range Of Furniture's. </span>
                    <img src={images.icon} alt="Icon" className="home-five-icon" />
                    <span> Comfort And High Functionality. </span>
                    <img src={images.icon} alt="Icon" className="home-five-icon" />
                </div>
            </div>
            <div className="home-five-accordion-section">
                <div className="home-five-overlay"></div>
                <div className="home-five-content-wrapper">
                    <div className="home-five-accordion-container">
                        <p className="home-five-subtitle">
                        Product related queries
                        </p>
                        <h3>Products & Service</h3>
                        {questions.map((item, index) => (
                            <div
                                className={`home-five-accordion-item ${activeIndex === index ? "active" : ""
                                    }`}
                                key={index}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="home-five-accordion-question">
                                    {item.question}
                                    <span className="home-five-arrow">
                                        {activeIndex === index ? <GoArrowDownLeft/> : <GoArrowDownLeft/>}
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <div className="home-five-accordion-answer">{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="home-five-image-container">
                        <img
                            src={images.HomeAnswer}
                            alt="Furniture"
                            className="home-five-accordion-image"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeAnswer
