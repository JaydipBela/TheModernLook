import React, { useEffect } from 'react';
import './Review.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Review = () => {

  const testimonials = [
    {
      id: 1,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident irure dolor in reprehende.",
      name: "Andria Cora",
      location: "America",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4
    },
    {
      id: 2,
      text: "Exceptional quality and craftsmanship! The furniture pieces I purchased have transformed my living space completely. The attention to detail and the premium materials used make these pieces stand out. Customer service was also outstanding throughout the entire process.",
      name: "Michael Chen",
      location: "Canada",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      id: 3,
      text: "I've been searching for the perfect dining set for months, and I finally found it here. The design is elegant yet practical, and the quality is superb. Delivery was prompt, and the assembly service was professional. I couldn't be happier with my purchase.",
      name: "Sophia Rodriguez",
      location: "Spain",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      rating: 5
    },
    {
      id: 4,
      text: "The customer experience was seamless from browsing to delivery. The website made it easy to find exactly what I was looking for, and the virtual room planner helped me visualize how the pieces would look in my space. Highly recommend!",
      name: "James Wilson",
      location: "Australia",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 4
    }
  ];

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "star filled" : "star"}
      />
    ));
  };

  return (
    <div className="review-container">
      <div className="review-inner">
        <div className="review-header">
          <span className="review-subtitle">TESTIMONIAL TIME</span>
          <h2 className="review-title">Our Customers Speak</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="review-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


        {/* Left and right navigation buttons */}
        <div className="swiper-button-prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div className="swiper-button-next">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>

        {/* Pagination dots */}
        <div className="swiper-pagination-container">
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Review;
