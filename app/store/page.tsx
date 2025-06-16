'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  featured?: boolean;
  discount?: number;
}

interface Category {
  name: string;
  image: string;
  productCount: number;
}

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [cartCount, setCartCount] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [theme, setTheme] = useState('news');
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  // Custom cursor functions
  const enterButton = () => {
    document.body.style.cursor = 'pointer';
  };
  
  const leaveButton = () => {
    document.body.style.cursor = 'default';
  };
  
  // Track cursor position
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);
  
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Premium News Subscription",
      price: 9.99,
      image: "/images/store/premium.jpg",
      category: "Subscriptions",
      rating: 4.8,
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "YourVeryOwnNews Tote Bag",
      price: 24.99,
      image: "/images/store/tote.jpg",
      category: "Merchandise",
      rating: 4.5,
      inStock: true,
      featured: true
    },
    {
      id: 3,
      name: "Football Analysis eBook",
      price: 14.99,
      image: "/images/store/ebook.jpg",
      category: "eBooks",
      rating: 4.7,
      inStock: true,
      featured: true,
      discount: 20
    }
  ];
  
  const categories: Category[] = [
    { name: "Subscriptions", image: "/images/store/subscriptions.jpg", productCount: 3 },
    { name: "Merchandise", image: "/images/store/merchandise.jpg", productCount: 8 },
    { name: "eBooks", image: "/images/store/ebooks.jpg", productCount: 5 },
    { name: "Limited Edition", image: "/images/store/limited.jpg", productCount: 2 }
  ];
  
  const allProducts: Product[] = [
    ...featuredProducts,
    {
      id: 4,
      name: "YourVeryOwnNews Coffee Mug",
      price: 19.99,
      image: "/images/store/mug.jpg",
      category: "Merchandise",
      rating: 4.6,
      inStock: true
    },
    {
      id: 5,
      name: "Identity Building Guide",
      price: 12.99,
      image: "/images/store/guide.jpg",
      category: "eBooks",
      rating: 4.4,
      inStock: true
    },
    {
      id: 6,
      name: "Career Development Course",
      price: 49.99,
      image: "/images/store/course.jpg",
      category: "Subscriptions",
      rating: 4.9,
      inStock: true
    }
  ];
  
  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);
  
  const addToCart = (product: Product) => {
    setCartCount(prev => prev + 1);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    // Here you would typically add the product to a cart state or context
  };

  // Theme switcher function
  const toggleTheme = () => {
    setTheme(theme === 'news' ? 'night' : 'news');
  };

  // Get theme colors
  const getThemeColors = () => {
    return theme === 'news' 
      ? { primary: 'from-yellow-500 to-yellow-600', bg: 'bg-zinc-900', card: 'bg-zinc-800', text: 'text-white' }
      : { primary: 'from-purple-500 to-indigo-600', bg: 'bg-gray-900', card: 'bg-gray-800', text: 'text-white' };
  };

  const colors = getThemeColors();

  return (
    <main className={`${colors.bg} ${colors.text} min-h-screen transition-colors duration-500`}>
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              initial={{
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                backgroundColor: ['#FFD700', '#FF6347', '#4169E1', '#32CD32', '#FF69B4'][Math.floor(Math.random() * 5)]
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [1, 0],
                scale: [0, 1.5, 1],
                rotate: Math.random() * 360
              }}
              transition={{ duration: 2 + Math.random() * 1 }}
            />
          ))}
        </div>
      )}

      {/* Header with Cart - Simplified */}
      <header className={`sticky top-0 z-40 ${colors.bg}/95 backdrop-blur-sm border-b border-zinc-800 px-6 py-4`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.h1 
            className={`text-2xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
            whileHover={{ scale: 1.05 }}
          >
            The YVON Shop
          </motion.h1>
          
          <div className="flex items-center space-x-4">
            <motion.button 
              onClick={toggleTheme}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 bg-white"
            >
              {theme === 'news' ? '🌙' : '☀️'}
            </motion.button>
            
            <motion.button 
              className="relative p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`absolute -top-1 -right-1 bg-gradient-to-r ${colors.primary} text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold`}
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>
            
            <motion.button 
              className={`px-4 py-2 bg-gradient-to-r ${colors.primary} text-white rounded-xl font-medium`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          </div>
        </div>
      </header>

      {/* Interactive Hero Banner */}
      <section className="relative h-[500px] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-[url('/images/store/banner.jpg')] bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <div className="relative z-10 h-full flex flex-col justify-center px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.span 
              className={`inline-block px-3 py-1 bg-gradient-to-r ${colors.primary} text-white rounded-full text-sm font-medium mb-4`}
              whileHover={{ scale: 1.05 }}
            >
              Exclusive Collection
            </motion.span>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Your Story,<br />
              <motion.span 
                className={`bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Your Style
              </motion.span>
            </h2>
            
            <p className="text-xl max-w-xl mb-8 opacity-90">
              Discover products that tell your unique story and reflect your personal brand.
            </p>
            
            <motion.button 
              className={`px-8 py-4 bg-gradient-to-r ${colors.primary} text-white rounded-full font-bold text-lg shadow-lg`}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products - Interactive Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className={`text-4xl font-bold mb-12 bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent text-center`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Editor's Picks
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className={`${colors.card} rounded-2xl overflow-hidden shadow-lg group relative`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                onHoverStart={() => setIsHovering(product.id)}
                onHoverEnd={() => setIsHovering(null)}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"
                    whileHover={{ opacity: 0.8 }}
                  />
                  
                  <motion.div 
                    className="absolute inset-0 bg-zinc-800"
                    animate={{ 
                      scale: isHovering === product.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {product.discount && (
                    <motion.div 
                      className={`absolute top-4 right-4 z-20 bg-gradient-to-r ${colors.primary} px-3 py-2 rounded-full font-bold text-sm flex items-center gap-1`}
                      initial={{ rotate: -5 }}
                      animate={{ rotate: 5 }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <span className="text-lg">🔥</span>
                      <span>{product.discount}% OFF</span>
                    </motion.div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <div className="flex items-center">
                      <motion.span 
                        className={`text-gradient-to-r ${colors.primary} mr-1`}
                        animate={{ 
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ★
                      </motion.span>
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-5">{product.category}</p>
                  
                  <div className="flex justify-between items-center">
                    <motion.span 
                      className="text-2xl font-bold"
                      animate={{ 
                        color: isHovering === product.id ? "#FFD700" : "#FFFFFF",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      ${product.price.toFixed(2)}
                    </motion.span>
                    
                    <motion.button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className={`px-5 py-2 bg-gradient-to-r ${colors.primary} rounded-full text-white font-medium`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Interactive Tabs */}
      <section className={`py-20 px-6 ${colors.card}/30`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className={`text-4xl font-bold mb-12 bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent text-center`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Browse Collections
          </motion.h2>
          
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <div className="flex space-x-2 p-1 bg-black/20 backdrop-blur-sm rounded-full">
              <motion.button 
                onClick={() => setActiveCategory('All')}
                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === 'All' ? `bg-gradient-to-r ${colors.primary} text-white` : 'bg-transparent'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Products
              </motion.button>
              
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === category.name ? `bg-gradient-to-r ${colors.primary} text-white` : 'bg-transparent'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="wait">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  className={`${colors.card} rounded-xl overflow-hidden shadow-lg cursor-pointer`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"></div>
                    <div className="absolute inset-0 bg-zinc-800"></div>
                    {product.discount && (
                      <div className={`absolute top-2 right-2 z-20 bg-gradient-to-r ${colors.primary} px-2 py-1 rounded-md font-bold text-sm`}>
                        {product.discount}% OFF
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <div className="flex items-center">
                        <span className={`bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>★</span>
                        <span className="ml-1 text-sm">{product.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-3">{product.category}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                      <motion.button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className={`px-3 py-2 bg-gradient-to-r ${colors.primary} rounded-full text-white text-sm font-medium`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Newsletter - Interactive Form */}
      <section className="py-20 px-6">
        <motion.div 
          className={`max-w-3xl mx-auto ${colors.card} rounded-3xl p-10 shadow-xl overflow-hidden relative`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-20 h-20 rounded-full bg-gradient-to-r ${colors.primary} opacity-10`}
                initial={{
                  x: Math.random() * 100 - 50 + '%',
                  y: Math.random() * 100 - 50 + '%',
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  x: [null, Math.random() * 100 - 50 + '%'],
                  y: [null, Math.random() * 100 - 50 + '%'],
                }}
                transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, repeatType: "reverse" }}
              />
            ))}
          </div>
          
          <div className="relative z-10 text-center">
            <motion.h2 
              className={`text-3xl font-bold mb-4 bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join the Inner Circle
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Be the first to know about new releases, exclusive deals, and special events. Plus, get 15% off your first order!
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-5 py-3 bg-black/20 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              />
              <motion.button 
                className={`px-6 py-3 bg-white text-black rounded-full font-medium whitespace-nowrap overflow-hidden relative`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Product Modal - Enhanced */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className={`${colors.card} rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
                    animate={{ 
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                  />
                  
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div 
                      className="w-40 h-40 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <span className="text-4xl font-bold">${selectedProduct.price.toFixed(2)}</span>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute bottom-4 right-4 z-10 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {selectedProduct.inStock ? '✓ In Stock' : '× Out of Stock'}
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <motion.h3 
                      className="text-3xl font-bold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedProduct.name}
                    </motion.h3>
                    
                    <motion.button 
                      onClick={() => setSelectedProduct(null)} 
                      className="text-gray-400 hover:text-white"
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                      onMouseEnter={enterButton}
                      onMouseLeave={leaveButton}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>
                  
                  <motion.div 
                    className="flex items-center mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center mr-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <motion.span 
                            key={i} 
                            className={i < Math.floor(selectedProduct.rating) ? `bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent` : 'text-gray-500'}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                          >
                            ★
                          </motion.span>
                        ))}
                      </div>
                      <span className="ml-1">{selectedProduct.rating}</span>
                    </div>
                    <span className="text-gray-400">{selectedProduct.category}</span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-300 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    This exclusive {selectedProduct.name.toLowerCase()} is designed for true fans of YourVeryOwnNews. Crafted with premium materials and attention to detail, it's the perfect way to show your support and style.
                  </motion.p>
                  
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="font-bold mb-3">Why You'll Love It:</h4>
                    <ul className="space-y-2">
                      <motion.li 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <span className="inline-block w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs">✓</span>
                        <span>Premium quality materials</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <span className="inline-block w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs">✓</span>
                        <span>Exclusive design</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <span className="inline-block w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs">✓</span>
                        <span>Limited edition</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <span className="inline-block w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs">✓</span>
                        <span>Fast shipping</span>
                      </motion.li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div>
                      <span className="text-3xl font-bold">${selectedProduct.price.toFixed(2)}</span>
                      {selectedProduct.discount && (
                        <span className="ml-2 text-gray-400 line-through text-sm">
                          ${(selectedProduct.price * (1 + selectedProduct.discount/100)).toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    <motion.button 
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className={`px-6 py-3 bg-white text-black rounded-full font-medium overflow-hidden relative`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={enterButton}
                      onMouseLeave={leaveButton}
                    >
                      <span className="relative z-10">Add to Cart</span>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add a style tag for custom scrollbar and other global styles */}
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}