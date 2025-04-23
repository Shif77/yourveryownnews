'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, Star, BookOpen, Users, Award } from "lucide-react";
import { ReactNode  } from 'react';


export default function CareerPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("learn");

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Product Manager",
      quote: "The storytelling framework completely transformed my interview approach. I landed my dream job after just two practice sessions!",
      img: "/api/placeholder/64/64"
    },
    {
      name: "Priya Sharma",
      role: "UX Designer",
      quote: "Learning to craft compelling stories about my work helped me showcase my impact in a way that resonated with hiring managers.",
      img: "/api/placeholder/64/64"
    }
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl overflow-hidden mb-12 text-white">
        <div className="absolute inset-0 bg-black opacity-10 pattern-dots"></div>
        <div className="relative z-10 p-10 md:p-16">
          <span className="inline-block px-3 py-1 bg-indigo-900 bg-opacity-60 rounded-full text-sm font-medium mb-4">
            Weekly Skills Masterclass
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Master Career-defining Skills<br />
            <span className="text-indigo-200">One Week at a Time</span>
          </h1>
          <p className="text-white text-lg max-w-xl mb-8">
            Join thousands of professionals elevating their careers through our focused weekly skill training. Each skill is carefully selected to make you stand out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/premium">
              <button className="px-6 py-3 bg-white text-indigo-800 hover:bg-indigo-100 font-semibold rounded-xl shadow-lg transition-all">
                Get Started Free
              </button>
            </Link>
            <button
              className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-40 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all"
              onClick={() => setIsVideoPlaying(true)}
            >
              <span className="h-5 w-5 bg-white rounded-full flex items-center justify-center">
                ▶
              </span>
              See how it works
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 hidden lg:block">
          <img src="/api/placeholder/300/300" alt="Career growth illustration" className="w-full" />
        </div>
      </section>

      {/* Current Week's Featured Skill */}
      <section className="bg-white rounded-2xl shadow-lg mb-12 overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="bg-indigo-100 text-indigo-800 p-2 rounded-xl">
                <BookOpen size={24} />
              </span>
              <h2 className="text-2xl font-bold">This Week's Featured Skill</h2>
            </div>
            <span className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">High-impact</span>
          </div>

          <h3 className="text-3xl font-bold mb-4">Storytelling in Interviews</h3>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <p className="text-gray-800 text-lg mb-6">
                Storytelling transforms ordinary interview answers into memorable ones. Learn the STAR method 
                (Situation, Task, Action, Result) with our advanced framework that gets you noticed.
              </p>

              <div className="bg-gray-100 rounded-xl p-6 mb-6">
                <h4 className="font-semibold mb-2 text-gray-900">Why this skill matters:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>Hiring managers remember stories 22x more than facts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>Demonstrates your impact in a compelling way</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>Humanizes your professional experience</span>
                  </li>
                </ul>
              </div>

              <div className="bg-indigo-100 border-l-4 border-indigo-500 p-5 rounded-lg">
                <h4 className="font-semibold text-indigo-900 mb-1">Transform your answer:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-red-600 font-medium mb-1">Before:</div>
                    <p className="text-gray-700">"I led a project that improved our metrics."</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-emerald-600 font-medium mb-1">After:</div>
                    <p className="text-gray-700">"When our launch was delayed, I initiated a fast-track workflow that cut 4 days off delivery — saving us a major client."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold mb-4">Weekly Challenge</h4>
              <div className="space-y-4">
                <p className="text-gray-800">Craft your most compelling work story using our STAR template.</p>
                <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
                  Practice Exercise
                </div>
                <p className="text-sm text-gray-500 italic">Premium members get personalized feedback on their stories</p>
                <Link href="/premium">
                  <button className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all">
                    Access Full Challenge
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Content */}
        <div className="border-t border-gray-200">
          <div className="flex">
            {["learn", "practice", "master"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-4 font-medium text-sm flex-1 ${
                  activeTab === tab
                    ? "text-indigo-700 border-b-2 border-indigo-700 bg-gray-50"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === "learn" && (
              <ContentBlock icon={<BookOpen size={24} />} title="Interview Storytelling Framework" desc="10-minute video + template" button="Watch Now" />
            )}
            {activeTab === "practice" && (
              <ContentBlock icon={<Users size={24} />} title="Live Practice Session" desc="Thursday, 7pm ET (30 min)" button="Reserve Spot" />
            )}
            {activeTab === "master" && (
              <ContentBlock icon={<Award size={24} />} title="Expert Feedback" desc="Get personalized coaching on your stories" button="Submit Story" />
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-800">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-800 rounded-2xl shadow-lg text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Accelerate Your Career Growth</h2>
        <p className="text-indigo-100 max-w-lg mx-auto mb-8">
          Get weekly skill training, live practice sessions, and personalized feedback from industry experts — all with our Premium career growth kit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 text-white text-sm">
          <FeatureItem text="Weekly skill workshops" />
          <FeatureItem text="Practice templates" />
          <FeatureItem text="Expert feedback" />
        </div>
        <Link href="/premium">
          <button className="px-8 py-4 bg-white text-indigo-700 hover:bg-indigo-100 font-semibold rounded-xl shadow-lg transition-all">
            Get Premium Access
          </button>
        </Link>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold text-lg">How Weekly Skills Masterclass Works</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsVideoPlaying(false)}
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-600">
              Video Player Placeholder
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ContentBlock({ icon, title, desc, button }: { icon: ReactNode; title: string; desc: string; button: string }) {
    return (
      <div className="flex items-center gap-3">
        <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-gray-600">{desc}</p>
        </div>
        <Link href="/premium" className="ml-auto">
          <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg text-sm font-medium flex items-center gap-2">
            {button}
            <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    );
  }

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="h-6 w-6 bg-indigo-400 bg-opacity-30 rounded-full flex items-center justify-center text-sm">✓</span>
      <span>{text}</span>
    </div>
  );
}
