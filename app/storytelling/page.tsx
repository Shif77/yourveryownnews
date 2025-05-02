'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface StoryState {
  currentStep: number;
  characterName: string;
  characterClass: string;
  choices: string[];
  storyPath: string;
  personalGoals: string[];
  challenges: string[];
  insights: string[];
  currentChapter: string;
}

const LIFE_CHALLENGES = {
  career: {
    title: "Career Growth",
    description: "Navigate your professional journey and find your true calling",
    challenges: [
      "Finding work-life balance",
      "Career transition",
      "Professional development",
      "Leadership growth"
    ]
  },
  personal: {
    title: "Personal Development",
    description: "Discover your inner potential and personal growth",
    challenges: [
      "Building self-confidence",
      "Managing stress",
      "Developing healthy habits",
      "Finding purpose"
    ]
  },
  relationships: {
    title: "Relationships & Connection",
    description: "Build meaningful connections and nurture relationships",
    challenges: [
      "Improving communication",
      "Setting boundaries",
      "Building trust",
      "Maintaining connections"
    ]
  }
};

export default function Storytelling() {
  const [storyState, setStoryState] = useState<StoryState>({
    currentStep: 1,
    characterName: '',
    characterClass: '',
    choices: [],
    storyPath: '',
    personalGoals: [],
    challenges: [],
    insights: [],
    currentChapter: ''
  });

  // Save progress to localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('storyState');
    if (savedState) {
      setStoryState(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('storyState', JSON.stringify(storyState));
  }, [storyState]);

  const updateStoryState = (updates: Partial<StoryState>) => {
    setStoryState(prev => ({ ...prev, ...updates }));
  };

  const resetStory = () => {
    setStoryState({
      currentStep: 1,
      characterName: '',
      characterClass: '',
      choices: [],
      storyPath: '',
      personalGoals: [],
      challenges: [],
      insights: [],
      currentChapter: ''
    });
    localStorage.removeItem('storyState');
  };

  const addInsight = (insight: string) => {
    updateStoryState({
      insights: [...storyState.insights, insight]
    });
  };

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="text-yellow-500 hover:text-yellow-400 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold">Your Personal Growth Journey</h1>
          <button 
            onClick={resetStory}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Reset Journey
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-zinc-800 rounded-full h-2 mb-8">
          <motion.div 
            className="bg-yellow-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(storyState.currentStep / 7) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={storyState.currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-800 rounded-xl p-8 shadow-lg"
          >
            {storyState.currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Welcome to Your Journey</h2>
                <p className="text-zinc-300">
                  This is more than just a story - it's a guided journey of self-discovery and personal growth.
                  Through this interactive experience, you'll explore different aspects of your life, make meaningful choices,
                  and gain insights that can help shape your future.
                </p>
                <div className="flex justify-end">
                  <button 
                    onClick={() => updateStoryState({ currentStep: 2 })}
                    className="px-6 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Begin Your Journey
                  </button>
                </div>
              </div>
            )}

            {storyState.currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Introduce Yourself</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      value={storyState.characterName}
                      onChange={(e) => updateStoryState({ characterName: e.target.value })}
                      className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 focus:border-yellow-500 focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Current Focus</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(LIFE_CHALLENGES).map(([key, value]) => (
                        <button
                          key={key}
                          onClick={() => updateStoryState({ characterClass: key, currentChapter: value.title })}
                          className={`p-4 rounded-lg transition-colors ${
                            storyState.characterClass === key
                              ? 'bg-yellow-500 text-black'
                              : 'bg-zinc-700 hover:bg-zinc-600'
                          }`}
                        >
                          <h3 className="font-bold mb-1">{value.title}</h3>
                          <p className="text-sm opacity-80">{value.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={() => updateStoryState({ currentStep: 3 })}
                    disabled={!storyState.characterName || !storyState.characterClass}
                    className="px-6 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {storyState.currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Your Current Challenge</h2>
                <p className="text-zinc-300 mb-6">
                  {storyState.characterName}, let's explore the specific challenges you're facing in your {storyState.currentChapter} journey.
                  Which of these resonates most with your current situation?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {LIFE_CHALLENGES[storyState.characterClass as keyof typeof LIFE_CHALLENGES].challenges.map((challenge, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        updateStoryState({
                          currentStep: 4,
                          challenges: [...storyState.challenges, challenge]
                        });
                      }}
                      className="p-6 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors text-left group"
                    >
                      <h3 className="font-bold mb-2 group-hover:text-yellow-500 transition-colors">{challenge}</h3>
                      <p className="text-zinc-300">Click to explore this challenge and discover strategies for growth</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {storyState.currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Your Approach</h2>
                <p className="text-zinc-300 mb-6">
                  When facing {storyState.challenges[storyState.challenges.length - 1]}, what's your typical approach?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => {
                      updateStoryState({ currentStep: 5 });
                      addInsight("Taking action and being proactive is a powerful approach to growth.");
                    }}
                    className="p-6 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors text-left group"
                  >
                    <h3 className="font-bold mb-2 group-hover:text-yellow-500 transition-colors">Action-Oriented</h3>
                    <p className="text-zinc-300">I prefer to take immediate action and learn through experience</p>
                  </button>
                  <button 
                    onClick={() => {
                      updateStoryState({ currentStep: 5 });
                      addInsight("Reflection and planning can lead to more sustainable long-term solutions.");
                    }}
                    className="p-6 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors text-left group"
                  >
                    <h3 className="font-bold mb-2 group-hover:text-yellow-500 transition-colors">Reflective</h3>
                    <p className="text-zinc-300">I like to analyze and plan before taking action</p>
                  </button>
                </div>
              </div>
            )}

            {storyState.currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Growth Strategies</h2>
                <p className="text-zinc-300 mb-6">
                  Based on your approach, here are some strategies that might help you overcome this challenge:
                </p>
                <div className="bg-zinc-700 p-6 rounded-lg space-y-4">
                  <h3 className="font-bold text-yellow-500">Recommended Actions</h3>
                  <ul className="list-disc list-inside space-y-2 text-zinc-300">
                    <li>Set specific, measurable goals for improvement</li>
                    <li>Create a daily routine that supports your growth</li>
                    <li>Seek feedback and mentorship from others</li>
                    <li>Practice self-reflection and journaling</li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={() => updateStoryState({ currentStep: 6 })}
                    className="px-6 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Continue Your Journey
                  </button>
                </div>
              </div>
            )}

            {storyState.currentStep === 6 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Your Growth Plan</h2>
                <p className="text-zinc-300 mb-6">
                  Let's create a concrete plan to help you achieve your goals. What specific action would you like to take first?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => {
                      updateStoryState({ 
                        currentStep: 7,
                        personalGoals: [...storyState.personalGoals, "Daily practice routine"]
                      });
                    }}
                    className="p-6 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors text-left group"
                  >
                    <h3 className="font-bold mb-2 group-hover:text-yellow-500 transition-colors">Daily Practice</h3>
                    <p className="text-zinc-300">Commit to a daily routine of small, consistent actions</p>
                  </button>
                  <button 
                    onClick={() => {
                      updateStoryState({ 
                        currentStep: 7,
                        personalGoals: [...storyState.personalGoals, "Weekly milestone goals"]
                      });
                    }}
                    className="p-6 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors text-left group"
                  >
                    <h3 className="font-bold mb-2 group-hover:text-yellow-500 transition-colors">Weekly Milestones</h3>
                    <p className="text-zinc-300">Set and track weekly goals to measure progress</p>
                  </button>
                </div>
              </div>
            )}

            {storyState.currentStep === 7 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Your Journey Continues</h2>
                <p className="text-zinc-300 mb-6">
                  Congratulations, {storyState.characterName}! You've taken important steps in your {storyState.currentChapter} journey.
                  Here's a summary of your growth path:
                </p>
                <div className="bg-zinc-700 p-6 rounded-lg space-y-4">
                  <h3 className="font-bold text-yellow-500">Your Growth Journey</h3>
                  <ul className="list-disc list-inside space-y-2 text-zinc-300">
                    <li>Focus Area: {storyState.currentChapter}</li>
                    <li>Current Challenge: {storyState.challenges[storyState.challenges.length - 1]}</li>
                    <li>Selected Goal: {storyState.personalGoals[storyState.personalGoals.length - 1]}</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-zinc-600">
                    <h4 className="font-bold mb-2">Key Insights</h4>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                      {storyState.insights.map((insight, index) => (
                        <li key={index}>{insight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <button 
                    onClick={resetStory}
                    className="px-6 py-2 bg-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-600 transition-colors"
                  >
                    Start New Journey
                  </button>
                  <Link href="/">
                    <button className="px-6 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors">
                      Return Home
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
} 