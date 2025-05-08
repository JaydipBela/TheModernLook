import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import "./Shop.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonHero from "../../components/CommonHero/CommonHero";
import images from "../../assets/images";
import AddToCart from "../../components/AddToCart/AddToCart";

const Shop = () => {
  const navigate = useNavigate();

  const staticProducts = [
    {
      _id: "1",
      name: "Modern Wooden Chair",
      decore: "Home Decoration",
      price: 12999,
      orn_price: 15999,
      onSale: true,
      description: "Elegant wooden chair with comfortable cushioning, perfect for your living room.",
      images: [images.product1, images.product2]
    },
    {
      _id: "2",
      name: "Minimalist Coffee Table",
      decore: "Indoor Decoration",
      price: 8999,
      orn_price: 10999,
      onSale: false,
      description: "Sleek coffee table with a modern design that complements any interior.",
      images: [images.product3, images.product4]
    },
    {
      _id: "3",
      name: "Elegant Floor Lamp",
      decore: "Home Decoration",
      price: 5999,
      orn_price: 7999,
      onSale: true,
      description: "Stylish floor lamp that provides warm lighting for your living space.",
      images: [images.product5, images.product6]
    },
    {
      _id: "4",
      name: "Decorative Wall Mirror",
      decore: "Indoor Decoration",
      price: 4599,
      orn_price: 5999,
      onSale: false,
      description: "Beautiful wall mirror with an ornate frame to enhance your wall decor.",
      images: [images.product1, images.product3]
    },
    {
      _id: "5",
      name: "Outdoor Patio Set",
      decore: "Outdoor Decoration",
      price: 24999,
      orn_price: 29999,
      onSale: true,
      description: "Durable and stylish patio furniture set for your outdoor space.",
      images: [images.product2, images.product4]
    },
    {
      _id: "6",
      name: "Executive Office Desk",
      decore: "Office Decoration",
      price: 18999,
      orn_price: 22999,
      onSale: false,
      description: "Professional office desk with ample storage and workspace.",
      images: [images.product5, images.product1]
    },
    {
      _id: "7",
      name: "Vintage Bookshelf",
      decore: "Home Decoration",
      price: 15999,
      orn_price: 19999,
      onSale: true,
      description: "Classic bookshelf with a vintage design, perfect for displaying books and decor items.",
      images: [images.product3, images.product6]
    },
    {
      _id: "8",
      name: "Modern Dining Table",
      decore: "Indoor Decoration",
      price: 21999,
      orn_price: 25999,
      onSale: false,
      description: "Contemporary dining table that seats up to six people comfortably.",
      images: [images.product4, images.product2]
    }
  ];

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".products-container",
          start: "top 65%",
          end: "bottom 56%",
        },
      }
    );
  }, []);

  const handleClick = (id) => {
    navigate(`/shop/${id}`);
  };


  return (
    <>
      <CommonHero title="Shop" navlink="shop" subtitle="home" image={images.Contact} />
      <div className="shop-container">
        <div className="products-container-full">
          {staticProducts.map((product) => (
            <div
              key={product._id}
              className="product-card"
              onClick={() => handleClick(product._id)}
            >
              <div className="product-card-image">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="main-image"
                />
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="hover-image"
                />

                <div className="product-actions">
                  <AddToCart
                    product={product}
                    buttonText=""
                    className="product-actions-add-to-cart-container cartsize "
                  />
                  <button className="product-actions-like-button">
                    <FaRegHeart />
                  </button>
                  <button className="product-actions-search-button">
                    <IoIosSearch />
                  </button>
                </div>
              </div>
              <div className="product-card-content">
                <p className="product-category">{product.decore}</p>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                  ₹{product.price}{" "}
                  <span className="original-price">₹{product.orn_price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
