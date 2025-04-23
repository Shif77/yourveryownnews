'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function IdentityPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scroll = (scrollTop / docHeight) * 100;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-zinc-900 text-white min-h-screen px-6 py-10 relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-emerald-600 z-50" style={{ width: `${scrollProgress}%` }} />

      <article className="max-w-3xl mx-auto">

        {/* Series Intro */}
        <div className="bg-emerald-600 text-white px-6 py-4 rounded-xl mb-6 shadow-lg">
          <h2 className="text-2xl font-bold">✨ Weekly Identity Series</h2>
          <p className="text-sm text-emerald-100">A new post every week to help you build an authentic and iconic identity.</p>
        </div>

        {/* Weekly Title */}
        <h1 className="text-4xl font-bold mb-4">Breaking Free: Creating Your Iconic Identity</h1>
        <p className="text-zinc-400 mb-6">This Week’s Focus : K N O W T H Y S E L F · April 22, 2025 · 7 min read</p>

        <img
          src="/images/identity/know.png"
          alt="Creating Identity"
          className="w-full rounded-xl mb-6 shadow-lg"
        />

        {/* Key Takeaways */}
        <aside className="bg-zinc-800 p-4 rounded-xl mb-6 text-zinc-300">
          <h3 className="text-white font-semibold mb-2">🔑 Key Takeaways</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Discover your core values and purpose.</li>
            <li>Craft a consistent personal brand.</li>
            <li>Show up authentically every day.</li>
          </ul>
        </aside>

        <section className="space-y-6 text-lg leading-relaxed text-zinc-300">
          <p>
            Your identity is your most powerful brand. In a world where everyone follows trends, the real success lies in standing out — by being fully, unapologetically yourself.
          </p>

          <p>
            An iconic identity isn’t about being flashy. It’s about being consistent, confident, and intentional in how you show up — both online and offline. This journey starts with self-awareness and grows with self-expression.
          </p>

          <h2 className="text-2xl font-bold text-white">🧭 Step 1: Know Who You Are</h2>
          <p>
            Take time to explore your values, passions, and vision for the future. Ask yourself: What makes you come alive? What impact do you want to have? Your answers are the foundation of your iconic identity.
          </p>

          <h2 className="text-2xl font-bold text-white">🎯 Step 2: Define Your Signature Style</h2>
          <p>
            From how you speak to what you wear, everything sends a signal. Choose colors, words, and habits that reflect your inner clarity. A true icon isn't just noticed — they’re remembered.
          </p>

          <h2 className="text-2xl font-bold text-white">🚀 Step 3: Own It Daily</h2>
          <p>
            Confidence is a habit. Start showing up consistently — at work, online, and in personal circles — as your authentic self. The more aligned your actions are with your identity, the more magnetic you become.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-zinc-400">
            “Your identity is your superpower. Don't dilute it. Define it.” — Anonymous
          </blockquote>
        </section>

        {/* Interactive Journal Prompt */}
        <section className="mt-10 bg-zinc-800 p-6 rounded-xl text-zinc-300">
          <h3 className="text-white font-bold mb-2">📝 Your Turn</h3>
          <p className="mb-4">Reflect and journal your thoughts:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>3 values you live by</li>
            <li>Your personal style in 3 words</li>
            <li>One action you’ll take this week</li>
          </ul>
          <textarea
            className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-zinc-600"
            rows={4}
            placeholder="Start journaling here..."
          ></textarea>
        </section>
        {/* Share Button */}
<div className="mt-6">
  <button 
    onClick={() => {
      if (navigator.share) {
        navigator.share({
          title: 'Check out this awesome identity-building series!',
          url: window.location.href,
        });
      } else {
        alert('Sharing is not supported in your browser.');
      }
    }} 
    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
  >
    📤 Share this
  </button>
</div>

        {/* Author Bio */}
        <section className="mt-12 border-t pt-6 border-zinc-700 text-zinc-400">
          <h3 className="font-semibold text-white text-xl">About the Author</h3>
          <div className="flex items-center space-x-4 mt-4">
            <img src="/images/weeknd/athor.png" alt="Author" className="w-12 h-12 rounded-full" />
            <p>
              Hasin Arman Shifa is passionate about helping people build their authentic identity. 
              He shares weekly insights to inspire you to become your most iconic self.
            </p>
          </div>
        </section>

        {/* Navigation to other weeks */}
        <section className="mt-12">
          <h3 className="text-white text-xl font-semibold mb-4">📚 Past Weeks</h3>
          <ul className="space-y-2 text-emerald-400">
            <li><Link href="/identity/week-1">Week 1: Building Self-Awareness</Link></li>
            <li><Link href="/identity/week-2">Week 2: Visual Identity & Presence</Link></li>
            <li><Link href="/identity/week-3">Week 3: Communication that Resonates</Link></li>
          </ul>
        </section>

        {/* Premium Option */}
<div className="mt-16 text-center border-t border-gray-300 pt-10">
  <h2 className="text-2xl font-bold mb-2">🚀 Get More With Premium</h2>
  <p className="mb-4 text-gray-700">Unlock weekly exclusive updates, deeper insights, and secret tools to supercharge your identity journey.</p>
  <Link href="/premium">
    <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-2xl font-semibold shadow-md">
      🔓 Upgrade to Premium
    </button>
  </Link>
</div>
        

        {/* Back button */}
        <div className="mt-10">
          <Link href="/">
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl">← Back to Home</button>
          </Link>
        </div>
      </article>
    </main>
  );
}
