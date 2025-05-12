'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface StoryProgress {
  currentScene: number;
  choices: string[];
  userPreferences: string[];
  adaptiveElements: string[];
}

export default function AdaptiveStory() {
  const [progress, setProgress] = useState<StoryProgress>({
    currentScene: 1,
    choices: [],
    userPreferences: [],
    adaptiveElements: []
  });

  // Track user choices and adapt the story
  const [storyHistory, setStoryHistory] = useState<string[]>([]);

  useEffect(() => {
    // Load saved progress
    const savedProgress = localStorage.getItem('adaptiveStoryProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    // Save progress
    localStorage.setItem('adaptiveStoryProgress', JSON.stringify(progress));
  }, [progress]);

  const makeChoice = (choice: string) => {
    setProgress(prev => ({
      ...prev,
      choices: [...prev.choices, choice],
      currentScene: prev.currentScene + 1
    }));
    setStoryHistory(prev => [...prev, choice]);
  };

  return (
    <main className="min-h-screen bg-zinc-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400 transition-colors">
            ← Back to Home
          </Link>
        </div>

        {/* Progress Indicator */}
        <div className="w-full bg-zinc-800 rounded-full h-2 mb-8">
          <motion.div
            className="bg-yellow-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(progress.currentScene / 5) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Story Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={progress.currentScene}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-zinc-800 rounded-xl p-8 shadow-lg"
          >
            {/* Dynamic Story Content Based on Choices */}
            <div className="space-y-6">
              {progress.currentScene === 1 && (
                <>
                  <h1 className="text-3xl font-bold mb-4">The Beginning of Your Tale</h1>
                  <p className="text-zinc-300 leading-relaxed">
                    As you step into this world, your choices will shape the very fabric of the story.
                    The narrative will adapt to your decisions, creating a unique experience tailored to you.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <button
                      onClick={() => makeChoice('Embrace Adventure')}
                      className="p-4 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-xl transition-colors"
                    >
                      Embrace the Adventure
                    </button>
                    <button
                      onClick={() => makeChoice('Seek Knowledge')}
                      className="p-4 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-xl transition-colors"
                    >
                      Seek Ancient Knowledge
                    </button>
                  </div>
                </>
              )}
              {/* Add more scenes with adaptive content */}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Choice History */}
        <div className="mt-8 p-6 bg-zinc-800/50 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Your Journey So Far</h3>
          <div className="space-y-2">
            {storyHistory.map((choice, index) => (
              <div key={index} className="text-zinc-400">
                {choice}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}