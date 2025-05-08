import React from 'react'
import { Home } from './pages/Home/Home.jsx'
import Navbar from './components/Navbar/index.jsx'
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact/Contact.jsx'
import About from './pages/About/About.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Shop from './pages/Shop/Shop.jsx'
import SingleBlog from './pages/Blog/SingleBlog.jsx'
import Product from './pages/Shop/Product.jsx'
import Cart from './pages/Cart/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  )
}

export default App
