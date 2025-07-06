'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrendingItem {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  location: string;
  impact: number;
  hashtags: string[];
  readTime?: string;
  author?: string;
  views?: number;
  shares?: number;
  relatedTopics?: string[];
}

export default function TrendsPage() {
  const [selectedItem, setSelectedItem] = useState<TrendingItem | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set initial dimensions
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const trendingItems: TrendingItem[] = [
    {
      id: 1,
      title: "Digital Bangladesh Innovation Summit",
      description: "Revolutionizing the tech landscape with groundbreaking local innovations and startups. The summit showcases the latest technological advancements, bringing together industry leaders, entrepreneurs, and innovators from across the country. Experience the future of digital transformation in Bangladesh.",
      category: "Technology",
      date: "January 15, 2024",
      image: "/images/articles/all.jpg",
      location: "Dhaka",
      impact: 95,
      hashtags: ["#DigitalBangladesh", "#Innovation", "#TechStartups"],
      readTime: "5 min read",
      author: "Tech Innovation BD",
      views: 15000,
      shares: 2500,
      relatedTopics: ["Digital Economy", "Startup Ecosystem", "Tech Education"]
    },
    {
      id: 2,
      title: "Sustainable Fashion Revolution",
      description: "Local designers pioneering eco-friendly fashion with traditional Bengali textiles.",
      category: "Fashion",
      date: "January 12, 2024",
      image: "/images/articles/hidden.jpg",
      location: "Nationwide",
      impact: 88,
      hashtags: ["#SustainableFashion", "#BengaliTextiles", "#EcoFriendly"]
    },
    {
      id: 3,
      title: "Street Food Festival Evolution",
      description: "Modern twists on traditional Bengali street food creating viral sensations.",
      category: "Food",
      date: "January 10, 2024",
      image: "/images/batman.jpg",
      location: "Chittagong",
      impact: 92,
      hashtags: ["#StreetFood", "#BengaliCuisine", "#FoodFestival"]
    }
  ];

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 opacity-20"
        style={{
          transform: `rotate(${scrollY * 0.1}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dimensions.width > 0 && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            animate={{
              x: [Math.random() * dimensions.width, Math.random() * dimensions.width],
              y: [Math.random() * dimensions.height, Math.random() * dimensions.height],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Trending Items */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {trendingItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex flex-col md:flex-row items-center gap-8 mb-32 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex-1 relative group cursor-pointer" onClick={() => setSelectedItem(item)}>
                  <motion.div 
                    className="relative z-10 overflow-hidden rounded-3xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </motion.div>
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-[2rem] -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                      {item.category}
                    </span>
                    <span className="text-gray-400">{item.location}</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold">{item.title}</h2>
                  
                  <p className="text-gray-300 text-lg">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.hashtags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-sm text-emerald-400 hover:text-emerald-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.impact}%` }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-2xl font-bold text-emerald-400">{item.impact}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
module.exports = {
  // ... other config
  
}
      {/* Fixed Modal for Selected Item */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-start justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl mx-4 my-8 max-h-[90vh] bg-zinc-900 rounded-3xl overflow-y-auto"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#3f3f46 #18181b'
              }}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 transition-colors flex items-center justify-center text-white"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="relative">
                <div className="w-full h-[40vh] relative">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="p-8 space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                          {selectedItem.category}
                        </span>
                        <span className="text-gray-400">{selectedItem.location}</span>
                      </div>
                      <h2 className="text-4xl font-bold">{selectedItem.title}</h2>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-400 text-lg font-semibold">{selectedItem.date}</p>
                      <p className="text-gray-400">{selectedItem.readTime}</p>
                    </div>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-gray-300">{selectedItem.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-800">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-emerald-400">{selectedItem.impact}%</p>
                      <p className="text-gray-400">Impact Score</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-emerald-400">{selectedItem.views?.toLocaleString()}</p>
                      <p className="text-gray-400">Views</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-emerald-400">{selectedItem.shares?.toLocaleString()}</p>
                      <p className="text-gray-400">Shares</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.relatedTopics?.map(topic => (
                        <span 
                          key={topic}
                          className="px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {selectedItem.hashtags.map(tag => (
                      <span 
                        key={tag}
                        className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">{selectedItem.author}</p>
                        <p className="text-sm text-gray-400">Content Creator</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors">
                        Share
                      </button>
                      <button className="px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors">
                        Save
                      </button>
                    </div>
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