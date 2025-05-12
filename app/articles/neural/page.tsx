'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface StoryNode {
  id: string;
  content: string;
  choices: {
    text: string;
    nextNode: string;
  }[];
}

interface StoryProgress {
  currentNode: string;
  pathHistory: string[];
  emotionalState: string;
  worldState: Record<string, any>;
}

export default function NeuralBranching() {
  const [progress, setProgress] = useState<StoryProgress>({
    currentNode: 'start',
    pathHistory: [],
    emotionalState: 'neutral',
    worldState: {}
  });

  const [storyNodes, setStoryNodes] = useState<Record<string, StoryNode>>({
    start: {
      id: 'start',
      content: 'Welcome to a story that evolves with every choice you make. The neural network adapts to your decisions, creating countless possible paths.',
      choices: [
        { text: 'Explore the Unknown', nextNode: 'explore' },
        { text: 'Analyze the System', nextNode: 'analyze' }
      ]
    },
    // Add more story nodes with branching paths
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem('neuralStoryProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('neuralStoryProgress', JSON.stringify(progress));
  }, [progress]);

  const makeChoice = (choice: string, nextNode: string) => {
    setProgress(prev => ({
      ...prev,
      currentNode: nextNode,
      pathHistory: [...prev.pathHistory, choice]
    }));
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

        {/* Story Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={progress.currentNode}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-zinc-800 rounded-xl p-8 shadow-lg"
          >
            <div className="space-y-6">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Neural Narrative Network
              </h1>
              
              {/* Current Node Content */}
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-zinc-300">
                  {storyNodes[progress.currentNode]?.content}
                </p>
              </div>

              {/* Choices */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {storyNodes[progress.currentNode]?.choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => makeChoice(choice.text, choice.nextNode)}
                    className="p-6 bg-zinc-700/50 hover:bg-zinc-700 border border-zinc-600 rounded-xl transition-all hover:scale-[1.02] hover:border-yellow-500/30"
                  >
                    <span className="block text-lg font-medium text-yellow-400 mb-2">
                      {choice.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Path History */}
        <div className="mt-8 p-6 bg-zinc-800/50 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Your Path Through the Network</h3>
          <div className="space-y-2">
            {progress.pathHistory.map((choice, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-yellow-500">→</span>
                <span className="text-zinc-400">{choice}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}