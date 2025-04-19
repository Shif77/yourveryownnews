"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HiddenGems() {
  const [activeTab, setActiveTab] = useState('about');
  const [darkMode, setDarkMode] = useState(false);

  const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  return (
    <main
      className={`${
        darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-800'
      } font-sans min-h-screen transition-all duration-500 ease-in-out animate-[fadeZoom_0.5s_ease-out]`}
    >
      {/* Header */}
      <header className={`sticky top-0 z-10 flex justify-between items-center px-6 py-4 shadow-sm ${darkMode ? 'bg-zinc-800' : 'bg-white'} transition-colors duration-300`}>
        <h1 className="text-2xl font-bold">Hidden Gems</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-yellow-500 text-black p-2 rounded-full shadow hover:bg-yellow-400 transition-transform duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="white" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg> // Moon icon
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="black" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg> // Sun icon
          )}
        </button>
      </header>

      {/* Hero Banner */}
      <section className="relative h-96 w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: "url('/hidden-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)"
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            Panthapath Lake Retreat
          </h1>
          <p className="text-xl text-yellow-300 mt-4 mb-6">
            Dhaka's best kept secret, hiding in plain sight
          </p>
          <button className="bg-yellow-500 text-black py-2 px-6 rounded-full font-medium">
            Explore
          </button>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="border-b">
        <div className="max-w-4xl mx-auto flex overflow-x-auto">
          <button 
            onClick={() => setActiveTab('about')}
            className={`px-6 py-3 font-medium ${activeTab === 'about' ? 'border-b-2 border-yellow-500' : ''}`}
          >
            About
          </button>
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`px-6 py-3 font-medium ${activeTab === 'gallery' ? 'border-b-2 border-yellow-500' : ''}`}
          >
            Gallery
          </button>
          <button 
            onClick={() => setActiveTab('stories')}
            className={`px-6 py-3 font-medium ${activeTab === 'stories' ? 'border-b-2 border-yellow-500' : ''}`}
          >
            Community Stories
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-6 py-8 transition-colors duration-300 ease-in-out">
        {activeTab === 'about' && (
          <div>
            <div className="prose max-w-none">
              <p className="text-xl leading-relaxed">
                Not many know about the serene lake behind Panthapath — a quiet escape where nature paints golden hues on water at dusk.
                This retreat is more than just a place; it's a feeling. Morning joggers whisper their greetings, and old men
                sit with flasks of tea, remembering the past.
              </p>
              <div className="my-6 relative">
                <img 
                  src="/api/placeholder/1000/600" 
                  alt="Lake View" 
                  className="rounded-lg w-full"
                />
              </div>
              <h3 className="text-2xl font-bold mt-8 mb-4">A Hidden Ecosystem</h3>
              <p>
                What makes this lake truly special is its thriving ecosystem. Despite being surrounded by urban development, the lake hosts:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Over 20 species of birds, including kingfishers and herons</li>
                <li>Several varieties of local fish that local fishermen carefully maintain</li>
                <li>Water lilies that bloom spectacularly during summer months</li>
                <li>Ancient banyan trees estimated to be over 100 years old</li>
              </ul>
              <div className="bg-yellow-50 p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg flex items-center">
                  <span className="mr-2 text-yellow-600"><MapPinIcon /></span> How to Get There
                </h4>
                <p className="mt-2">
                  From Panthapath signal, walk toward Square Hospital and take the small lane beside the yellow pharmacy.
                  After 5 minutes of walking, the lake opens up beside an old mango tree. Rickshaws are available from all nearby bus stops.
                </p>
              </div>
              <h3 className="text-2xl font-bold mt-8 mb-4">Best Times to Visit</h3>
              <p>
                Early mornings (6AM-8AM) offer the most serene experience with beautiful mist over the water. Evenings around sunset (5PM-6:30PM) 
                provide spectacular golden light perfect for photography. Weekdays are generally less crowded than weekends.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img 
                    src={`/api/placeholder/400/${300 + index * 10}`}
                    alt={`Lake view ${index}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stories' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Community Stories</h2>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
                Share Your Story
              </button>
            </div>
            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white'} border rounded-lg shadow p-6`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${darkMode ? 'bg-zinc-700' : 'bg-zinc-200'} w-12 h-12 rounded-full`}></div>
                  <div>
                    <h4 className="font-bold">Rafiq Ahmed</h4>
                    <p className="text-sm text-zinc-500">April 12, 2025</p>
                  </div>
                </div>
                <p className="mb-4">I discovered this lake during my morning jog. The sunrise here is absolutely magical!</p>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="User photo" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white'} border rounded-lg shadow p-6`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${darkMode ? 'bg-zinc-700' : 'bg-zinc-200'} w-12 h-12 rounded-full`}></div>
                  <div>
                    <h4 className="font-bold">Mina Rahman</h4>
                    <p className="text-sm text-zinc-500">April 15, 2025</p>
                  </div>
                </div>
                <p>This hidden spot became my favorite reading corner. So peaceful despite being in the middle of Dhaka.</p>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white'} border rounded-lg shadow p-6 mt-8`}>
              <h3 className="text-xl font-bold mb-4">Share Your Story</h3>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block mb-1">Your Story</label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-lg border h-32"
                    placeholder="Tell us about your experience at Panthapath Lake..."
                  ></textarea>
                </div>
                <button 
                  className="bg-yellow-500 text-black px-6 py-2 rounded-lg"
                >
                  Submit Story
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-100 text-zinc-600'} py-8 mt-12 transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p>
            © 2025 Hidden Gems Dhaka. All rights reserved.
          </p>
          <div className="mt-4">
            <Link href="#" className="text-yellow-600 mx-2">About Us</Link>
            <Link href="#" className="text-yellow-600 mx-2">Contact</Link>
            <Link href="#" className="text-yellow-600 mx-2">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
