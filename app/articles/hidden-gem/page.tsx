"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

export default function HiddenGem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showExploreButton, setShowExploreButton] = useState(false);
  const [hasStartedExploration, setHasStartedExploration] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const chapters = [
    {
      id: "intro",
      title: "Hidden Gem",
      subtitle: "A Journey Through the Unknown",
      description: "Discover places that few have ventured to explore",
      bgColor: "bg-emerald-900",
      textColor: "text-emerald-50",
    },
    {
      id: "discovery",
      title: "The Discovery",
      subtitle: "First Glimpse of Wonder",
      description: "When nature reveals its best-kept secrets",
      bgColor: "bg-amber-900",
      textColor: "text-amber-50",
    },
    {
      id: "secrets",
      title: "Hidden Secrets",
      subtitle: "Beyond the Surface",
      description: "Unveiling the mysteries that lie beneath",
      bgColor: "bg-indigo-900",
      textColor: "text-indigo-50",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowExploreButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [1, 0]));
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2], [1, 0.8]));

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = containerRef.current.scrollHeight;
    const progress = (scrollPosition / (totalHeight - windowHeight)) * chapters.length;
    setCurrentChapter(Math.floor(progress));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getChapterImage = (index: number) => {
    switch (index) {
      case 0:
        return "/images/hidden/lake1.jpg";
      case 1:
        return "/images/hidden/lake2.jpg";
      case 2:
        return "/images/hidden/lake3.jpg";
      default:
        return "";
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <motion.div
              animate={{
                scale: [1, 2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
              className="w-12 h-12 border-2 border-white rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: hasStartedExploration ? 0 : 1 }}
        className="fixed inset-0 z-20 flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/hidden/band.png"
            alt="Crystal Cave"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Modern dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-emerald-900/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8, type: 'spring' }}
              className="text-6xl md:text-8xl font-extrabold tracking-tight text-white drop-shadow-lg mb-6"
              style={{ letterSpacing: '0.05em' }}
            >
              Hidden Gem
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.8, type: 'spring' }}
              className="text-2xl md:text-3xl text-emerald-100/90 max-w-2xl mx-auto mb-10 font-light"
            >
              A journey into Earth's most spectacular underground crystal cave
            </motion.p>
            {showExploreButton && (
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.0, duration: 0.5 }}
                whileHover={{ scale: 1.08, boxShadow: '0 0 24px 6px #34d399' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setHasStartedExploration(true);
                  window.scrollTo(0, 0);
                }}
                className="px-10 py-4 rounded-full bg-transparent text-white text-xl font-semibold border border-white/30 shadow-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300/50"
                style={{ boxShadow: '0 0 32px 0 #34d39980' }}
              >
                Begin Exploration
              </motion.button>
            )}
          </div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <div className={`relative z-0 pt-screen ${hasStartedExploration ? "block" : "hidden"}`}>
        {chapters.map((chapter, index) => {
          const isExpanded = expandedChapter === index;
          return (
            <section
              key={chapter.id}
              className={`min-h-screen ${chapter.bgColor} ${chapter.textColor}
                          relative flex flex-col justify-center transition-opacity duration-500
                          ${currentChapter === index ? "opacity-100" : "opacity-50"}`}
            >
              <div className="max-w-7xl mx-auto px-6 py-24 w-full">
                <div className="space-y-6">
                  <span className="text-sm tracking-wider opacity-75">
                    Chapter {index + 1}
                  </span>
                  <h2 className="text-5xl font-light mb-4">{chapter.title}</h2>
                  <p className="text-xl opacity-75">{chapter.subtitle}</p>
                  <p className="text-lg opacity-60 leading-relaxed">{chapter.description}</p>
                  <button
                    onClick={() => {
                      setExpandedChapter(isExpanded ? null : index);
                    }}
                    className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    {isExpanded ? "Show Less" : "Learn More"}
                  </button>
                </div>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <div className="space-y-4">
                          <h3 className="text-2xl font-light">Additional Information</h3>
                          <p className="text-lg opacity-80 leading-relaxed">
                            Discover the hidden beauty of these pristine locations. Each chapter reveals
                            unique aspects of nature's wonders, from crystal-clear waters to breathtaking
                            landscapes.
                          </p>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden">
                          <Image
                            src={getChapterImage(index)}
                            alt={chapter.title}
                            fill
                            className="object-cover"
                            quality={100}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>
          );
        })}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-white/20"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      />

      {/* Chapter Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4">
        {chapters.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300
                            ${currentChapter === index ? "bg-white scale-150" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}