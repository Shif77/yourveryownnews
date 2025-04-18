"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HiddenGems() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-800'} font-sans transition-colors duration-500`}>

      {/* Toggle */}
      <div className="flex justify-end px-6 pt-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border px-4 py-1 rounded-full text-sm hover:bg-yellow-400 hover:text-black transition"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <Image 
          src="/hidden-hero.jpg" 
          alt="Hidden Gem Banner" 
          layout="fill" 
          objectFit="cover" 
          className="z-0 brightness-75"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg">This Week's Hidden Gem</h1>
          <p className="text-xl text-yellow-300 mt-4">Discover places only the lucky stumble upon</p>
        </div>
      </section>

      {/* Main Article Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-10">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">Panthapath Lake Retreat</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            A hidden sanctuary nestled within the chaos of Dhaka’s urban maze. Tranquil, untouched, and almost dreamlike.
          </p>
        </div>

        {/* Article */}
        <article className="space-y-6 text-lg leading-8 text-zinc-700 dark:text-zinc-200">
          <p>
            Not many know about the serene lake behind Panthapath — a quiet escape where nature paints golden hues on water at dusk.
            This retreat is more than just a place; it's a feeling. Morning joggers whisper their greetings, and old men
            sit with flasks of tea, remembering the past.
          </p>

          <Image src="/gem1.jpg" alt="Lake View" width={1000} height={600} className="rounded-xl mx-auto" />

          <p>
            The path around the lake twists gently, shaded by trees. At one turn, a small wooden dock extends into the water — a perfect spot
            for reflection or a candid photo. The gentle hum of city life fades, and all that remains is the ripple of calm water.
          </p>

          <Image src="/gem2.jpg" alt="Sunset Spot" width={1000} height={600} className="rounded-xl mx-auto" />

          <p>
            Locals cherish this secret. It’s where first dates happen, where solitude finds company. It might not be on TripAdvisor, but for
            those who find it — it stays with them forever.
          </p>

          <Image src="/gem3.jpg" alt="Local Life" width={1000} height={600} className="rounded-xl mx-auto" />
        </article>

        {/* How to Go */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">How to Get There</h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            From Panthapath signal, walk toward Square Hospital and take the small lane beside the yellow pharmacy.
            After 5 minutes of walking, the lake opens up beside an old mango tree. Rickshaws are available from all nearby bus stops.
          </p>
        </div>

        {/* Author Section */}
        <div className="flex items-center gap-4 mt-16 pt-10 border-t dark:border-zinc-600">
          <Image 
            src="/author.jpg" 
            alt="Author" 
            width={60} 
            height={60} 
            className="rounded-full object-cover border-2 border-yellow-500"
          />
          <div>
            <h4 className="text-xl font-semibold">Sarah Lin</h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Urban Explorer & Writer</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-12">
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            Instagram
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            Facebook
          </Link>
          <Link href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            Website
          </Link>
        </div>
      </section>
    </main>
  );
}
