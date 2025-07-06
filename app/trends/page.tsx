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
      description: "Revolutionizing the tech landscape with groundbreaking local innovations and startups.",
      category: "Technology",
      date: "January 15, 2024",
      image: "/images/articles/all.jpg",
      location: "Dhaka",
      impact: 95,
      hashtags: ["#DigitalBangladesh", "#Innovation", "#TechStartups"]
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

      {/* Modal for Selected Item */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-zinc-900 rounded-3xl overflow-hidden max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-72 object-cover"
              />
              <div className="p-8 space-y-6">
                <h2 className="text-3xl font-bold">{selectedItem.title}</h2>
                <p className="text-gray-300">{selectedItem.description}</p>
                <div className="flex flex-wrap gap-3">
                  {selectedItem.hashtags.map(tag => (
                    <span 
                      key={tag}
                      className="px-4 py-2 rounded-full bg-green-500/20 text-green-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}