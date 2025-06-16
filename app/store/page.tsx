'use client';

import { useState } from 'react';
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
    // Here you would typically add the product to a cart state or context
  };

  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Header with Cart */}
      <header className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          YourVeryOwnNews Store
        </h1>
        <div className="flex items-center space-x-4">
          <button className="relative p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-zinc-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-zinc-900 rounded-xl hover:bg-yellow-600 transition-colors font-medium">
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/store/banner.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 h-full flex flex-col justify-center px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-yellow-500 text-zinc-900 rounded-full text-sm font-medium mb-4">
              New Arrivals
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Exclusive YourVeryOwnNews<br />
              <span className="text-yellow-500">Merchandise & Content</span>
            </h2>
            <p className="text-zinc-300 text-lg max-w-xl mb-6">
              Show your support with our premium merchandise and gain access to exclusive content.
            </p>
            <button className="px-6 py-3 bg-yellow-500 text-zinc-900 hover:bg-yellow-600 font-semibold rounded-xl shadow-lg transition-all">
              Shop Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/10 transition-all"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 opacity-60"></div>
                  <div className="absolute inset-0 bg-zinc-800"></div>
                  {product.discount && (
                    <div className="absolute top-2 right-2 z-20 bg-yellow-500 text-zinc-900 px-2 py-1 rounded-md font-bold text-sm">
                      {product.discount}% OFF
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-zinc-400 mb-4">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 bg-yellow-500 text-zinc-900 rounded-lg hover:bg-yellow-600 transition-colors font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                className="relative h-40 rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveCategory(category.name)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-zinc-800"></div>
                <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                  <h3 className="text-lg font-bold">{category.name}</h3>
                  <p className="text-sm text-zinc-400">{category.productCount} products</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products with Filtering */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              All Products
            </h2>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              <button 
                onClick={() => setActiveCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeCategory === 'All' ? 'bg-yellow-500 text-zinc-900' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeCategory === category.name ? 'bg-yellow-500 text-zinc-900' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/10 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 opacity-60"></div>
                  <div className="absolute inset-0 bg-zinc-800"></div>
                  {product.discount && (
                    <div className="absolute top-2 right-2 z-20 bg-yellow-500 text-zinc-900 px-2 py-1 rounded-md font-bold text-sm">
                      {product.discount}% OFF
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm mb-3">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="px-3 py-1 bg-yellow-500 text-zinc-900 rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-6 bg-gradient-to-r from-zinc-800 to-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Stay Updated on New Products
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to receive updates on new merchandise, exclusive deals, and limited-time offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
            />
            <button className="px-6 py-3 bg-yellow-500 text-zinc-900 rounded-xl hover:bg-yellow-600 transition-colors font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <div className="absolute inset-0 bg-zinc-700"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
                    <button onClick={() => setSelectedProduct(null)} className="text-zinc-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="ml-1">{selectedProduct.rating}</span>
                    </div>
                    <span className="text-zinc-400">{selectedProduct.category}</span>
                  </div>
                  <p className="text-zinc-300 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Features:</h4>
                    <ul className="list-disc list-inside text-zinc-300 space-y-1">
                      <li>Premium quality materials</li>
                      <li>Exclusive design</li>
                      <li>Limited edition</li>
                      <li>Fast shipping</li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold">${selectedProduct.price.toFixed(2)}</span>
                    <button 
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="px-6 py-3 bg-yellow-500 text-zinc-900 rounded-xl hover:bg-yellow-600 transition-colors font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}