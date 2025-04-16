'use client'; // Enable client-side React features

import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Home() {
  const [colors, setColors] = useState<string[]>([]);

  // Generate a random hex color
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Generate random colors for each character of the title on component mount
  useEffect(() => {
    const word = "YourVeryOwnNews";
    const randomColors = word.split("").map(() => randomColor());
    setColors(randomColors);
  }, []);

  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-700">
        <div className="text-2xl font-bold">
          {"YourVeryOwnNews".split("").map((char, index) => (
            <span key={index} style={{ color: colors[index] }}>{char}</span>
          ))}
        </div>
        <nav className="space-x-4 hidden md:flex">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">Podcast</a>
          <a href="#" className="hover:text-yellow-500">YouTube</a>
          <a href="#" className="hover:text-yellow-500">Art & Music</a>
          <a href="#" className="hover:text-yellow-500">Store</a>
          <a href="#" className="hover:text-yellow-500">Archive</a>
        </nav>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-yellow-500 rounded-xl hover:bg-yellow-600">
            Upgrade to Premium
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="grid md:grid-cols-3 gap-6 p-6">
        <Link href="/ebook">
          <div className="md:col-span-1 bg-zinc-800 rounded-xl shadow-md relative overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <img src="/images/batman.jpg" alt="Cartoon Ebook" className="w-full h-[250px] object-cover" />
            <div className="absolute bottom-0 left-4 text-left text-white p-4 rounded-lg max-w-[90%]">
              <h2 className="text-lg font-serif font-bold mb-2">Free Magnetism eBook</h2>
            </div>
          </div>
        </Link>

        <Link href="/breakingfreepage">
          <div className="md:col-span-1 bg-zinc-800 rounded-xl shadow-md relative overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <img src="/images/peaky.jpg" alt="Featured" className="w-full h-[250px] object-cover" />
            <div className="absolute bottom-0 left-4 text-left text-white p-4 rounded-lg max-w-[90%]">
              <h2 className="text-xl font-serif font-bold mb-2">Breaking Free: Creating Your Iconic Identity</h2>
            </div>
          </div>
        </Link>

        <Link href="/leatherdaddypage">
          <div className="md:col-span-1 bg-zinc-800 rounded-xl shadow-md relative overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <img src="/images/money.png" alt="Featured" className="w-full h-[250px] object-cover" />
            <div className="absolute bottom-0 left-4 text-left text-white p-4 rounded-lg max-w-[90%]">
              <h2 className="text-lg font-serif font-bold mb-2">Build a Career</h2>
            </div>
          </div>
        </Link>
      </section>

      {/* Latest Articles Section */}
      <section className="p-6 bg-zinc-900 text-white">
  <h2 className="text-3xl font-bold text-center mb-6">Latest Articles</h2>
  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">

    {[
      {
        href: "/articles/weekend-restaurant",
        img: "/images/articles/all.jpg",
        title: "Weekend Restaurant You Should Visit",
        category: "Lifestyle",
        date: "Apr 12, 2025",
      },
      {
        href: "/articles/hidden-gem",
        img: "/images/articles/hidden.jpg",
        title: "This Hidden Gem Will Blow Your Mind",
        category: "Travel",
        date: "Apr 10, 2025",
      },
      {
        href: "/articles/plan-better-days",
        img: "/images/articles/weeknd.png",
        title: "Plan Better Days with These Simple Steps",
        category: "Productivity",
        date: "Apr 8, 2025",
      },
      {
        href: "/articles/urban-artists",
        img: "/images/articles/urban.jpg",
        title: "5 Urban Artists You Need to Follow Now",
        category: "Art & Culture",
        date: "Apr 6, 2025",
      },
      {
        href: "/articles/nightlife-guide",
        img: "/images/articles/event.jpg",
        title: "Looking for an event planner? Contact with them",
        category: "Event",
        date: "Apr 4, 2025",
      },
      {
        href: "/articles/coffee-corners",
        img: "/images/articles/coffe.jpeg",
        title: "Coziest Coffee Corners You’ll Love",
        category: "Food & Drink",
        date: "Apr 2, 2025",
      }
    ].map((article, idx) => (
      <Link href={article.href} key={idx}>
        <div className="relative bg-zinc-800 rounded-2xl overflow-hidden group cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-300/20">
          <img src={article.img} alt={article.title} className="w-full h-[220px] object-cover transition-all duration-300 group-hover:brightness-90" />
          {/* Gradient overlay */}
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Article content */}
          <div className="absolute bottom-0 left-0 w-full px-4 pb-4 z-10">
            <div className="text-sm text-yellow-300 font-medium mb-1">{article.category} • {article.date}</div>
            <h2 className="text-lg font-semibold leading-tight font-serif">{article.title}</h2>
          </div>
        </div>
      </Link>
    ))}

  </div>
</section>




{/* Featured Video Section */}
<section className="px-4 sm:px-8 py-12 bg-zinc-900 text-white">
  <div className="max-w-4xl mx-auto">
    {/* Header with decorative elements */}
    <div className="flex flex-col items-center mb-6">
      <div className="flex items-center space-x-2 mb-2">
        <div className="h-0.5 w-6 bg-yellow-500"></div>
        <span className="text-sm uppercase tracking-wider text-yellow-500">Must Watch</span>
        <div className="h-0.5 w-6 bg-yellow-500"></div>
      </div>
      <h2 className="text-2xl font-bold">Featured Video</h2>
    </div>
    
    {/* Video container with distinctive styling */}
    <div className="relative group">
      {/* Subtle gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-700 via-yellow-500/50 to-zinc-700 rounded-lg opacity-50 blur-sm"></div>
      
      <div className="relative bg-zinc-800 rounded-lg overflow-hidden">
        {/* Video with proper aspect ratio */}
        <div className="relative">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/3OC_9yQkKjs"
            title="Featured Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Corner accent */}
          <div className="absolute top-0 right-0 border-t-8 border-r-8 border-yellow-500 w-6 h-6"></div>
        </div>
        
        {/* Video info with minimal details */}
        <div className="p-4 border-t border-zinc-700">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Why This Video Is Worth Your Time</h3>
            <span className="text-xs px-2 py-0.5 bg-yellow-500 text-black rounded-full">New</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Simple indicator dots */}
    <div className="flex justify-center mt-6 space-x-1">
      <div className="h-1.5 w-6 rounded-full bg-yellow-500"></div>
      <div className="h-1.5 w-1.5 rounded-full bg-zinc-700"></div>
      <div className="h-1.5 w-1.5 rounded-full bg-zinc-700"></div>
    </div>
  </div>
</section>



      {/* Newsletter Signup Section */}
<section className="relative bg-zinc-800 px-4 py-10 sm:p-12 mx-4 my-12 rounded-2xl overflow-hidden">
  {/* Background elements */}
  <div className="absolute inset-0 border border-yellow-500/30 rounded-2xl"></div>
  <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>
  
  <div className="relative z-10">
    {/* Section heading */}
    <div className="flex flex-col items-center max-w-lg mx-auto">
      <span className="text-xs uppercase tracking-widest text-yellow-400 font-medium mb-2">Stay in the loop</span>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Join Our Newsletter</h2>
      <div className="h-0.5 w-12 bg-yellow-500 rounded-full mb-4"></div>
      <p className="text-zinc-300 text-sm sm:text-base mb-8 text-center">
        Get the latest updates, exclusive offers, and premium content directly to your inbox.
      </p>
    </div>
    
    {/* Form with enhanced styling */}
    <div className="max-w-md mx-auto">
      <div className="relative">
        {/* Email input with icon */}
        <div className="flex items-center bg-zinc-900/80 border border-zinc-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-yellow-500 focus-within:border-transparent">
          <span className="pl-4 text-zinc-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full py-3 px-3 bg-transparent border-none text-white placeholder-zinc-500 focus:outline-none"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
      
      {/* Privacy note */}
      <p className="text-xs text-zinc-500 mt-3 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
    
    {/* Benefits */}
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      <div className="flex items-center text-zinc-300 text-sm">
        <span className="w-5 h-5 mr-2 rounded-full bg-yellow-500/20 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
        Weekly Updates
      </div>
      <div className="flex items-center text-zinc-300 text-sm">
        <span className="w-5 h-5 mr-2 rounded-full bg-yellow-500/20 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
        Exclusive Content
      </div>
      <div className="flex items-center text-zinc-300 text-sm">
        <span className="w-5 h-5 mr-2 rounded-full bg-yellow-500/20 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
        No Spam
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-zinc-400 border-t border-zinc-700">
        © 2025 YourVeryOwnNews. All rights reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Contact Us</a>
      </footer>
    </main>
  );
}
