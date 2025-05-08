import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HomeEight.css";

const HomeEight = () => {
  const navigate = useNavigate();
  const items = [
    {
      id: 1,
      title: "/img/home-eight-svg-1.svg",
      image: "/img/Brand-Logo-BG-Images-01.jpg",
    },
    {
      id: 2,
      title: "/img/home-eight-svg-2.svg",
      image: "/img/Brand-Logo-BG-Images-02.jpg",
    },
    {
      id: 3,
      title: "/img/home-eight-svg-3.svg",
      image: "/img/Brand-Logo-BG-Images-03.jpg",
    },
    {
      id: 4,
      title: "/img/home-eight-svg-4.svg",
      image: "/img/Brand-Logo-BG-Images-04.jpg",
    },
    {
      id: 5,
      title: "/img/home-eight-svg-5.svg",
      image: "/img/Brand-Logo-BG-Images-05.jpg",
    },
  ];

  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Truncate text function
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  // Extract a preview from content
  const extractContentPreview = (content, maxLength = 150) => {
    if (!content) return '';
    // Remove any HTML tags if present
    const plainText = content.replace(/<[^>]*>/g, '');
    return truncateText(plainText, maxLength);
  };

  // Fetch recent blogs from API
  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/blogs/recent?limit=4");
        if (response.data.blogs && response.data.blogs.length > 0) {
          setBlogs(response.data.blogs);
          setSelectedBlog(response.data.blogs[0]);
        } else {
          setError("No blogs found");
        }
      } catch (error) {
        console.error("Error fetching recent blogs:", error);
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchRecentBlogs();
  }, []);

  const handleBlogClick = (blog) => {
    if (blog._id !== selectedBlog._id) {
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

  return (
    <>

      <section className="home-eight-blog-section">
        <div className="home-eight-blog-overlay"></div>
        <div className="home-eight-blog-header">
          <h6>GET THE LATEST NEWS</h6>
          <h2>Visit Our Blog</h2>
        </div>

        {loading ? (
          <div className="loading-container">
            <p>Loading blogs...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p>{error}</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="no-blogs-container">
            <p>No blogs available</p>
          </div>
        ) : (
          <div className="home-eight-blog-container">
            {/* Left Side Featured Blog */}
            {selectedBlog && (
              <div className={`home-eight-featured-blog ${animate ? "fade-in" : ""}`}>
                <div className="home-eight-featured-image">
                  <img
                    src={`http://localhost:3000/${selectedBlog.image}`}
                    alt={selectedBlog.title}
                  />
                </div>
                <div className="home-eight-featured-content">
                  <div className="blog-meta-info">
                    <p className="blog-date">
                      {formatDate(selectedBlog.createdAt)} - <span>By {selectedBlog.authorName}</span>
                    </p>
                    {selectedBlog.category && (
                      <span className="blog-category">{selectedBlog.category}</span>
                    )}
                  </div>
                  <h3>{selectedBlog.title}</h3>
                  <h4 className="blog-subtitle">{selectedBlog.subtitle}</h4>

                  <div className="blog-content-preview">
                    <p>{extractContentPreview(selectedBlog.content, 180)}</p>
                  </div>

                  {selectedBlog.tags && selectedBlog.tags.length > 0 && (
                    <div className="blog-tags">
                      {selectedBlog.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                  )}

                  <button
                    className="read-more-btn"
                    onClick={(e) => navigateToBlog(selectedBlog._id, e)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            )}

            {/* Right Side Blog List */}
            <div className="home-eight-blog-list">
              {blogs.map((blog) => (
                <div
                  className="home-eight-blog-card"
                  key={blog._id}
                  onClick={() => handleBlogClick(blog)}
                >
                  <div className="home-eight-blog-card-image">
                    <img
                      src={`http://localhost:3000/${blog.image}`}
                      alt={blog.title}
                    />
                  </div>
                  <div className="home-eight-blog-details">
                    <div className="blog-meta-info small">
                      <p className="blog-date">{formatDate(blog.createdAt)}</p>
                      {blog.category && (
                        <span className="blog-category small">{blog.category}</span>
                      )}
                    </div>
                    <h4>{truncateText(blog.title, 40)}</h4>
                    <p className="blog-subtitle small">{truncateText(blog.subtitle, 60)}</p>

                    <div className="blog-content-preview small">
                      <p>{extractContentPreview(blog.content, 80)}</p>
                    </div>

                    {blog.tags && blog.tags.length > 0 && (
                      <div className="blog-tags small">
                        {blog.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="blog-tag small">{tag}</span>
                        ))}
                      </div>
                    )}

                    <button
                      className="read-more-btn small"
                      onClick={(e) => navigateToBlog(blog._id, e)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      <div className="home-eight">
        {items.map((item) => (
          <div className="home-eight-card" key={item.id}>
            <div
              className="home-eight-card-image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="home-eight-card-overlay"></div>
            <div className="home-eight-card-title">
              <img src={item.title} alt={`SVG for ${item.id}`} className="title-svg" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeEight;
