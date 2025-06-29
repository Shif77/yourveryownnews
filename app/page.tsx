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
          <Link href="/" className="hover:text-yellow-500">Home</Link>
          <Link href="#" className="hover:text-yellow-500">Podcast</Link>
          <Link href="/blogs" className="hover:text-yellow-500">Blogs</Link>
          <Link href="/football" className="hover:text-yellow-500">Football</Link>
          <Link href="/store" className="hover:text-yellow-500">Store</Link>
          <Link href="#" className="hover:text-yellow-500">Archive</Link>
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
              <h2 className="text-lg font-serif font-bold mb-2">Your Stories</h2>
            </div>
          </div>
        </Link>

        <Link href="/identity">
          <div className="md:col-span-1 bg-zinc-800 rounded-xl shadow-md relative overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <img src="/images/peaky.jpg" alt="Featured" className="w-full h-[250px] object-cover" />
            <div className="absolute bottom-0 left-4 text-left text-white p-4 rounded-lg max-w-[90%]">
              <h2 className="text-xl font-serif font-bold mb-2">Breaking Free: Creating Your Iconic Identity</h2>
            </div>
          </div>
        </Link>

        <Link href="/career">
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
        href: "/articles/Artist",
        img: "/images/articles/urban.jpg",
        title: "5 Urban Artists You Need to Follow Now",
        category: "Art & Culture",
        date: "Apr 6, 2025",
      },
      {
        href: "/articles/event",
        img: "/images/articles/event.jpg",
        title: "Looking for an event planner? Contact with them",
        category: "Event",
        date: "Apr 4, 2025",
      },
      {
        href: "/articles/mindful-minute",
        img: "/images/articles/reset.jpg",
        title: "The Pause Place",
        category: "Mindful Minute",
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




{/* Featured Creator Spotlight Section */}
<section className="px-4 sm:px-8 py-12 bg-zinc-900 text-white">
  <div className="max-w-4xl mx-auto">
    {/* Header with decorative elements */}
    <div className="flex flex-col items-center mb-8">
      <div className="flex items-center space-x-2 mb-2">
        <div className="h-0.5 w-6 bg-yellow-500"></div>
        <span className="text-sm uppercase tracking-wider text-yellow-500">Featured Content</span>
        <div className="h-0.5 w-6 bg-yellow-500"></div>
      </div>
      <h2 className="text-2xl font-bold">Content Spotlight</h2>
    </div>
    
    {/* Content card with distinctive styling */}
    <div className="relative group">
      {/* Subtle gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-700 via-yellow-500/50 to-zinc-700 rounded-lg opacity-50 blur-sm"></div>
      
      <div className="relative bg-zinc-800 rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Content preview */}
          <div className="relative">
            <img 
              src="/images/articles/story.jpeg" 
              alt="Featured Content" 
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 flex space-x-3">
              <a href="#" className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Content info - Reimagined */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Dynamic Title with Gradient */}
            <div className="relative">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-gradient-x">
                Digital Storytelling Revolution
              </h3>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-yellow-500 rounded-full"></div>
            </div>

            {/* Interactive Tag */}
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-xs font-medium animate-pulse">
                LIVE EXPERIENCE
              </span>
              <span className="text-zinc-400 text-sm">•</span>
              <span className="text-zinc-400 text-sm">Interactive Stories</span>
            </div>

            {/* Main Description with Dynamic Background */}
            <div className="relative p-6 bg-gradient-to-br from-zinc-800/50 via-zinc-900/50 to-zinc-800/50 rounded-xl border border-zinc-700/50 backdrop-blur-sm group hover:border-yellow-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <p className="text-zinc-300 relative z-10 leading-relaxed">
                Embark on a revolutionary journey where your choices shape the narrative. Our AI-driven storytelling platform creates unique, personalized adventures that evolve with every decision you make. Welcome to the future of interactive storytelling.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  ),
                  title: "Adaptive Stories",
                  desc: "Stories that learn and evolve",
                  href: "/articles/adaptive"
                },
                {
                  icon: (
                    <path d="M15.98 1.804A1 1 0 0017 3v16a1 1 0 01-1.02 1.196A4.5 4.5 0 0113.5 18v-1.5a1 1 0 011-1h1V8.5a1 1 0 00-1-1h-3.5V5.5a1 1 0 00-1-1h-1V3a1 1 0 011.02-1.196A4.5 4.5 0 0112 3v1.5h3.5c.24 0 .47.042.684.12z" />
                  ),
                  title: "Neural Branching",
                  desc: "Infinite story possibilities",
                  href: "/articles/neural"
                }
              ].map((feature, idx) => (
                <Link href={feature.href} key={idx}>
                  <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/30 hover:border-yellow-500/30 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <span className="p-2 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          {feature.icon}
                        </svg>
                      </span>
                      <div>
                        <h4 className="text-white font-medium group-hover:text-yellow-400 transition-colors">{feature.title}</h4>
                        <p className="text-sm text-zinc-400">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Call to Action */}
            <Link href="/storytelling" className="group">
              <button className="w-full relative overflow-hidden px-6 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium rounded-xl group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-500 transform group-hover:scale-[1.02]">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Begin Your Journey</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-white/20 to-yellow-400/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </Link>
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