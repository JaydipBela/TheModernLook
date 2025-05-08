import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./SingleBlog.css";
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag, FaFolder } from "react-icons/fa";
import CommonHero from "../../components/CommonHero/CommonHero";
import images from "../../assets/images.js";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  const staticBlogs = [
    {
      id: 1,
      title: "Modern Interior Design Trends for 2023",
      subtitle: "Transform your space with these contemporary design ideas",
      content: "Interior design is constantly evolving, and staying updated with the latest trends can help you create a stylish and modern living space. In 2023, we're seeing a shift towards sustainable materials, biophilic design, and multifunctional spaces. Natural elements like wood, stone, and plants are being incorporated to create a connection with nature. Curved furniture and organic shapes are replacing sharp angles, while earthy tones and muted colors are dominating color palettes.Interior design is constantly evolving, and staying updated with the latest trends can help you create a stylish and modern living space. In 2023, we're seeing a shift towards sustainable materials, biophilic design, and multifunctional spaces. Natural elements like wood, stone, and plants are being incorporated to create a connection with nature. Curved furniture and organic shapes are replacing sharp angles, while earthy tones and muted colors are dominating color palettes.Interior design is constantly evolving, and staying updated with the latest trends can help you create a stylish and modern living space. In 2023, we're seeing a shift towards sustainable materials, biophilic design, and multifunctional spaces. Natural elements like wood, stone, and plants are being incorporated to create a connection with nature. Curved furniture and organic shapes are replacing sharp angles, while earthy tones and muted colors are dominating color palettes.Interior design is constantly evolving, and staying updated with the latest trends can help you create a stylish and modern living space. In 2023, we're seeing a shift towards sustainable materials, biophilic design, and multifunctional spaces. Natural elements like wood, stone, and plants are being incorporated to create a connection with nature. Curved furniture and organic shapes are replacing sharp angles, while earthy tones and muted colors are dominating color palettes.Interior design is constantly evolving, and staying updated with the latest trends can help you create a stylish and modern living space. In 2023, we're seeing a shift towards sustainable materials, biophilic design, and multifunctional spaces. Natural elements like wood, stone, and plants are being incorporated to create a connection with nature. Curved furniture and organic shapes are replacing sharp angles, while earthy tones and muted colors are dominating color palettes.Interior design is constantly evolving, and staying updated with the latest trends can help you create a stylish and modern living space. In 2023, we're seeing a shift towards sustainable materials, biophilic design, and multifunctional spaces. Natural elements like wood, stone, and plants are being incorporated to create a connection with nature. Curved furniture and organic shapes are replacing sharp angles, while earthy tones and muted colors are dominating color palettes.",
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
      content: "Choosing the right sofa is one of the most important decisions when furnishing your living room. It's not just about aesthetics; comfort, durability, and functionality are equally important. Consider the size of your space and measure doorways to ensure your new sofa will fit. Think about the frame material - hardwood frames like oak, beech, or ash are durable options. For upholstery, natural fibers like cotton and linen are breathable but may stain easily, while synthetic options offer better durability.Choosing the right sofa is one of the most important decisions when furnishing your living room. It's not just about aesthetics; comfort, durability, and functionality are equally important. Consider the size of your space and measure doorways to ensure your new sofa will fit. Think about the frame material - hardwood frames like oak, beech, or ash are durable options. For upholstery, natural fibers like cotton and linen are breathable but may stain easily, while synthetic options offer better durability.Choosing the right sofa is one of the most important decisions when furnishing your living room. It's not just about aesthetics; comfort, durability, and functionality are equally important. Consider the size of your space and measure doorways to ensure your new sofa will fit. Think about the frame material - hardwood frames like oak, beech, or ash are durable options. For upholstery, natural fibers like cotton and linen are breathable but may stain easily, while synthetic options offer better durability.Choosing the right sofa is one of the most important decisions when furnishing your living room. It's not just about aesthetics; comfort, durability, and functionality are equally important. Consider the size of your space and measure doorways to ensure your new sofa will fit. Think about the frame material - hardwood frames like oak, beech, or ash are durable options. For upholstery, natural fibers like cotton and linen are breathable but may stain easily, while synthetic options offer better durability.Choosing the right sofa is one of the most important decisions when furnishing your living room. It's not just about aesthetics; comfort, durability, and functionality are equally important. Consider the size of your space and measure doorways to ensure your new sofa will fit. Think about the frame material - hardwood frames like oak, beech, or ash are durable options. For upholstery, natural fibers like cotton and linen are breathable but may stain easily, while synthetic options offer better durability.Choosing the right sofa is one of the most important decisions when furnishing your living room. It's not just about aesthetics; comfort, durability, and functionality are equally important. Consider the size of your space and measure doorways to ensure your new sofa will fit. Think about the frame material - hardwood frames like oak, beech, or ash are durable options. For upholstery, natural fibers like cotton and linen are breathable but may stain easily, while synthetic options offer better durability.Choosing the right sofa is one of the most important decisions when furnishing your living room. It's not just about aesthetics; comfort, durability, and functionality are equally important. Consider the size of your space and measure doorways to ensure your new sofa will fit. Think about the frame material - hardwood frames like oak, beech, or ash are durable options. For upholstery, natural fibers like cotton and linen are breathable but may stain easily, while synthetic options offer better durability.Choosing the right sofa is one of the most important decisions when furnishing your living room. It's not just about aesthetics; comfort, durability, and functionality are equally important. Consider the size of your space and measure doorways to ensure your new sofa will fit. Think about the frame material - hardwood frames like oak, beech, or ash are durable options. For upholstery, natural fibers like cotton and linen are breathable but may stain easily, while synthetic options offer better durability.",
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
      content: "As environmental awareness grows, more homeowners are seeking sustainable furniture options. Eco-friendly furniture is made from renewable, recycled, or reclaimed materials with minimal environmental impact. Look for certifications like FSC (Forest Stewardship Council) for wood products or GREENGUARD for low chemical emissions. Consider pieces made from bamboo, reclaimed wood, or recycled metal. Many manufacturers now offer furniture with non-toxic finishes and upholstery made from organic or recycled fabrics.As environmental awareness grows, more homeowners are seeking sustainable furniture options. Eco-friendly furniture is made from renewable, recycled, or reclaimed materials with minimal environmental impact. Look for certifications like FSC (Forest Stewardship Council) for wood products or GREENGUARD for low chemical emissions. Consider pieces made from bamboo, reclaimed wood, or recycled metal. Many manufacturers now offer furniture with non-toxic finishes and upholstery made from organic or recycled fabrics.As environmental awareness grows, more homeowners are seeking sustainable furniture options. Eco-friendly furniture is made from renewable, recycled, or reclaimed materials with minimal environmental impact. Look for certifications like FSC (Forest Stewardship Council) for wood products or GREENGUARD for low chemical emissions. Consider pieces made from bamboo, reclaimed wood, or recycled metal. Many manufacturers now offer furniture with non-toxic finishes and upholstery made from organic or recycled fabrics.As environmental awareness grows, more homeowners are seeking sustainable furniture options. Eco-friendly furniture is made from renewable, recycled, or reclaimed materials with minimal environmental impact. Look for certifications like FSC (Forest Stewardship Council) for wood products or GREENGUARD for low chemical emissions. Consider pieces made from bamboo, reclaimed wood, or recycled metal. Many manufacturers now offer furniture with non-toxic finishes and upholstery made from organic or recycled fabrics.As environmental awareness grows, more homeowners are seeking sustainable furniture options. Eco-friendly furniture is made from renewable, recycled, or reclaimed materials with minimal environmental impact. Look for certifications like FSC (Forest Stewardship Council) for wood products or GREENGUARD for low chemical emissions. Consider pieces made from bamboo, reclaimed wood, or recycled metal. Many manufacturers now offer furniture with non-toxic finishes and upholstery made from organic or recycled fabrics.As environmental awareness grows, more homeowners are seeking sustainable furniture options. Eco-friendly furniture is made from renewable, recycled, or reclaimed materials with minimal environmental impact. Look for certifications like FSC (Forest Stewardship Council) for wood products or GREENGUARD for low chemical emissions. Consider pieces made from bamboo, reclaimed wood, or recycled metal. Many manufacturers now offer furniture with non-toxic finishes and upholstery made from organic or recycled fabrics.As environmental awareness grows, more homeowners are seeking sustainable furniture options. Eco-friendly furniture is made from renewable, recycled, or reclaimed materials with minimal environmental impact. Look for certifications like FSC (Forest Stewardship Council) for wood products or GREENGUARD for low chemical emissions. Consider pieces made from bamboo, reclaimed wood, or recycled metal. Many manufacturers now offer furniture with non-toxic finishes and upholstery made from organic or recycled fabrics.As environmental awareness grows, more homeowners are seeking sustainable furniture options. Eco-friendly furniture is made from renewable, recycled, or reclaimed materials with minimal environmental impact. Look for certifications like FSC (Forest Stewardship Council) for wood products or GREENGUARD for low chemical emissions. Consider pieces made from bamboo, reclaimed wood, or recycled metal. Many manufacturers now offer furniture with non-toxic finishes and upholstery made from organic or recycled fabrics.As environmental awareness grows, more homeowners are seeking sustainable furniture options. Eco-friendly furniture is made from renewable, recycled, or reclaimed materials with minimal environmental impact. Look for certifications like FSC (Forest Stewardship Council) for wood products or GREENGUARD for low chemical emissions. Consider pieces made from bamboo, reclaimed wood, or recycled metal. Many manufacturers now offer furniture with non-toxic finishes and upholstery made from organic or recycled fabrics.As environmental awareness grows, more homeowners are seeking sustainable furniture options. Eco-friendly furniture is made from renewable, recycled, or reclaimed materials with minimal environmental impact. Look for certifications like FSC (Forest Stewardship Council) for wood products or GREENGUARD for low chemical emissions. Consider pieces made from bamboo, reclaimed wood, or recycled metal. Many manufacturers now offer furniture with non-toxic finishes and upholstery made from organic or recycled fabrics.",
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
      content: "Living in a small space doesn't mean sacrificing style or functionality. With thoughtful planning and smart furniture choices, you can create a comfortable and efficient home. Opt for multi-functional furniture like sofa beds, extendable dining tables, or ottomans with storage. Utilize vertical space with tall bookcases and wall-mounted shelves. Choose light colors to make rooms feel larger and incorporate mirrors to create the illusion of more space. Consider furniture with exposed legs to create a sense of openness.Living in a small space doesn't mean sacrificing style or functionality. With thoughtful planning and smart furniture choices, you can create a comfortable and efficient home. Opt for multi-functional furniture like sofa beds, extendable dining tables, or ottomans with storage. Utilize vertical space with tall bookcases and wall-mounted shelves. Choose light colors to make rooms feel larger and incorporate mirrors to create the illusion of more space. Consider furniture with exposed legs to create a sense of openness.Living in a small space doesn't mean sacrificing style or functionality. With thoughtful planning and smart furniture choices, you can create a comfortable and efficient home. Opt for multi-functional furniture like sofa beds, extendable dining tables, or ottomans with storage. Utilize vertical space with tall bookcases and wall-mounted shelves. Choose light colors to make rooms feel larger and incorporate mirrors to create the illusion of more space. Consider furniture with exposed legs to create a sense of openness.Living in a small space doesn't mean sacrificing style or functionality. With thoughtful planning and smart furniture choices, you can create a comfortable and efficient home. Opt for multi-functional furniture like sofa beds, extendable dining tables, or ottomans with storage. Utilize vertical space with tall bookcases and wall-mounted shelves. Choose light colors to make rooms feel larger and incorporate mirrors to create the illusion of more space. Consider furniture with exposed legs to create a sense of openness.Living in a small space doesn't mean sacrificing style or functionality. With thoughtful planning and smart furniture choices, you can create a comfortable and efficient home. Opt for multi-functional furniture like sofa beds, extendable dining tables, or ottomans with storage. Utilize vertical space with tall bookcases and wall-mounted shelves. Choose light colors to make rooms feel larger and incorporate mirrors to create the illusion of more space. Consider furniture with exposed legs to create a sense of openness.Living in a small space doesn't mean sacrificing style or functionality. With thoughtful planning and smart furniture choices, you can create a comfortable and efficient home. Opt for multi-functional furniture like sofa beds, extendable dining tables, or ottomans with storage. Utilize vertical space with tall bookcases and wall-mounted shelves. Choose light colors to make rooms feel larger and incorporate mirrors to create the illusion of more space. Consider furniture with exposed legs to create a sense of openness.Living in a small space doesn't mean sacrificing style or functionality. With thoughtful planning and smart furniture choices, you can create a comfortable and efficient home. Opt for multi-functional furniture like sofa beds, extendable dining tables, or ottomans with storage. Utilize vertical space with tall bookcases and wall-mounted shelves. Choose light colors to make rooms feel larger and incorporate mirrors to create the illusion of more space. Consider furniture with exposed legs to create a sense of openness.Living in a small space doesn't mean sacrificing style or functionality. With thoughtful planning and smart furniture choices, you can create a comfortable and efficient home. Opt for multi-functional furniture like sofa beds, extendable dining tables, or ottomans with storage. Utilize vertical space with tall bookcases and wall-mounted shelves. Choose light colors to make rooms feel larger and incorporate mirrors to create the illusion of more space. Consider furniture with exposed legs to create a sense of openness.Living in a small space doesn't mean sacrificing style or functionality. With thoughtful planning and smart furniture choices, you can create a comfortable and efficient home. Opt for multi-functional furniture like sofa beds, extendable dining tables, or ottomans with storage. Utilize vertical space with tall bookcases and wall-mounted shelves. Choose light colors to make rooms feel larger and incorporate mirrors to create the illusion of more space. Consider furniture with exposed legs to create a sense of openness.Living in a small space doesn't mean sacrificing style or functionality. With thoughtful planning and smart furniture choices, you can create a comfortable and efficient home. Opt for multi-functional furniture like sofa beds, extendable dining tables, or ottomans with storage. Utilize vertical space with tall bookcases and wall-mounted shelves. Choose light colors to make rooms feel larger and incorporate mirrors to create the illusion of more space. Consider furniture with exposed legs to create a sense of openness.",
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
      content: "Combining vintage and modern furniture creates a dynamic, personalized space that tells your story. The key is finding balance - pair a sleek modern sofa with a vintage coffee table, or place contemporary art above an antique sideboard. Look for complementary colors and materials that create harmony between different eras. Don't be afraid to refinish vintage pieces to better integrate them with your modern items. Remember that contrast creates interest, so embrace the tension between old and new for a curated, collected-over-time aesthetic.Combining vintage and modern furniture creates a dynamic, personalized space that tells your story. The key is finding balance - pair a sleek modern sofa with a vintage coffee table, or place contemporary art above an antique sideboard. Look for complementary colors and materials that create harmony between different eras. Don't be afraid to refinish vintage pieces to better integrate them with your modern items. Remember that contrast creates interest, so embrace the tension between old and new for a curated, collected-over-time aesthetic.Combining vintage and modern furniture creates a dynamic, personalized space that tells your story. The key is finding balance - pair a sleek modern sofa with a vintage coffee table, or place contemporary art above an antique sideboard. Look for complementary colors and materials that create harmony between different eras. Don't be afraid to refinish vintage pieces to better integrate them with your modern items. Remember that contrast creates interest, so embrace the tension between old and new for a curated, collected-over-time aesthetic.Combining vintage and modern furniture creates a dynamic, personalized space that tells your story. The key is finding balance - pair a sleek modern sofa with a vintage coffee table, or place contemporary art above an antique sideboard. Look for complementary colors and materials that create harmony between different eras. Don't be afraid to refinish vintage pieces to better integrate them with your modern items. Remember that contrast creates interest, so embrace the tension between old and new for a curated, collected-over-time aesthetic.Combining vintage and modern furniture creates a dynamic, personalized space that tells your story. The key is finding balance - pair a sleek modern sofa with a vintage coffee table, or place contemporary art above an antique sideboard. Look for complementary colors and materials that create harmony between different eras. Don't be afraid to refinish vintage pieces to better integrate them with your modern items. Remember that contrast creates interest, so embrace the tension between old and new for a curated, collected-over-time aesthetic.Combining vintage and modern furniture creates a dynamic, personalized space that tells your story. The key is finding balance - pair a sleek modern sofa with a vintage coffee table, or place contemporary art above an antique sideboard. Look for complementary colors and materials that create harmony between different eras. Don't be afraid to refinish vintage pieces to better integrate them with your modern items. Remember that contrast creates interest, so embrace the tension between old and new for a curated, collected-over-time aesthetic.Combining vintage and modern furniture creates a dynamic, personalized space that tells your story. The key is finding balance - pair a sleek modern sofa with a vintage coffee table, or place contemporary art above an antique sideboard. Look for complementary colors and materials that create harmony between different eras. Don't be afraid to refinish vintage pieces to better integrate them with your modern items. Remember that contrast creates interest, so embrace the tension between old and new for a curated, collected-over-time aesthetic.Combining vintage and modern furniture creates a dynamic, personalized space that tells your story. The key is finding balance - pair a sleek modern sofa with a vintage coffee table, or place contemporary art above an antique sideboard. Look for complementary colors and materials that create harmony between different eras. Don't be afraid to refinish vintage pieces to better integrate them with your modern items. Remember that contrast creates interest, so embrace the tension between old and new for a curated, collected-over-time aesthetic.Combining vintage and modern furniture creates a dynamic, personalized space that tells your story. The key is finding balance - pair a sleek modern sofa with a vintage coffee table, or place contemporary art above an antique sideboard. Look for complementary colors and materials that create harmony between different eras. Don't be afraid to refinish vintage pieces to better integrate them with your modern items. Remember that contrast creates interest, so embrace the tension between old and new for a curated, collected-over-time aesthetic.Combining vintage and modern furniture creates a dynamic, personalized space that tells your story. The key is finding balance - pair a sleek modern sofa with a vintage coffee table, or place contemporary art above an antique sideboard. Look for complementary colors and materials that create harmony between different eras. Don't be afraid to refinish vintage pieces to better integrate them with your modern items. Remember that contrast creates interest, so embrace the tension between old and new for a curated, collected-over-time aesthetic.Combining vintage and modern furniture creates a dynamic, personalized space that tells your story. The key is finding balance - pair a sleek modern sofa with a vintage coffee table, or place contemporary art above an antique sideboard. Look for complementary colors and materials that create harmony between different eras. Don't be afraid to refinish vintage pieces to better integrate them with your modern items. Remember that contrast creates interest, so embrace the tension between old and new for a curated, collected-over-time aesthetic.",
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
      content: "With remote work becoming increasingly common, creating an effective home office is essential. Start with ergonomics - invest in a quality chair and position your desk at the right height. Natural light boosts productivity, so place your desk near a window if possible. Incorporate plants to improve air quality and reduce stress. Choose a color scheme that promotes focus - blues and greens are calming, while accents of yellow can stimulate creativity. Don't forget storage solutions to keep your workspace organized and clutter-free.With remote work becoming increasingly common, creating an effective home office is essential. Start with ergonomics - invest in a quality chair and position your desk at the right height. Natural light boosts productivity, so place your desk near a window if possible. Incorporate plants to improve air quality and reduce stress. Choose a color scheme that promotes focus - blues and greens are calming, while accents of yellow can stimulate creativity. Don't forget storage solutions to keep your workspace organized and clutter-free.With remote work becoming increasingly common, creating an effective home office is essential. Start with ergonomics - invest in a quality chair and position your desk at the right height. Natural light boosts productivity, so place your desk near a window if possible. Incorporate plants to improve air quality and reduce stress. Choose a color scheme that promotes focus - blues and greens are calming, while accents of yellow can stimulate creativity. Don't forget storage solutions to keep your workspace organized and clutter-free.With remote work becoming increasingly common, creating an effective home office is essential. Start with ergonomics - invest in a quality chair and position your desk at the right height. Natural light boosts productivity, so place your desk near a window if possible. Incorporate plants to improve air quality and reduce stress. Choose a color scheme that promotes focus - blues and greens are calming, while accents of yellow can stimulate creativity. Don't forget storage solutions to keep your workspace organized and clutter-free.With remote work becoming increasingly common, creating an effective home office is essential. Start with ergonomics - invest in a quality chair and position your desk at the right height. Natural light boosts productivity, so place your desk near a window if possible. Incorporate plants to improve air quality and reduce stress. Choose a color scheme that promotes focus - blues and greens are calming, while accents of yellow can stimulate creativity. Don't forget storage solutions to keep your workspace organized and clutter-free.With remote work becoming increasingly common, creating an effective home office is essential. Start with ergonomics - invest in a quality chair and position your desk at the right height. Natural light boosts productivity, so place your desk near a window if possible. Incorporate plants to improve air quality and reduce stress. Choose a color scheme that promotes focus - blues and greens are calming, while accents of yellow can stimulate creativity. Don't forget storage solutions to keep your workspace organized and clutter-free.With remote work becoming increasingly common, creating an effective home office is essential. Start with ergonomics - invest in a quality chair and position your desk at the right height. Natural light boosts productivity, so place your desk near a window if possible. Incorporate plants to improve air quality and reduce stress. Choose a color scheme that promotes focus - blues and greens are calming, while accents of yellow can stimulate creativity. Don't forget storage solutions to keep your workspace organized and clutter-free.With remote work becoming increasingly common, creating an effective home office is essential. Start with ergonomics - invest in a quality chair and position your desk at the right height. Natural light boosts productivity, so place your desk near a window if possible. Incorporate plants to improve air quality and reduce stress. Choose a color scheme that promotes focus - blues and greens are calming, while accents of yellow can stimulate creativity. Don't forget storage solutions to keep your workspace organized and clutter-free.With remote work becoming increasingly common, creating an effective home office is essential. Start with ergonomics - invest in a quality chair and position your desk at the right height. Natural light boosts productivity, so place your desk near a window if possible. Incorporate plants to improve air quality and reduce stress. Choose a color scheme that promotes focus - blues and greens are calming, while accents of yellow can stimulate creativity. Don't forget storage solutions to keep your workspace organized and clutter-free.With remote work becoming increasingly common, creating an effective home office is essential. Start with ergonomics - invest in a quality chair and position your desk at the right height. Natural light boosts productivity, so place your desk near a window if possible. Incorporate plants to improve air quality and reduce stress. Choose a color scheme that promotes focus - blues and greens are calming, while accents of yellow can stimulate creativity. Don't forget storage solutions to keep your workspace organized and clutter-free.With remote work becoming increasingly common, creating an effective home office is essential. Start with ergonomics - invest in a quality chair and position your desk at the right height. Natural light boosts productivity, so place your desk near a window if possible. Incorporate plants to improve air quality and reduce stress. Choose a color scheme that promotes focus - blues and greens are calming, while accents of yellow can stimulate creativity. Don't forget storage solutions to keep your workspace organized and clutter-free.",
      image: images.HomeB6,
      authorName: "James Wilson",
      createdAt: "2023-05-15",
      category: "Home Office",
      tags: ["Workspace", "Productivity", "Ergonomics"]
    },
  
  ];

  useEffect(() => {
    // Find the blog with the matching id
    const numericId = parseInt(id);
    const foundBlog = staticBlogs.find(blog => blog.id === numericId);

    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      setError("Blog not found");
    }
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options).toUpperCase();
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!blog) {
    return <div className="not-found-message">Blog not found</div>;
  }

  return (
    <div className="single-blog-page">
      <div className="blog-banner">
        <CommonHero title="Blog Details" navlink="Blog Details" subtitle="Home" image={images.Contact} />
      </div>

      <div className="blog-featured-image">
        <img
          src={blog.image}
          alt={blog.title}
        />
        <div className="featured-image-overlay">
          <div className="overlay-content">
            <h1>{blog.title}</h1>
            {blog.subtitle && <h2>{blog.subtitle}</h2>}
          </div>
        </div>
      </div>

      <div className="single-blog-container">
        <div className="single-blog-content">
          <Link to="/blog" className="back-to-blogs">
            <FaArrowLeft /> Back to Blogs
          </Link>

          <div className="blog-header">
            <div className="blog-meta">
              <span className="blog-date">
                <FaCalendarAlt /> {formatDate(blog.createdAt)}
              </span>
              <span className="blog-author">
                <FaUser /> {blog.authorName}
              </span>
              {blog.category && (
                <span className="blog-category">
                  <FaFolder /> {blog.category}
                </span>
              )}
            </div>
          </div>

          <div className="blog-body">
            <div className="blog-text">
              {blog.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {blog.tags && blog.tags.length > 0 && (
              <div className="blog-tags">
                <span><FaTag /> Tags: </span>
                {blog.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="blog-sidebar">
          <div className="recent-posts-widget">
            <h3>Recent Posts</h3>
            <div className="recent-posts-list">
              {staticBlogs
                .filter(recentBlog => recentBlog.id !== parseInt(id))
                .slice(0, 5)
                .map(recentBlog => (
                  <div className="recent-post-item" key={recentBlog.id}>
                    <div className="recent-post-image">
                      <img
                        src={recentBlog.image}
                        alt={recentBlog.title}
                      />
                    </div>
                    <div className="recent-post-info">
                      <span className="recent-post-date">
                        {formatDate(recentBlog.createdAt)}
                      </span>
                      <Link to={`/blog/${recentBlog.id}`} className="recent-post-title">
                        {recentBlog.title}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
