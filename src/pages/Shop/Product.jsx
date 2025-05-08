import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import "./Product.css";
import { FaTruck, FaClock, FaLock } from "react-icons/fa";
import images from "../../assets/images.js";
import AddToCart from "../../components/AddToCart/AddToCart";

const Product = () => {
  const { id } = useParams();

  // Static products data
  const staticProducts = [
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

  // Static reviews data
  const staticReviews = [
    {
      username: "Michael Chen",
      rating: 5,
      comment: "Exceptional quality and craftsmanship! The furniture piece I purchased has transformed my living space completely. The attention to detail and the premium materials used make it stand out.",
      date: "2023-11-15",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      username: "Sophia Rodriguez",
      rating: 4,
      comment: "I've been searching for the perfect piece for months, and I finally found it here. The design is elegant yet practical, and the quality is superb. Delivery was prompt, and assembly was straightforward.",
      date: "2023-10-28",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      username: "James Wilson",
      rating: 5,
      comment: "The customer experience was seamless from browsing to delivery. The website made it easy to find exactly what I was looking for, and the virtual room planner helped me visualize how it would look in my space.",
      date: "2023-10-05",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      username: "Emily Johnson",
      rating: 3,
      comment: "Good quality product but took longer than expected to arrive. The color is slightly different from what was shown online, but overall I'm satisfied with my purchase.",
      date: "2023-09-20",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState(staticReviews);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [averageRating, setAverageRating] = useState(4.2);

  const getProduct = () => {
    try {
      // Find the product with the matching id
      const foundProduct = staticProducts.find(p => p._id === id);

      if (!foundProduct) {
        console.error("Product not found");
        return;
      }

      setProduct(foundProduct);
      setSelectedImage(foundProduct.images[0]);
      setLoading(false);


    } catch (error) {
      console.error("Error setting product:", error);
    }
  };



  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };



  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) {
      return 0;
    }
    const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    return avg.toFixed(1);
  };


  const handleAddReview = () => {
    if (!newReview.trim() || newRating < 1 || newRating > 5) {
      alert("Please add a valid review and rating (1-5).");
      return;
    }

    // Get current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split('T')[0];

    const newReviewObj = {
      username: "You",
      comment: newReview.trim(),
      rating: newRating,
      date: currentDate,
      avatar: "https://randomuser.me/api/portraits/lego/1.jpg" // Default avatar for user
    };

    const updatedReviews = [...reviews, newReviewObj];
    setReviews(updatedReviews);
    setNewReview("");
    setNewRating(5);

    const newAvg = calculateAverageRating(updatedReviews);
    setAverageRating(newAvg);

    alert("Review submitted successfully!");
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="single-product-container">
      <div className="single-product-detail">
        <div className="single-product-image-gallery">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className={`single-product-gallery-thumbnail ${
                selectedImage === image ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>

        <div className="single-product-main-content">
          <img
            className="single-product-main-image"
            src={selectedImage}
            alt={product.name}
          />
          <div className="single-product-details">
            <h1>{product.name}</h1>
            <p className="single-product-rating">
              review <GoStarFill /> {averageRating}
            </p>

            <p className="single-product-availability">
              Availability : Hurry, Only left 10 items in stock{" "}
            </p>
            <p className="single-product-description">{product.description}</p>
            <p className="single-product-price">
              Price: ₹{product.price}{" "}
              <span className="single-product-orginal">
                {" "}
                ₹ {product.orn_price}
              </span>
            </p>
            <AddToCart
              product={product}
              showQuantity={true}
              className="single-product-add-to-cart-container"
            />
            <div className="single-product-subdec">
              <p className="deliver  dev">
                <FaTruck color="#28a745" /> Easy 7-day return and refund
                available.
              </p>
              <p className="dev">
                <FaClock color="#ff9800" /> <strong>Availability:</strong> Open
                24 Hours, 7 Days a Week
                <span className="single-product-avablity"> 24/7</span> Service
                Available
              </p>
              <p className="dev">
                <FaLock color="#007bff" /> <strong>Payment Security:</strong> We
                ensure
                <span> 100% secure payment</span> with SSL encryption.
              </p>
            </div>
          </div>
        </div>
      </div>





<div className="single-product-review-section">
  <h2>Customer Reviews</h2>

  {/* Rating Summary */}
  <div className="single-product-rating-summary">
    <div className="rating-score">
      <span className="big-rating">{averageRating}</span>
      <div className="star-display">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`summary-star ${i < Math.round(averageRating) ? "filled" : ""}`}>★</span>
        ))}
      </div>
    </div>
    <p className="review-count">
      Based on {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
    </p>
  </div>

  {/* Add Review Section */}
  <div className="single-product-add-review-section">
    <h3>Share Your Experience</h3>
    <div className="review-input-group">
      <textarea
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
        placeholder="Write your review here... What did you like or dislike about this product?"
        rows="4"
      />
      <div className="rating-input">
        <span>Your Rating: </span>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`star ${i < newRating ? "selected" : ""}`}
            onClick={() => setNewRating(i + 1)}
          >
            ★
          </span>
        ))}
      </div>
      <button className="submit-review-button" onClick={handleAddReview}>
        Submit Review
      </button>
    </div>
  </div>

  {/* Scrollable Review List */}
  <div className="single-product-review-list">
    <h3 className="reviews-title">What Customers Are Saying</h3>
    {reviews.length > 0 ? (
      <div className="single-product-review-container">
        {reviews.slice().reverse().map((review, index) => (
          <div key={index} className="single-product-review-item">
            <div className="review-header">
              <div className="reviewer-info">
                <img
                  src={review.avatar}
                  alt={review.username}
                  className="reviewer-avatar"
                />
                <div className="reviewer-details">
                  <h4>{review.username || "Anonymous"}</h4>
                  <span className="review-date">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
              <div className="review-rating-display">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`review-star ${i < review.rating ? "filled" : ""}`}>★</span>
                ))}
              </div>
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    ) : (
      <p className="no-reviews">No reviews yet. Be the first to share your experience!</p>
    )}
  </div>
</div>
    </div>
  );
};

export default Product;
