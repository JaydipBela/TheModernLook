import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeBlog.css";
import images from "../../../assets/images.js";

const HomeBlog = () => {
  const navigate = useNavigate();

  // Static blog data
  const blogData = [
    {
      id: 1,
      title: "Modern Interior Design Trends for 2023",
      subtitle: "Transform your space with these contemporary design ideas",
      content: "Interior design is constantly evolving, and staying updated with the latest trends can help you create a stylish and modern living space. In 2023, we're seeing a shift towards sustainable materials, biophilic design, and multifunctional spaces. Natural elements like wood, stone, and plants are being incorporated to create a connection with nature. Curved furniture and organic shapes are replacing sharp angles, while earthy tones and muted colors are dominating color palettes.",
      image: images.HomeB1,
      category: "Interior Design",
      author: "Sarah Johnson",
      date: "October 15, 2023",
      tags: ["Design", "Interior", "Trends"]
    },
    {
      id: 2,
      title: "How to Choose the Perfect Sofa for Your Living Room",
      subtitle: "A comprehensive guide to selecting the right centerpiece",
      content: "Choosing the right sofa is one of the most important decisions when furnishing your living room. It's not just about aesthetics; comfort, durability, and functionality are equally important. Consider the size of your space and measure doorways to ensure your new sofa will fit. Think about the frame material - hardwood frames like oak, beech, or ash are durable options. For upholstery, natural fibers like cotton and linen are breathable but may stain easily, while synthetic options offer better durability.",
      image: images.HomeB2,
      category: "Furniture",
      author: "Michael Chen",
      date: "September 28, 2023",
      tags: ["Sofa", "Living Room", "Buying Guide"]
    },
    {
      id: 3,
      title: "Sustainable Furniture: Eco-Friendly Options for Conscious Living",
      subtitle: "Reduce your environmental impact without sacrificing style",
      content: "As environmental awareness grows, more homeowners are seeking sustainable furniture options. Eco-friendly furniture is made from renewable, recycled, or reclaimed materials with minimal environmental impact. Look for certifications like FSC (Forest Stewardship Council) for wood products or GREENGUARD for low chemical emissions. Consider pieces made from bamboo, reclaimed wood, or recycled metal. Many manufacturers now offer furniture with non-toxic finishes and upholstery made from organic or recycled fabrics.",
      image: images.HomeB3,
      category: "Sustainability",
      author: "Emma Rodriguez",
      date: "August 12, 2023",
      tags: ["Eco-Friendly", "Sustainable", "Green Living"]
    },
    {
      id: 4,
      title: "Small Space Solutions: Maximizing Functionality in Compact Homes",
      subtitle: "Clever ideas for making the most of limited square footage",
      content: "Living in a small space doesn't mean sacrificing style or functionality. With thoughtful planning and smart furniture choices, you can create a comfortable and efficient home. Opt for multi-functional furniture like sofa beds, extendable dining tables, or ottomans with storage. Utilize vertical space with tall bookcases and wall-mounted shelves. Choose light colors to make rooms feel larger and incorporate mirrors to create the illusion of more space. Consider furniture with exposed legs to create a sense of openness.",
      image: images.HomeB4,
      category: "Space Planning",
      author: "David Thompson",
      date: "July 5, 2023",
      tags: ["Small Spaces", "Storage", "Functionality"]
    }
  ];

  // State for selected blog
  const [selectedBlog, setSelectedBlog] = useState(blogData[0]);
  const [animate, setAnimate] = useState(false);

  // Truncate text function
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const handleBlogClick = (blog) => {
    if (blog.id !== selectedBlog.id) {
      setAnimate(true);
      setTimeout(() => {
        setSelectedBlog(blog);
        setAnimate(false);
      }, 500);
    }
  };

  const navigateToBlog = (blogId, event) => {
    event.stopPropagation(); // Prevent triggering the parent onClick
    navigate(`/blog/${blogId}`);
  };

  // Brand logos section data
  const brandItems = [
    {
      id: 1,
      title: "Luxury Furniture",
      icon: "furniture",
      image: images.HomeB1
    },
    {
      id: 2,
      title: "Modern Design",
      icon: "design",
      image: images.HomeB2
    },
    {
      id: 3,
      title: "Quality Materials",
      icon: "materials",
      image: images.HomeB3
    },
    {
      id: 4,
      title: "Expert Craftsmanship",
      icon: "craftsmanship",
      image: images.HomeB4
    },
    {
      id: 5,
      title: "Customer Satisfaction",
      icon: "satisfaction",
      image: images.HomeB5
    },
  ];

  return (
    <>
      <section className="home-eight-blog-section">
        <div className="home-eight-blog-overlay"></div>
        <div className="home-eight-blog-header">
          <h6>GET THE LATEST NEWS</h6>
          <h2>Visit Our Blog</h2>
        </div>

        <div className="home-eight-blog-container">
          {/* Left Side Featured Blog */}
          <div className={`home-eight-featured-blog ${animate ? "fade-in" : ""}`}>
            <div className="home-eight-featured-image">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                loading="lazy"
              />
            </div>
            <div className="home-eight-featured-content">
              <div className="blog-meta-info">
                <p className="blog-date">
                  {selectedBlog.date} - <span>By {selectedBlog.author}</span>
                </p>
                <span className="blog-category">{selectedBlog.category}</span>
              </div>
              <h3>{selectedBlog.title}</h3>
              <h4 className="blog-subtitle">{selectedBlog.subtitle}</h4>

              <div className="blog-content-preview">
                <p>{truncateText(selectedBlog.content, 180)}</p>
              </div>

              <div className="blog-tags">
                {selectedBlog.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">{tag}</span>
                ))}
              </div>

              <button
                className="read-more-btn"
                onClick={(e) => navigateToBlog(selectedBlog.id, e)}
              >
                Read More
              </button>
            </div>
          </div>

          {/* Right Side Blog List */}
          <div className="home-eight-blog-list">
            {blogData.map((blog) => (
              <div
                className={`home-eight-blog-card ${selectedBlog.id === blog.id ? 'active' : ''}`}
                key={blog.id}
                onClick={() => handleBlogClick(blog)}
              >
                <div className="home-eight-blog-card-image">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                  />
                </div>
                <div className="home-eight-blog-details">
                  <div className="blog-meta-info small">
                    <p className="blog-date">{blog.date}</p>
                    <span className="blog-category small">{blog.category}</span>
                  </div>
                  <h4>{truncateText(blog.title, 40)}</h4>
                  <p className="blog-subtitle small">{truncateText(blog.subtitle, 60)}</p>

                  {/* <div className="blog-content-preview small">
                    <p>{truncateText(blog.content, 80)}</p>
                  </div> */}

                  <div className="blog-tags small">
                    {blog.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="blog-tag small">{tag}</span>
                    ))}
                  </div>

                  <button
                    className="read-more-btn small"
                    onClick={(e) => navigateToBlog(blog.id, e)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="home-eight">
        {brandItems.map((item) => (
        
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
    </>
  );
};

export default HomeBlog;
