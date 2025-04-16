"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const WeekendRestaurant = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <main className="bg-black text-white min-h-screen font-sans relative">
      {/* Floating Navigation - Return Home Button Removed */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-90 py-2' : 'py-4'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className={`font-bold transition-all duration-300 ${scrolled ? 'text-lg text-yellow-400' : 'text-xl text-white'}`}>Eatalia</span>
          {/* Return Home button removed from here */}
        </div>
      </nav>

      {/* Hero Section with Parallax Effect */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 z-0">
        <img src="/images/weeknd/rest.jpg" alt="Ember & Vine Ambiance" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-center max-w-2xl px-6">
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-4">
            <span className="text-yellow-400">THE</span>
            <span className="inline-block mx-2 text-white">-</span>
            <span className="text-yellow-400">EATALIA</span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-lg mx-auto border-t border-b border-yellow-400 py-4">Where fire meets flavor on the rooftop skyline</p>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 animate-bounce">
          <div className="w-10 h-10 border-b-2 border-r-2 border-yellow-400 transform rotate-45"></div>
        </div>
      </section>

      {/* Author Card - Floating */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-30">
        <div className="bg-zinc-900 p-6 shadow-lg border-l-4 border-yellow-400 flex items-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 bg-yellow-400 rounded-full absolute -top-2 -left-2"></div>
            <Image src="/author.jpg" alt="Author" width={80} height={80} className="rounded-full relative z-10 object-cover" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Hasin Arman Shif</p>
            <p className="text-yellow-400">Storyteller</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="group">
            <h2 className="text-3xl font-bold mb-6 inline-flex items-center">
              <span className="text-yellow-400 mr-3 text-5xl font-light">01</span>
              <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">Atmosphere</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed pl-16">
              Ember & Vine wraps you in ambiance — swaying string lights, low-fire pits, the murmur of laughter. It's more than a restaurant; it's a stage set for stories.
            </p>
          </div>
          
          <div className="group">
            <h2 className="text-3xl font-bold mb-6 inline-flex items-center">
              <span className="text-yellow-400 mr-3 text-5xl font-light">02</span>
              <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">Food</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed pl-16">
              Dishes here aren't just meals — they're a journey. Think: octopus kissed by flame, risotto laced with truffle mist, sea bass so tender it whispers secrets.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 border border-yellow-400 -z-10"></div>
          <img src="/article-1.jpg" alt="Ember & Vine Interior" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
      </section>
      
      {/* Author Notes - Full Width */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="inline-block px-4 border-b-2 border-yellow-400 pb-2">In the Author's Words</span>
          </h2>
          <p className="text-zinc-300 leading-relaxed text-xl text-center italic font-light">
            "I first came to Ember & Vine on a whim — now it's a monthly ritual. There's a rhythm to this place, like a hidden song only the weekend can hear. It's where I write, reflect, and refill my creative tank."
          </p>
        </div>
      </section>
      
      {/* Location and Social */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-8 text-yellow-400">Find Ember & Vine</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mr-4">
                  <span className="text-black text-xl">📍</span>
                </div>
                <div>
                  <p className="text-white text-lg">520 Skyview Terrace</p>
                  <p className="text-zinc-400">Downtown District</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mr-4">
                  <span className="text-black text-xl">📞</span>
                </div>
                <div>
                  <p className="text-white text-lg">(555) 823-9641</p>
                  <p className="text-zinc-400">Reservations Recommended</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:border-l border-yellow-400 md:pl-8">
            <h2 className="text-3xl font-bold mb-8 text-yellow-400">Connect</h2>
            <div className="space-y-4">
              <a href="#" className="flex items-center group">
                <span className="w-8 h-1 bg-yellow-400 mr-4 group-hover:w-12 transition-all duration-300"></span>
                <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">Instagram</span>
              </a>
              <a href="#" className="flex items-center group">
                <span className="w-8 h-1 bg-yellow-400 mr-4 group-hover:w-12 transition-all duration-300"></span>
                <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">Facebook</span>
              </a>
              <a href="#" className="flex items-center group">
                <span className="w-8 h-1 bg-yellow-400 mr-4 group-hover:w-12 transition-all duration-300"></span>
                <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">Website</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-zinc-900 py-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 mb-4 md:mb-0">Experience the extraordinary at Ember & Vine</p>
          <Link href="/">
            <button className="group relative px-8 py-3 overflow-hidden">
              <span className="absolute inset-0 w-0 bg-yellow-400 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative text-yellow-400 group-hover:text-black transition-colors duration-300 font-medium">Back to Homepage</span>
            </button>
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default WeekendRestaurant;