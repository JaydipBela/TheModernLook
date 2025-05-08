
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeProduct.css';
import images from "../../../assets/images.js";


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const HomeProduct = () => {
    const collectionItems = [
        {
            _id: "1",
            name: "Modern Wooden Chair",
            decore: "Home Decoration",
            price: 12999,
            orn_price: 15999,
            onSale: true,
            description: "Elegant wooden chair with comfortable cushioning, perfect for your living room. Made from high-quality oak wood with premium fabric upholstery. The ergonomic design provides excellent back support while the classic style complements any interior décor.",
            images: [images.product1, images.product2 ,images.product1, images.product2 ]
          },
          {
            _id: "2",
            name: "Minimalist Coffee Table",
            decore: "Indoor Decoration",
            price: 8999,
            orn_price: 10999,
            onSale: false,
            description: "Sleek coffee table with a modern design that complements any interior. Features a tempered glass top with a sturdy metal frame. The minimalist aesthetic makes it a versatile addition to your living room while providing ample surface area for books, drinks, and decorative items.",
            images: [images.product3, images.product4 ,images.product1, images.product2]
          },
          {
            _id: "3",
            name: "Elegant Floor Lamp",
            decore: "Home Decoration",
            price: 5999,
            orn_price: 7999,
            onSale: true,
            description: "Stylish floor lamp that provides warm lighting for your living space. The adjustable height and direction allow you to create the perfect ambiance. The brass finish adds a touch of elegance while the energy-efficient LED bulb ensures low power consumption.",
            images: [images.product5, images.product6 ,images.product1, images.product2]
          },
          {
            _id: "4",
            name: "Decorative Wall Mirror",
            decore: "Indoor Decoration",
            price: 4599,
            orn_price: 5999,
            onSale: false,
            description: "Beautiful wall mirror with an ornate frame to enhance your wall decor. The intricate detailing on the frame adds a touch of sophistication to any room. The high-quality mirror provides a clear reflection and creates an illusion of more space.",
            images: [images.product1, images.product3, images.product1, images.product2]
          },
          {
            _id: "5",
            name: "Outdoor Patio Set",
            decore: "Outdoor Decoration",
            price: 24999,
            orn_price: 29999,
            onSale: true,
            description: "Durable and stylish patio furniture set for your outdoor space. Includes a table and four chairs made from weather-resistant materials. The comfortable cushions are removable and washable, making maintenance easy while providing optimal comfort for outdoor gatherings.",
            images: [images.product2, images.product4,images.product1, images.product2]
          },
          {
            _id: "6",
            name: "Executive Office Desk",
            decore: "Office Decoration",
            price: 18999,
            orn_price: 22999,
            onSale: false,
            description: "Professional office desk with ample storage and workspace. Features multiple drawers and compartments for organized storage. The spacious surface provides plenty of room for your computer, documents, and office accessories, enhancing productivity in your home office.",
            images: [images.product5, images.product1,images.product1, images.product2]
          }
    ];

const navigate = useNavigate();



  const handleClick = (id) => {
    
    navigate(`/shop/${id}`);
  };


  
    const swiperSettings = {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            clickable: true,
        },
        navigation: true,
        modules: [Pagination, Navigation, Autoplay],
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    };

    return (
        <div className="home-fourth-luxurious-collection">
            <h2 className="home-fourth-section-title">Explore Our Luxurious Haven Collection</h2>
            <div className="home-fourth-collection-slider">
                <Swiper
                    {...swiperSettings}
                    className="home-fourth-swiper"
                >
                    {collectionItems.map((item) => (
                        <SwiperSlide key={item._id}>
                            <div className="home-fourth-collection-card" onClick={() => handleClick(item._id)}>
                                <div className="home-fourth-image-wrapper">
                                    <img
                                        src={item.images[0]}
                                        alt={item.name}
                                        className="home-fourth-collection-image"
                                        loading="lazy"
                                    />
                                    {item.onSale && <span className="home-fourth-on-sale">On Sale</span>}
                                </div>
                                <div className="home-fourth-card-content">
                                    <p className="home-fourth-category">{item.decore}</p>
                                    <h3 className="home-fourth-title">{item.name}</h3>
                                    <p className="home-fourth-price">
                                        ₹{item.price}
                                        {item.orn_price > item.price &&
                                            <span className='home-fourth-price1' style={{textDecoration: 'line-through', marginLeft: '5px'}}>
                                                ₹{item.orn_price}
                                            </span>
                                        }
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeProduct;
