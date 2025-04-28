'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';

// Create a client-side only component for floating elements
const FloatingElements = dynamic(() => Promise.resolve(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-emerald-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 2
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}), { ssr: false });

export default function IdentityPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springConfig = { stiffness: 100, damping: 30, bounce: 100 };
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.2]), springConfig);
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 5]), springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="bg-zinc-900 text-white min-h-screen relative overflow-hidden">
      {/* Premium Badge */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <span>✨</span>
            <span>Premium Content</span>
          </div>
        </motion.div>
      )}

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"
          animate={{
            background: [
              "linear-gradient(45deg, #18181b, #27272a, #18181b)",
              "linear-gradient(45deg, #18181b, #27272a, #18181b)",
              "linear-gradient(45deg, #18181b, #27272a, #18181b)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Elements - Client-side only */}
      {mounted && <FloatingElements />}

      <div ref={containerRef} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 sm:mb-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
          >
            Week 1: Building Self-Awareness
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400"
          >
            The Foundation of Your Identity
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-zinc-400"
          >
            <span>April 22, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              Premium Content
            </span>
          </motion.div>
        </motion.header>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-lg sm:text-xl leading-relaxed text-zinc-300">
              Welcome to the first week of our identity-building journey. This week, we'll explore the fundamental building blocks of self-awareness and how they form the foundation of your authentic identity.
            </p>
          </motion.section>

          {/* Premium Content Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 sm:mb-12 p-6 sm:p-8 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700 hover:border-zinc-600 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-xl sm:text-2xl">✨</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Premium Insights</h3>
                <p className="text-zinc-400 text-sm">Unlock exclusive content and tools</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors duration-300">
                <h4 className="font-semibold mb-2">Expert Video Guide</h4>
                <p className="text-zinc-400 text-xs sm:text-sm">Watch our identity expert break down this week's concepts</p>
              </div>
              <div className="p-3 sm:p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors duration-300">
                <h4 className="font-semibold mb-2">Interactive Workbook</h4>
                <p className="text-zinc-400 text-xs sm:text-sm">Download our premium workbook with exercises</p>
              </div>
            </div>
            <button 
              className="mt-4 sm:mt-6 w-full py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 rounded-xl font-semibold transform hover:scale-[1.02] transition-all duration-300"
              onClick={() => setIsPremium(true)}
            >
              Unlock Premium Content
            </button>
          </motion.div>

          {/* Key Concepts */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Key Concepts</h2>
            <div className="grid gap-4 sm:gap-6">
              {[
                {
                  title: "Self-Reflection",
                  content: "Understanding your core values, beliefs, and motivations",
                  icon: "🧠",
                  premium: false
                },
                {
                  title: "Emotional Intelligence",
                  content: "Recognizing and managing your emotions effectively",
                  icon: "💭",
                  premium: true
                },
                {
                  title: "Personal Values",
                  content: "Identifying what truly matters to you",
                  icon: "💎",
                  premium: false
                }
              ].map((concept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`p-4 sm:p-6 rounded-xl transition-all duration-300 ${
                    concept.premium 
                      ? 'bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700 hover:border-zinc-600' 
                      : 'bg-zinc-800 hover:bg-zinc-700'
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-2xl sm:text-3xl">{concept.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-semibold">{concept.title}</h3>
                        {concept.premium && (
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-xs rounded-full">Premium</span>
                        )}
                      </div>
                      <p className="text-zinc-400 mt-2 text-sm sm:text-base">{concept.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Main Content */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Understanding Self-Awareness</h2>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-300 mb-4 sm:mb-6">
              Self-awareness is the cornerstone of building an authentic identity. It's about understanding who you are at your core, recognizing your strengths and weaknesses, and being honest with yourself about your values and beliefs.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-300 mb-4 sm:mb-6">
              This week's exercises will help you develop a deeper understanding of yourself, which will serve as the foundation for building your authentic identity in the weeks to come.
            </p>
          </motion.section>

          {/* Weekly Exercise */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">This Week's Exercise</h2>
            <div className="p-4 sm:p-6 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Values Discovery Journal</h3>
              <p className="text-zinc-300 mb-3 sm:mb-4">
                Take 15 minutes each day to reflect on these questions:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-4 text-zinc-300">
                <li>What moments in your life have brought you the most joy?</li>
                <li>What principles do you stand for, even when it's difficult?</li>
                <li>What qualities do you admire most in others?</li>
                <li>What would you fight for, even if you stood alone?</li>
              </ul>
              
              {/* Journal Entry Form */}
              <div className="mt-4 sm:mt-6 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-zinc-400">Today's Entry</span>
                  <span className="text-xs text-emerald-400">Auto-saved</span>
                </div>
                <textarea
                  className="w-full p-3 sm:p-4 bg-zinc-900 rounded-lg text-white border border-zinc-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-colors duration-300"
                  rows={6}
                  placeholder="Start journaling your thoughts here..."
                />
                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg text-sm transition-colors duration-300">
                    Add Image
                  </button>
                  <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-sm transition-colors duration-300">
                    Save Entry
                  </button>
                </div>
              </div>

              {/* Past Entries */}
              <div className="mt-6 border-t border-zinc-700 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Your Journal Entries</h4>
                  <button className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors duration-300">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      date: "April 22, 2025",
                      preview: "Today I reflected on what truly brings me joy...",
                      mood: "😊"
                    },
                    {
                      date: "April 21, 2025",
                      preview: "I discovered that my core values are...",
                      mood: "🤔"
                    }
                  ].map((entry, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-zinc-400">{entry.date}</span>
                        <span className="text-xl">{entry.mood}</span>
                      </div>
                      <p className="text-zinc-300 text-sm line-clamp-2">{entry.preview}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Tracking */}
              <div className="mt-6 border-t border-zinc-700 pt-6">
                <h4 className="text-lg font-semibold mb-4">Your Progress</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-300">Daily Entries</span>
                    <span className="text-sm text-emerald-400">2/7 days</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '28.57%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-300">Total Words</span>
                    <span className="text-sm text-emerald-400">1,234 words</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Premium Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Premium Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-colors duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">🎥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Video Guide</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm">45-minute deep dive</p>
                  </div>
                </div>
                <button className="w-full py-2 sm:py-3 bg-yellow-500/20 text-yellow-500 rounded-lg font-medium hover:bg-yellow-500/30 transition-colors duration-300">
                  Watch Preview
                </button>
              </div>
              <div className="p-4 sm:p-6 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-colors duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Interactive Workbook</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm">Downloadable exercises</p>
                  </div>
                </div>
                <button className="w-full py-2 sm:py-3 bg-yellow-500/20 text-yellow-500 rounded-lg font-medium hover:bg-yellow-500/30 transition-colors duration-300">
                  View Sample
                </button>
              </div>
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Next Steps</h2>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-300 mb-4 sm:mb-6">
              Complete the daily journaling exercise and reflect on your answers. Next week, we'll build on these insights as we explore how to align your actions with your core values.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link href="/" className="w-full sm:w-auto">
                <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors duration-300">
                  ← Back to Home
                </button>
              </Link>
              <Link href="/identity/week-2" className="w-full sm:w-auto">
                <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 rounded-xl transition-colors duration-300">
                  Next Week →
                </button>
              </Link>
            </div>
          </motion.section>
        </article>
      </div>
    </main>
  );
}
