'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

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
  isNew?: boolean;
  isLimited?: boolean;
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
      name: "Championship Edition Jersey",
      price: 149.99,
      image: "/images/store/jersey4.jpg",
      category: "Limited Edition",
      rating: 5.0,
      inStock: true,
      featured: true,
      isLimited: true,
      discount: 10
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
    { name: "Limited Edition", image: "/images/store/limited.jpg", productCount: 2 },
    { name: "Jerseys", image: "/images/store/jerseys.jpg", productCount: 6 },
    { name: "Hoodies", image: "/images/store/hoodies.jpg", productCount: 4 },
    { name: "Accessories", image: "/images/store/accessories.jpg", productCount: 7 }
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
    },
    {
      id: 7,
      name: "Home Team Jersey 2023",
      price: 89.99,
      image: "/images/store/jersey1.jpg",
      category: "Jerseys",
      rating: 4.8,
      inStock: true,
      isNew: true
    },
    {
      id: 8,
      name: "Away Team Jersey 2023",
      price: 89.99,
      image: "/images/store/jersey2.jpg",
      category: "Jerseys",
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: 9,
      name: "Vintage 1995 Throwback Jersey",
      price: 129.99,
      image: "/images/store/jersey3.jpg",
      category: "Jerseys",
      rating: 4.9,
      inStock: true,
      isLimited: true
    },
    {
      id: 10,
      name: "Championship Edition Jersey",
      price: 149.99,
      image: "/images/store/jersey4.jpg",
      category: "Limited Edition",
      rating: 5.0,
      inStock: true,
      isLimited: true,
      discount: 10
    },
    {
      id: 11,
      name: "Signed Collector's Jersey",
      price: 299.99,
      image: "/images/store/jersey5.jpg",
      category: "Limited Edition",
      rating: 5.0,
      inStock: true,
      isLimited: true
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

      {/* Unique Asymmetrical Header */}
      <header className={`sticky top-0 z-40 ${colors.bg} px-6 py-4 overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 blur-lg opacity-70"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.h1 
                  className={`relative text-3xl font-extrabold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.05 }}
                >
                  YVON<span className="text-white">GEAR</span>
                </motion.h1>
              </motion.div>
              
              <div className="hidden md:flex ml-12 space-x-1">
                {['Home', 'Jerseys', 'Limited', 'About'].map((item, index) => (
                  <motion.button
                    key={item}
                    className="px-4 py-2 text-sm font-medium relative overflow-hidden"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ color: theme === 'news' ? '#FFD700' : '#A78BFA' }}
                  >
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <motion.button 
                onClick={toggleTheme}
                className="relative p-2 bg-white/5 rounded-full overflow-hidden"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  animate={{ rotate: theme === 'news' ? 0 : 180 }}
                  transition={{ duration: 0.5 }}
                >
                  {theme === 'news' ? '🌙' : '☀️'}
                </motion.div>
              </motion.button>
              
              <motion.button 
                className="relative p-2 bg-white/5 rounded-full overflow-hidden"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <motion.div 
                    className="absolute -top-1 -right-1 w-5 h-5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-red-500 opacity-70 blur-sm"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.span 
                      className={`absolute inset-0 bg-gradient-to-r ${colors.primary} text-white rounded-full flex items-center justify-center text-xs font-bold`}
                    >
                      {cartCount}
                    </motion.span>
                  </motion.div>
                )}
              </motion.button>
              
              <motion.button 
                className="relative px-6 py-2.5 overflow-hidden rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 rounded-full"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <span className="relative font-bold text-black">Sign In</span>
              </motion.button>
            </div>
          </div>
          
          {/* Decorative line */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </header>

      {/* Immersive 3D Hero Banner with Parallax */}
      <section className="relative h-[85vh] overflow-hidden">
        {/* 3D Perspective Container */}
        <div className="absolute inset-0 perspective-[1000px] transform-style-preserve-3d">
          {/* Animated Background Layers */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black z-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 z-10">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: Math.random() * 10 + 2,
                  height: Math.random() * 10 + 2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  x: [0, Math.random() * 100 - 50],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
          
          {/* 3D Tilting Jersey Display */}
          <motion.div 
            className="absolute right-[5%] bottom-[10%] w-[40%] h-[80%] z-20 hidden md:block"
            initial={{ opacity: 0, rotateY: 45, rotateX: 10 }}
            animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ rotateY: -10, scale: 1.05 }}
          >
            <div className="relative w-full h-full transform-style-preserve-3d">
              {/* Jersey Shadow */}
              <motion.div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[10%] bg-black/40 rounded-full blur-lg z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Jersey Image */}
              <motion.div 
                className="absolute inset-0 transform-style-preserve-3d"
                animate={{ rotateY: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute top-[10%] right-[10%] bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold px-4 py-2 rounded-full transform rotate-12 z-30"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [12, 15, 12],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                LIMITED
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-30 h-full flex flex-col items-start justify-center px-8 md:px-16 max-w-full md:max-w-[60%]">
          <motion.div 
            className="overflow-hidden mb-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="inline-block text-sm font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1 rounded-full"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              NEW COLLECTION
            </motion.span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block">CHAMPIONSHIP</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">EDITION</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-zinc-300 max-w-xl mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Exclusive jerseys inspired by champions. Limited quantities available. Be part of the legacy.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              className="relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              <motion.span 
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
                style={{ opacity: 0.3 }}
              />
              <span className="relative z-10">Shop Limited Edition</span>
            </motion.button>
            
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg"
              whileHover={{ scale: 1.05, borderColor: '#FFD700', color: '#FFD700' }}
              whileTap={{ scale: 0.95 }}
            >
              View Collection
            </motion.button>
          </motion.div>
          
          {/* Countdown Timer */}
          <motion.div 
            className="mt-12 flex items-center space-x-4 overflow-x-auto pb-2 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className="text-zinc-400 font-medium whitespace-nowrap">Limited Availability:</span>
            {['05', '23', '42', '17'].map((num, i) => (
              <motion.div 
                key={i}
                className="w-14 h-14 md:w-16 md:h-16 bg-black/50 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center border border-zinc-800 flex-shrink-0"
                initial={{ rotateY: 180, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
              >
                <span className="text-lg md:text-xl font-bold text-white">{num}</span>
                <span className="text-[10px] md:text-xs text-zinc-500">{['Days', 'Hours', 'Mins', 'Secs'][i]}</span>
              </motion.div>
            ))}
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
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`${colors.card} overflow-hidden shadow-lg group relative ${index % 3 === 0 ? 'rounded-tl-3xl rounded-br-3xl' : index % 3 === 1 ? 'rounded-tr-3xl rounded-bl-3xl' : 'rounded-full'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                onHoverStart={() => setIsHovering(product.id)}
                onHoverEnd={() => setIsHovering(null)}
                onClick={() => setSelectedProduct(product)}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: index % 2 === 0 ? 'perspective(1000px) rotateY(5deg)' : 'perspective(1000px) rotateY(-5deg)'
                }}
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
                  
                  {/* New Badge for new products */}
                  {product.isNew && (
                    <motion.div 
                      className="absolute top-4 left-4 z-20 bg-blue-600 px-3 py-2 rounded-full font-bold text-sm"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      NEW
                    </motion.div>
                  )}
                  
                  {/* Limited Edition Badge */}
                  {product.isLimited && (
                    <motion.div 
                      className="absolute top-4 left-4 z-20 bg-red-600 px-3 py-2 rounded-full font-bold text-sm"
                      animate={{ 
                        boxShadow: ['0 0 0px rgba(220, 38, 38, 0)', '0 0 20px rgba(220, 38, 38, 0.8)', '0 0 0px rgba(220, 38, 38, 0)'],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      LIMITED
                    </motion.div>
                  )}
                  
                  {/* Discount Badge */}
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
                      {[...Array(Math.floor(product.rating))].map((_, i) => (
                        <motion.span 
                          key={i}
                          className="text-yellow-400 mr-0.5"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            rotate: [0, 10, 0, -10, 0]
                          }}
                          transition={{ 
                            duration: 0.5, 
                            delay: i * 0.1,
                            rotate: { 
                              repeat: product.isLimited ? Infinity : 0,
                              repeatDelay: 2
                            }
                          }}
                        >
                          ★
                        </motion.span>
                      ))}
                      <span className="ml-1 text-sm">({product.rating})</span>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="flex items-center mb-5"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mr-2 ${product.category === 'Limited Edition' ? 'bg-red-900/50 text-red-300' : product.category === 'Jerseys' ? 'bg-blue-900/50 text-blue-300' : `bg-gradient-to-r ${colors.primary} bg-opacity-50 text-white`}`}>
                      {product.category}
                    </span>
                    {product.inStock ? (
                      <span className="text-green-500 text-xs">In Stock</span>
                    ) : (
                      <span className="text-red-500 text-xs">Out of Stock</span>
                    )}
                  </motion.div>
                  
                  <div className="flex justify-between items-center">
                    <motion.div className="flex flex-col">
                      {product.discount && (
                        <span className="text-sm line-through text-gray-500">
                          ${(product.price * (1 + product.discount/100)).toFixed(2)}
                        </span>
                      )}
                      <motion.span 
                        className="text-2xl font-bold"
                        animate={{ 
                          color: isHovering === product.id ? "#FFD700" : "#FFFFFF",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        ${product.price.toFixed(2)}
                      </motion.span>
                    </motion.div>
                    
                    <motion.button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className={`px-5 py-2 ${product.isLimited ? 'bg-red-600' : `bg-gradient-to-r ${colors.primary}`} rounded-full text-white font-medium overflow-hidden relative`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.span 
                        className="absolute inset-0 bg-white"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                        style={{ opacity: 0.3 }}
                      />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Jersey Showcase with Parallax */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="flex flex-col items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className={`inline-block px-4 py-1 bg-gradient-to-r ${colors.primary} text-white rounded-full text-sm font-bold mb-4 tracking-wider`}
              whileHover={{ scale: 1.05 }}
            >
              NEW ARRIVALS
            </motion.span>
            <h2 className="text-5xl font-extrabold mb-4 text-center">
              <span className={`bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>Jersey</span> Collection
            </h2>
            <p className="text-xl text-center max-w-2xl opacity-80 mb-8">
              Exclusive designs that celebrate your team spirit with premium quality and authentic styling
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] perspective-1000">
              {/* 3D Rotating Jersey Display */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative w-[400px] h-[400px] shadow-2xl rounded-full overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.img 
                      src="/images/store/jersey1.jpg" 
                      alt="Home Team Jersey" 
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1.1 }}
                      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h3 className="text-2xl font-bold mb-2">Home Team Jersey 2023</h3>
                      <p className="text-xl font-bold text-yellow-400">$89.99</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${colors.primary} flex items-center justify-center text-white font-bold text-xl`}>01</div>
                  <h3 className="text-2xl font-bold">Premium Materials</h3>
                </div>
                <p className="text-gray-300 pl-16">Crafted with breathable, moisture-wicking fabric for maximum comfort during any activity.</p>
              </motion.div>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${colors.primary} flex items-center justify-center text-white font-bold text-xl`}>02</div>
                  <h3 className="text-2xl font-bold">Authentic Design</h3>
                </div>
                <p className="text-gray-300 pl-16">Official team colors and logos with detailed embroidery that stands up to the test of time.</p>
              </motion.div>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${colors.primary} flex items-center justify-center text-white font-bold text-xl`}>03</div>
                  <h3 className="text-2xl font-bold">Custom Options</h3>
                </div>
                <p className="text-gray-300 pl-16">Add your name and number for a personalized jersey that shows your team loyalty.</p>
              </motion.div>

              <motion.button 
                className={`px-8 py-4 bg-gradient-to-r ${colors.primary} text-white rounded-full font-bold text-lg shadow-lg w-full mt-8`}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory('Jerseys')}
              >
                Shop All Jerseys
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Edition Drop Section */}
      <section className={`py-24 px-6 relative overflow-hidden`}>
        <motion.div 
          className="absolute inset-0 bg-[url('/images/store/limited-bg.jpg')] bg-cover bg-center opacity-30"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <motion.span 
                  className="inline-block px-4 py-1 bg-red-600 text-white rounded-full text-sm font-bold mb-4 tracking-wider"
                  whileHover={{ scale: 1.05 }}
                  animate={{ 
                    boxShadow: ['0 0 0px rgba(220, 38, 38, 0)', '0 0 20px rgba(220, 38, 38, 0.8)', '0 0 0px rgba(220, 38, 38, 0)'],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LIMITED EDITION
                </motion.span>
                <h2 className="text-5xl font-extrabold mb-4">
                  Collector's <span className="text-red-600">Signed</span> Jersey
                </h2>
                <p className="text-xl max-w-xl opacity-80 mb-8">
                  Only 50 available worldwide. Each piece individually numbered and authenticated with certificate.
                </p>

                <div className="flex items-center gap-6 mb-8">
                  <div className="text-4xl font-bold">$299.99</div>
                  <div className="px-3 py-1 border border-red-600 text-red-600 rounded-md text-sm font-medium">Almost Gone</div>
                </div>

                <div className="flex gap-4">
                  <motion.button 
                    className="px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const limitedProduct = allProducts.find(p => p.id === 11);
                      if (limitedProduct) {
                        setSelectedProduct(limitedProduct);
                      }
                    }}
                  >
                    View Details
                  </motion.button>
                  <motion.button 
                    className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory('Limited Edition')}
                  >
                    View Collection
                  </motion.button>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, rotateY: 45 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <motion.div 
                className="absolute -inset-4 rounded-full bg-red-600/20 blur-xl"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="relative bg-gradient-to-br from-red-900/40 to-black/40 backdrop-blur-sm rounded-3xl p-8 border border-red-900/50"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)" }}
              >
                <img 
                  src="/images/store/jersey5.jpg" 
                  alt="Signed Collector's Jersey" 
                  className="w-full h-[400px] object-cover rounded-2xl mb-6"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-red-400 mb-1">Limited Edition</div>
                    <h3 className="text-xl font-bold">Signed Collector's Jersey</h3>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-red-900/50 backdrop-blur-sm flex items-center justify-center border border-red-600">
                    <span className="font-mono font-bold">12/50</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className={`${colors.card} overflow-hidden shadow-lg group relative ${index % 3 === 0 ? 'rounded-tl-3xl rounded-br-3xl' : index % 3 === 1 ? 'rounded-tr-3xl rounded-bl-3xl' : 'rounded-full'}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  onHoverStart={() => setIsHovering(product.id)}
                  onHoverEnd={() => setIsHovering(null)}
                  onClick={() => setSelectedProduct(product)}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: index % 2 === 0 ? 'perspective(1000px) rotateY(5deg)' : 'perspective(1000px) rotateY(-5deg)'
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"></div>
                    <div className="absolute inset-0 bg-zinc-800"></div>
                    
                    {/* New Badge for new products */}
                    {product.isNew && (
                      <motion.div 
                        className="absolute top-4 left-4 z-20 bg-blue-600 px-3 py-2 rounded-full font-bold text-sm"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        NEW
                      </motion.div>
                    )}
                    
                    {/* Limited Edition Badge */}
                    {product.isLimited && (
                      <motion.div 
                        className="absolute top-4 left-4 z-20 bg-red-600 px-3 py-2 rounded-full font-bold text-sm"
                        animate={{ 
                          boxShadow: ['0 0 0px rgba(220, 38, 38, 0)', '0 0 20px rgba(220, 38, 38, 0.8)', '0 0 0px rgba(220, 38, 38, 0)'],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        LIMITED
                      </motion.div>
                    )}
                    
                    {/* Discount Badge */}
                    {product.discount && (
                      <motion.div 
                        className={`absolute top-2 right-2 z-20 bg-gradient-to-r ${colors.primary} px-2 py-1 rounded-md font-bold text-sm flex items-center gap-1`}
                        initial={{ rotate: -5 }}
                        animate={{ rotate: 5 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                      >
                        <span className="text-lg">🔥</span>
                        <span>{product.discount}% OFF</span>
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <div className="flex items-center">
                        {[...Array(Math.floor(product.rating))].map((_, i) => (
                          <motion.span 
                            key={i}
                            className="text-yellow-400 mr-0.5"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1,
                              rotate: [0, 10, 0, -10, 0]
                            }}
                            transition={{ 
                              duration: 0.5, 
                              delay: i * 0.1,
                              rotate: { 
                                repeat: product.isLimited ? Infinity : 0,
                                repeatDelay: 2
                              }
                            }}
                          >
                            ★
                          </motion.span>
                        ))}
                        <span className="ml-1 text-sm">{product.rating}</span>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="flex items-center mb-3"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mr-2 ${product.category === 'Limited Edition' ? 'bg-red-900/50 text-red-300' : product.category === 'Jerseys' ? 'bg-blue-900/50 text-blue-300' : `bg-gradient-to-r ${colors.primary} bg-opacity-50 text-white`}`}>
                        {product.category}
                      </span>
                      {product.inStock ? (
                        <span className="text-green-500 text-xs">In Stock</span>
                      ) : (
                        <span className="text-red-500 text-xs">Out of Stock</span>
                      )}
                    </motion.div>
                    
                    <div className="flex justify-between items-center">
                      <motion.div className="flex flex-col">
                        {product.discount && (
                          <span className="text-sm line-through text-gray-500">
                            ${(product.price * (1 + product.discount/100)).toFixed(2)}
                          </span>
                        )}
                        <motion.span 
                          className="text-xl font-bold"
                          animate={{ 
                            color: isHovering === product.id ? "#FFD700" : "#FFFFFF",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          ${product.price.toFixed(2)}
                        </motion.span>
                      </motion.div>
                      
                      <motion.button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className={`px-3 py-2 ${product.isLimited ? 'bg-red-600' : `bg-gradient-to-r ${colors.primary}`} rounded-full text-white text-sm font-medium overflow-hidden relative`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.span 
                          className="absolute inset-0 bg-white"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.5 }}
                          style={{ opacity: 0.3 }}
                        />
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