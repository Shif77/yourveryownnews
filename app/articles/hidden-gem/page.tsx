"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HiddenGems() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="bg-gradient-to-b from-yellow-50 via-white to-white text-zinc-800 font-sans min-h-screen">
      
      {/* Hero Banner with Optimized Loading */}
      <section className="relative h-screen md:h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hidden-hero.jpg" 
            alt="Hidden Gem Banner"
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className={`transition-opacity duration-700 brightness-50 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl tracking-tight mb-6">
            This Week's <span className="text-yellow-300">Hidden Gem</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mt-4 font-medium drop-shadow-md max-w-2xl mx-auto leading-relaxed">
            A place untouched. A feeling unforgettable.
          </p>
          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-zinc-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Discover Now
          </button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 lg:py-24 space-y-20">
        
        {/* Place Title & Description */}
        <div className="text-center">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">NEWLY DISCOVERED</span>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-6 drop-shadow-sm">Panthapath Lake Retreat</h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-zinc-600">4.9 (86 local reviews)</span>
          </div>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            Behind the urban heartbeat of Dhaka lies a quiet mirror of the sky. This tranquil escape wraps you in reflections, bird calls, and whispers of the wind. It's not marked on a tourist map—but those who find it, never forget it.
          </p>
        </div>

        {/* Image Gallery with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { src: "/gem1.jpg", alt: "Lake View at Sunrise", caption: "Morning Reflections" },
            { src: "/gem2.jpg", alt: "Sunset by the Water", caption: "Golden Hour Magic" },
            { src: "/gem3.jpg", alt: "Local Fishermen", caption: "Authentic Experiences" }
          ].map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="aspect-w-4 aspect-h-3 w-full">
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  width={600} 
                  height={450} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {[
            { 
              icon: "🦜", 
              title: "Wildlife Watching", 
              desc: "Spot over 20 species of birds in their natural habitat" 
            },
            { 
              icon: "🌅", 
              title: "Perfect Sunsets", 
              desc: "Uninterrupted views of the horizon as day turns to dusk" 
            },
            { 
              icon: "🍵", 
              title: "Local Cuisine", 
              desc: "Try freshly brewed tea from nearby family-owned stalls" 
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-zinc-100">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">{feature.title}</h3>
              <p className="text-zinc-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Directions with Map Hint */}
        <div className="bg-yellow-50 p-8 md:p-10 rounded-3xl shadow-inner border border-yellow-200 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="bg-yellow-500 p-3 rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-yellow-800 mb-4">How to Get There</h3>
              <p className="text-md md:text-lg text-zinc-700 leading-relaxed mb-6">
                Start your journey at Square Hospital in Panthapath. From there, take the small alley beside the tea stall near the hospital gate. A short walk or rickshaw ride will reveal a serene lake wrapped in green. It's best enjoyed during golden hour, when the light dances on the water and the chaos fades behind you.
              </p>
              <div className="flex items-center">
                <Link href="#" className="text-yellow-700 font-medium flex items-center hover:text-yellow-900 transition-colors">
                  <span>View on Maps</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* User Testimonial */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center text-yellow-800 text-xl font-bold flex-shrink-0">
              RP
            </div>
            <div>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-700 italic mb-4">"I've lived in Dhaka for 15 years and never knew this place existed. It's like finding a secret garden. The contrast between the bustling city and this peaceful retreat is just magical."</p>
              <p className="font-medium text-zinc-900">Rahul P. • Local Explorer</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-yellow-50 to-amber-50 p-10 rounded-3xl">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4">Want to discover more hidden gems?</h3>
          <p className="text-lg text-zinc-700 mb-6 max-w-2xl mx-auto">Join our community of explorers and receive weekly updates about undiscovered places around the city.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-3 rounded-full border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-zinc-800 w-full sm:w-64"
            />
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
              Notify Me
            </button>
          </div>
        </div>

        {/* Next Week Teaser */}
        <div className="text-center pt-10 border-t border-zinc-200">
          <span className="text-xs font-semibold text-yellow-600 uppercase tracking-wide">Coming Next Week</span>
          <p className="text-zinc-600 italic text-lg mt-2">A hidden waterfall just minutes from the city center...</p>
          <div className="mt-6">
            <Link href="#" className="inline-flex items-center text-yellow-700 font-medium hover:text-yellow-800">
              <span>Get a reminder</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-semibold text-white">Hidden <span className="text-yellow-400">Gems</span></h2>
              <p className="mt-2">Revealing the extraordinary in the ordinary.</p>
            </div>
            <div className="flex space-x-6">
              {["Instagram", "Twitter", "Facebook"].map((social) => (
                <a key={social} href="#" className="hover:text-yellow-400 transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Hidden Gems Explorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}