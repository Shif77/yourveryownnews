"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const featuredPlanner = {
  name: "ELENA BLOOM",
  tagline: "Crafting moments that bloom forever",
  article: `Elena Bloom has redefined modern romantic weddings in urban spaces. Her unique blend of botanical themes with contemporary minimalism makes every event unforgettable. Last week, she transformed an abandoned rooftop into a candlelit garden for a twilight vow exchange.`,
  image: "https://images.unsplash.com/photo-1520901153244-2d74a7d6c06b?auto=format&fit=crop&w=1200&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1587242642445-4a9fcfc6c63f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800&q=80",
  ],
  services: [
    {
      title: "Wedding Planning",
      description: "Full-service wedding coordination from concept to execution",
      icon: "💍"
    },
    {
      title: "Corporate Events",
      description: "Professional event management for businesses",
      icon: "🏢"
    },
    {
      title: "Social Gatherings",
      description: "Memorable celebrations for all occasions",
      icon: "🎉"
    }
  ],
  testimonials: [
    {
      name: "Sarah & James",
      text: "Elena transformed our wedding into a dream come true!",
      rating: 5
    },
    {
      name: "TechCorp Inc.",
      text: "The corporate gala was executed flawlessly.",
      rating: 5
    },
    {
      name: "Michael R.",
      text: "Best event planner in the city!",
      rating: 5
    }
  ]
};

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

const Particle = ({ x, y, size, color, delay }: ParticleProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{ duration: 1, delay }}
    className="absolute rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      background: color,
      filter: 'blur(1px)',
    }}
  />
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const slideIn = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const spring = {
  type: "spring",
  stiffness: 100,
  damping: 15
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

export default function EventPlannerSpotlightPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % featuredPlanner.testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="min-h-screen bg-black text-white overflow-hidden"
      ref={containerRef}
    >
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={featuredPlanner.image}
            alt={featuredPlanner.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90" />
        </motion.div>

        <motion.div 
          className="relative z-10 text-center px-8"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-9xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            variants={item}
          >
            {featuredPlanner.name}
          </motion.h1>
          <motion.p 
            className="text-2xl font-light italic"
            variants={item}
          >
            {featuredPlanner.tagline}
          </motion.p>
        </motion.div>

        <motion.div 
          className="absolute bottom-0 left-0 w-full h-32"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-full h-full bg-gradient-to-t from-black to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="min-h-screen relative flex items-center justify-center px-12">
        <motion.div 
          className="max-w-4xl relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-xl" />
          <p className="text-3xl font-light leading-relaxed relative z-10">
            {featuredPlanner.article}
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen py-20 px-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {featuredPlanner.services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className={`relative p-8 rounded-3xl transition-all duration-500 group-hover:bg-white/10 ${
                service.title === "Wedding Planning" 
                  ? "bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-rose-500/10 backdrop-blur-sm border border-white/10" 
                  : service.title === "Corporate Events"
                  ? "bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10"
                  : "bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm border border-white/10"
              }`}>
                <motion.span
                  className={`text-7xl mb-8 block ${
                    service.title === "Wedding Planning" 
                      ? "text-pink-400" 
                      : service.title === "Corporate Events"
                      ? "text-blue-400"
                      : "text-yellow-400"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={spring}
                >
                  {service.icon}
                </motion.span>
                <h3 className={`text-4xl font-bold mb-6 ${
                  service.title === "Wedding Planning" 
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400" 
                    : service.title === "Corporate Events"
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400"
                }`}>
                  {service.title}
                </h3>
                <p className="text-lg text-gray-400">{service.description}</p>
                {service.title === "Wedding Planning" && (
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                )}
                {service.title === "Corporate Events" && (
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                )}
                {service.title === "Social Gatherings" && (
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="min-h-screen py-20 px-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {featuredPlanner.gallery.map((url, i) => (
            <motion.div
              key={i}
              variants={item}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl group"
            >
              <img
                src={url}
                alt="Event gallery"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="min-h-screen py-20 px-12">
        <AnimatePresence mode="wait">
          {featuredPlanner.testimonials[activeSection] && (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex justify-center mb-12">
                {[...Array(featuredPlanner.testimonials[activeSection].rating)].map((_, i) => (
                  <motion.span 
                    key={i} 
                    className="text-4xl mx-2 text-yellow-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="text-2xl font-light mb-12">
                "{featuredPlanner.testimonials[activeSection].text}"
              </p>
              <p className="text-xl font-medium">
                - {featuredPlanner.testimonials[activeSection].name}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-12 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto relative z-10"
        >
          <motion.div
            className="absolute -top-16 -left-16 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-16 -right-16 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.h2 
            className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let's Create Magic
          </motion.h2>
          
          <form className="space-y-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 focus:border-purple-500/50 outline-none text-lg transition-all duration-300 backdrop-blur-sm"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 focus:border-pink-500/50 outline-none text-lg transition-all duration-300 backdrop-blur-sm"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <textarea
                placeholder="Your Vision"
                className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 focus:border-rose-500/50 outline-none text-lg h-32 transition-all duration-300 backdrop-blur-sm"
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-xl text-xl font-semibold transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Journey</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
