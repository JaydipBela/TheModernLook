import React, { useState } from "react";
import "./Blog.css";
import { Link, useNavigate } from "react-router-dom";
import { PiStarFour } from "react-icons/pi";
import { FaSearch, FaPlus } from "react-icons/fa";
import CommonHero from "../../components/CommonHero/CommonHero.jsx";
import images from "../../assets/images.js";

const Blog = () => {


  // Static blog data
  const staticBlogs = [
    {
      id: 1,
      title: "Modern Interior Design Trends for 2023",
      subtitle: "Transform your space with these contemporary design ideas",
      content: "Interior design is constantly evolving, and staying updated with the latest trends can help you create a stylish and modern living space. In 2023, we're seeing a shift towards sustainable materials, biophilic design, and multifunctional spaces. Natural elements like wood, stone, and plants are being incorporated to create a connection with nature. Curved furniture and organic shapes are replacing sharp angles, while earthy tones and muted colors are dominating color palettes.",
      image: images.HomeB1,
      authorName: "Sarah Johnson",
      createdAt: "2023-10-15",
      category: "Interior Design",
      tags: ["Design", "Interior", "Trends"]
    },
    {
      id: 2,
      title: "How to Choose the Perfect Sofa for Your Living Room",
      subtitle: "A comprehensive guide to selecting the right centerpiece",
      content: "Choosing the right sofa is one of the most important decisions when furnishing your living room. It's not just about aesthetics; comfort, durability, and functionality are equally important. Consider the size of your space and measure doorways to ensure your new sofa will fit. Think about the frame material - hardwood frames like oak, beech, or ash are durable options. For upholstery, natural fibers like cotton and linen are breathable but may stain easily, while synthetic options offer better durability.",
      image: images.HomeB2,
      authorName: "Michael Chen",
      createdAt: "2023-09-28",
      category: "Furniture",
      tags: ["Sofa", "Living Room", "Buying Guide"]
    },
    {
      id: 3,
      title: "Sustainable Furniture: Eco-Friendly Options for Conscious Living",
      subtitle: "Reduce your environmental impact without sacrificing style",
      content: "As environmental awareness grows, more homeowners are seeking sustainable furniture options. Eco-friendly furniture is made from renewable, recycled, or reclaimed materials with minimal environmental impact. Look for certifications like FSC (Forest Stewardship Council) for wood products or GREENGUARD for low chemical emissions. Consider pieces made from bamboo, reclaimed wood, or recycled metal. Many manufacturers now offer furniture with non-toxic finishes and upholstery made from organic or recycled fabrics.",
      image: images.HomeB3,
      authorName: "Emma Rodriguez",
      createdAt: "2023-08-12",
      category: "Sustainability",
      tags: ["Eco-Friendly", "Sustainable", "Green Living"]
    },
    {
      id: 4,
      title: "Small Space Solutions: Maximizing Functionality in Compact Homes",
      subtitle: "Clever ideas for making the most of limited square footage",
      content: "Living in a small space doesn't mean sacrificing style or functionality. With thoughtful planning and smart furniture choices, you can create a comfortable and efficient home. Opt for multi-functional furniture like sofa beds, extendable dining tables, or ottomans with storage. Utilize vertical space with tall bookcases and wall-mounted shelves. Choose light colors to make rooms feel larger and incorporate mirrors to create the illusion of more space. Consider furniture with exposed legs to create a sense of openness.",
      image: images.HomeB4,
      authorName: "David Thompson",
      createdAt: "2023-07-05",
      category: "Space Planning",
      tags: ["Small Spaces", "Storage", "Functionality"]
    },
    {
      id: 5,
      title: "The Art of Mixing Vintage and Modern Furniture",
      subtitle: "Create a unique and personalized interior style",
      content: "Combining vintage and modern furniture creates a dynamic, personalized space that tells your story. The key is finding balance - pair a sleek modern sofa with a vintage coffee table, or place contemporary art above an antique sideboard. Look for complementary colors and materials that create harmony between different eras. Don't be afraid to refinish vintage pieces to better integrate them with your modern items. Remember that contrast creates interest, so embrace the tension between old and new for a curated, collected-over-time aesthetic.",
      image: images.HomeB5,
      authorName: "Alexandra Peters",
      createdAt: "2023-06-20",
      category: "Style Mix",
      tags: ["Vintage", "Modern", "Eclectic"]
    },
    {
      id: 6,
      title: "Creating the Perfect Home Office: Productivity and Comfort",
      subtitle: "Design a workspace that enhances focus and well-being",
      content: "With remote work becoming increasingly common, creating an effective home office is essential. Start with ergonomics - invest in a quality chair and position your desk at the right height. Natural light boosts productivity, so place your desk near a window if possible. Incorporate plants to improve air quality and reduce stress. Choose a color scheme that promotes focus - blues and greens are calming, while accents of yellow can stimulate creativity. Don't forget storage solutions to keep your workspace organized and clutter-free.",
      image: images.HomeB6,
      authorName: "James Wilson",
      createdAt: "2023-05-15",
      category: "Home Office",
      tags: ["Workspace", "Productivity", "Ergonomics"]
    }
  ];

  // Static categories
  const staticCategories = [
    "Interior Design",
    "Furniture",
    "Style Mix",
    "Home Office"

  ];

  

  return (
    <>
      <div className="blog-page">
        <CommonHero title="Blog" navlink="Blog" subtitle="Home" image={images.HomeComport} />
        <div className="main-content">
          <div className="blog-center">
           
              <div className="blog-posts">
                {staticBlogs.map((blog) => (
                  <div key={blog.id} className="blog-card">
                    <div className="blog-image">
                      <img
                        src={blog.image}
                        alt={blog.title}
                      />
                    </div>
                    <div className="blog-info">
                      <div>
                        <span className="blog-date"> {blog.createdAt} - <span>{blog.authorName}</span></span>
                      </div>
                      <div className="blog-title-container">
                        <h1 className="blog-title" style={{fontSize:"30px"}}>{blog.title}</h1>
                        <h1 className="blog-title1">{blog.subtitle}</h1>
                      </div>

                      <p className="blog-description">
                        {blog.content.length > 150
                          ? `${blog.content.substring(0, 150)}...`
                          : blog.content}
                      </p>
                      <Link to={`/blog/${blog.id}`} className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            
          </div>
          <div className="sidebar1">
            <div className="search-bar">
              <form>
                <input
                  type="text"
                  placeholder="Enter Keyword"
 
                />
                <button type="submit">
                  <FaSearch />
                </button>
              </form>
            </div>

            <div className="recent-posts">
              <h3>Recent Posts</h3>
              <div className="recpost">
                {staticBlogs.slice(0, 3).map((blog) => (
                  <div className="recpostch1" key={blog.id}>
                    <div className="rec-img">
                      <img src={blog.image} alt={blog.title} />
                    </div>
                    <div className="recpost-data">
                      <span className="rec-date">{blog.createdAt} <span> - {blog.authorName}</span></span>
                      <div>
                        <Link style={{textDecoration: "none", color:"white"}} to={`/blog/${blog.id}`}>{blog.title}</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li>
                  <PiStarFour className="iconstar" />All Categories

                </li>
                {staticCategories.map((category) => (
                  <li key={category}>
                    <PiStarFour className="iconstar" />{category}
                  </li>
                ))}
            
              </ul>
            </div>



            <div className="add-off">
              <img src={images.HomeB5} alt="Special Offer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
