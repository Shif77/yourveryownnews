"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  sizes: string[]
  colors: string[]
  isLimited?: boolean
  stock: number
  description?: string
}

export default function YvonGearsComplete() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cartCount, setCartCount] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")

  // Sample products data
  const tshirts: Product[] = [
    {
      id: 1,
      name: "Neon Dreams",
      price: 89.99,
      image: "🌈",
      category: "Limited Design",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Neon Pink", "Electric Blue", "Cyber Green"],
      isLimited: true,
      stock: 25,
      description: "Futuristic design meets comfort in this limited edition piece",
    },
    {
      id: 2,
      name: "Cosmic Vibes",
      price: 94.99,
      image: "🌌",
      category: "Limited Design",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Galaxy Black", "Nebula Purple", "Star White"],
      isLimited: true,
      stock: 18,
      description: "Inspired by the infinite cosmos and urban streetwear",
    },
    {
      id: 3,
      name: "Urban Legend",
      price: 79.99,
      image: "🏙️",
      category: "Limited Design",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Midnight Black", "Steel Gray", "Concrete White"],
      isLimited: true,
      stock: 32,
      description: "Where city life meets contemporary fashion",
    },
  ]

  const jerseys: Product[] = [
    {
      id: 4,
      name: "Championship Elite",
      price: 149.99,
      image: "🏆",
      category: "Premium Jersey",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Royal Blue", "Championship Gold", "Victory Red"],
      stock: 45,
      description: "Professional-grade jersey worn by champions",
    },
    {
      id: 5,
      name: "Legacy Pro",
      price: 129.99,
      image: "⚡",
      category: "Premium Jersey",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Classic White", "Heritage Navy", "Legend Black"],
      stock: 38,
      description: "Timeless design with modern performance technology",
    },
    {
      id: 6,
      name: "Future Icon",
      price: 159.99,
      image: "🚀",
      category: "Premium Jersey",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Tech Silver", "Innovation Blue", "Future Black"],
      stock: 28,
      description: "Next-generation athletic wear for tomorrow's athletes",
    },
  ]

  const addToCart = (product: Product) => {
    setCartCount((prev) => prev + 1)
    // Add cart logic here
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header with Brand Name */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
            <motion.h1
              className="text-3xl font-black bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              YVON
            </motion.h1>
            <motion.span className="text-3xl font-light text-yellow-400 ml-2" whileHover={{ scale: 1.05 }}>
              GEARS
            </motion.span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#limited" className="text-gray-300 hover:text-white transition-colors">
              Limited
            </a>
            <a href="#tshirts" className="text-gray-300 hover:text-white transition-colors">
              T-Shirts
            </a>
            <a href="#jerseys" className="text-gray-300 hover:text-white transition-colors">
              Jerseys
            </a>
          </nav>

          {/* Cart */}
          {cartCount > 0 && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {cartCount}
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Limited Edition Section */}
      <section id="limited" className="py-24 px-6 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-900/20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block px-6 py-2 bg-red-600 text-white rounded-full text-sm font-bold tracking-wider"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(220, 38, 38, 0)",
                    "0 0 30px rgba(220, 38, 38, 0.8)",
                    "0 0 0px rgba(220, 38, 38, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                LIMITED EDITION
              </motion.span>

              <h2 className="text-6xl font-black leading-tight">
                Collector's <span className="text-red-500">Signed</span> Jersey
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Only 50 available worldwide. Each piece individually numbered and authenticated with certificate of
                authenticity.
              </p>

              <div className="flex items-center gap-8">
                <div className="text-5xl font-black text-red-500">$299.99</div>
                <div className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg font-bold animate-pulse">
                  12 LEFT
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  className="px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">SECURE NOW</span>
                </motion.button>

                <motion.button
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW DETAILS
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, rotateY: 45 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="absolute -inset-8 rounded-full bg-red-600/20 blur-2xl"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />

              <motion.div
                className="relative bg-gradient-to-br from-red-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 border border-red-900/50"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(220, 38, 38, 0.3)",
                  rotateY: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-[400px] bg-gradient-to-br from-red-800 to-red-900 rounded-2xl mb-6 flex items-center justify-center text-8xl">
                  🏆
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-red-400 mb-1 font-semibold">COLLECTOR'S EDITION</div>
                    <h3 className="text-2xl font-bold">Championship Legacy</h3>
                  </div>
                  <div className="w-20 h-20 rounded-full bg-red-900/70 backdrop-blur-sm flex items-center justify-center border-2 border-red-500">
                    <span className="font-mono font-bold text-lg">12/50</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional T-Shirts Section */}
      <section id="tshirts" className="py-32 px-6 relative bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <motion.span
                  className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30 text-purple-400 rounded-full text-sm font-medium tracking-wider mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  EXCLUSIVE DESIGNS
                </motion.span>
                <h2 className="text-5xl md:text-6xl font-black">
                  <span className="text-white">Limited</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Collection
                  </span>
                </h2>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-gray-400 text-lg max-w-md">
                  Crafted for those who dare to stand out. Each design tells a story of innovation and style.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Asymmetrical Grid Layout */}
          <div className="grid grid-cols-12 gap-6 h-[800px]">
            {/* First T-Shirt - Large */}
            <motion.div
              className="col-span-12 md:col-span-7 row-span-2 relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-br from-purple-900/10 to-black border border-gray-800 rounded-3xl overflow-hidden relative"
                whileHover={{ scale: 1.02, borderColor: "#8b5cf6" }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500" />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <motion.div
                      className="bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-full text-xs font-bold"
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(147, 51, 234, 0)",
                          "0 0 20px rgba(147, 51, 234, 0.5)",
                          "0 0 0px rgba(147, 51, 234, 0)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      LIMITED • {tshirts[0].stock} LEFT
                    </motion.div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-purple-400">${tshirts[0].price}</div>
                      <div className="text-sm text-gray-400">Premium Quality</div>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-9xl opacity-80">{tshirts[0].image}</div>
                  </div>

                  <div>
                    <h3 className="text-4xl font-black mb-2">{tshirts[0].name}</h3>
                    <p className="text-gray-400 mb-4">{tshirts[0].description}</p>

                    {/* Color Dots */}
                    <div className="flex gap-2 mb-6">
                      {tshirts[0].colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full border-2 border-gray-600"
                          style={{
                            background: color.includes("Pink")
                              ? "#ec4899"
                              : color.includes("Blue")
                                ? "#3b82f6"
                                : "#10b981",
                          }}
                        />
                      ))}
                    </div>

                    <motion.button
                      onClick={() => setSelectedProduct(tshirts[0])}
                      className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">CUSTOMIZE NOW</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Second T-Shirt - Medium */}
            <motion.div
              className="col-span-12 md:col-span-5 relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden relative"
                whileHover={{ scale: 1.02, borderColor: "#6366f1" }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1 rounded-full text-xs font-bold">
                      {tshirts[1].stock} LEFT
                    </div>
                    <div className="text-2xl font-black text-indigo-400">${tshirts[1].price}</div>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-6xl opacity-80">{tshirts[1].image}</div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black mb-2">{tshirts[1].name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tshirts[1].description}</p>

                    <motion.button
                      onClick={() => setSelectedProduct(tshirts[1])}
                      className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">SELECT</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Third T-Shirt - Medium */}
            <motion.div
              className="col-span-12 md:col-span-5 relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-gradient-to-br from-gray-800 to-black border border-gray-700 rounded-3xl overflow-hidden relative"
                whileHover={{ scale: 1.02, borderColor: "#64748b" }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="bg-gradient-to-r from-gray-600 to-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                      {tshirts[2].stock} LEFT
                    </div>
                    <div className="text-2xl font-black text-gray-400">${tshirts[2].price}</div>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-6xl opacity-80">{tshirts[2].image}</div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black mb-2">{tshirts[2].name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tshirts[2].description}</p>

                    <motion.button
                      onClick={() => setSelectedProduct(tshirts[2])}
                      className="w-full py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-bold relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">SELECT</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Jersey Showcase */}
      <section id="jerseys" className="py-32 px-6 relative bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-600/30 text-blue-400 rounded-full text-sm font-medium tracking-wider mb-6"
              whileHover={{ scale: 1.05 }}
            >
              CHAMPIONSHIP SERIES
            </motion.span>

            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="text-white">Jerseys</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Engineered for peak performance. Worn by champions, designed for legends.
            </p>
          </motion.div>

          {/* Diagonal Layout */}
          <div className="relative">
            {jerseys.map((jersey, index) => (
              <motion.div
                key={jersey.id}
                className={`relative mb-16 ${index % 2 === 0 ? "md:mr-32" : "md:ml-32"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-900/10 to-cyan-900/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-blue-800/30 relative"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)",
                    borderColor: "#3b82f6",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div
                      className={`relative h-80 md:h-96 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center ${index % 2 === 0 ? "order-1" : "order-2"}`}
                    >
                      <div className="text-8xl opacity-90">{jersey.image}</div>

                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-full text-sm font-bold">
                        PREMIUM
                      </div>

                      {/* Stock Counter */}
                      <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold">
                        {jersey.stock} Available
                      </div>
                    </div>

                    {/* Content Side */}
                    <div
                      className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? "order-2" : "order-1"}`}
                    >
                      <div className="mb-6">
                        <div className="text-sm text-blue-400 font-semibold mb-2 tracking-wider">
                          {jersey.category.toUpperCase()}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">{jersey.name}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">{jersey.description}</p>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-4 bg-blue-900/20 rounded-xl border border-blue-800/30">
                            <div className="text-2xl font-black text-blue-400">{jersey.colors.length}</div>
                            <div className="text-sm text-gray-400">Colors</div>
                          </div>
                          <div className="text-center p-4 bg-blue-900/20 rounded-xl border border-blue-800/30">
                            <div className="text-2xl font-black text-blue-400">{jersey.sizes.length}</div>
                            <div className="text-sm text-gray-400">Sizes</div>
                          </div>
                        </div>

                        {/* Color Swatches */}
                        <div className="flex gap-3 mb-6">
                          {jersey.colors.map((color, i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full border-2 border-gray-600"
                              style={{
                                background: color.includes("Blue")
                                  ? "#3b82f6"
                                  : color.includes("Gold")
                                    ? "#f59e0b"
                                    : color.includes("Red")
                                      ? "#ef4444"
                                      : color.includes("White")
                                        ? "#fff"
                                        : color.includes("Navy")
                                          ? "#1e3a8a"
                                          : color.includes("Black")
                                            ? "#000"
                                            : color.includes("Silver")
                                              ? "#9ca3af"
                                              : "#6b7280",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-4xl font-black text-blue-400 mb-1">${jersey.price}</div>
                          <div className="text-sm text-gray-400">Professional Grade</div>
                        </div>

                        <motion.button
                          onClick={() => setSelectedProduct(jersey)}
                          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold text-lg relative overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                          <span className="relative z-10">CUSTOMIZE</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Product Image */}
                <div className="relative h-96 md:h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                  <div className="text-9xl">{selectedProduct.image}</div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Product Details */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-4xl font-black mb-2">{selectedProduct.name}</h3>
                    <p className="text-gray-400 mb-4">{selectedProduct.category}</p>
                    <div className="text-4xl font-black text-purple-400 mb-4">${selectedProduct.price}</div>
                    <p className="text-gray-300 leading-relaxed">{selectedProduct.description}</p>
                  </div>

                  {/* Size Selection */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3">Select Size</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 px-4 border rounded-lg font-medium transition-all ${
                            selectedSize === size
                              ? "border-purple-500 bg-purple-500/20 text-purple-400"
                              : "border-gray-600 hover:border-gray-500"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-3">Select Color</h4>
                    <div className="space-y-2">
                      {selectedProduct.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-full py-2 px-4 border rounded-lg font-medium text-left transition-all ${
                            selectedColor === color
                              ? "border-purple-500 bg-purple-500/20 text-purple-400"
                              : "border-gray-600 hover:border-gray-500"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    onClick={() => {
                      addToCart(selectedProduct)
                      setSelectedProduct(null)
                    }}
                    disabled={!selectedSize || !selectedColor}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-lg relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: selectedSize && selectedColor ? 1.02 : 1 }}
                    whileTap={{ scale: selectedSize && selectedColor ? 0.98 : 1 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: selectedSize && selectedColor ? "100%" : "-100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10">
                      {!selectedSize || !selectedColor ? "SELECT SIZE & COLOR" : "ADD TO CART"}
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
