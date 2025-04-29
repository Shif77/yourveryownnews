'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Heart, 
  Share2, 
  Bookmark,
  Sun,
  Moon,
  Wind,
  Waves,
  Bird,
  Bell,
  Sparkles,
  Music,
  Info,
  Clock,
  Target,
  Brain,
  HeartPulse,
  Leaf,
  X,
  ArrowRight
} from "lucide-react";

const meditationTypes = [
  {
    id: "breathing",
    name: "Deep Breathing",
    icon: Wind,
    duration: 300,
    description: "Focus on your breath to calm the mind",
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "Reduces stress and anxiety",
      "Improves focus and concentration",
      "Enhances oxygen flow to the brain",
      "Promotes relaxation and calmness"
    ],
    instructions: [
      "Find a comfortable seated position",
      "Place one hand on your chest and one on your belly",
      "Inhale deeply through your nose for 4 counts",
      "Hold your breath for 2 counts",
      "Exhale slowly through your mouth for 6 counts",
      "Repeat for the duration of the session"
    ],
    tips: "Try to maintain a steady rhythm and focus on the sensation of your breath moving in and out of your body.",
    article: {
      title: "The Science of Deep Breathing",
      content: `Deep breathing is more than just a relaxation technique—it's a powerful tool backed by science. When we breathe deeply, we activate the parasympathetic nervous system, which helps reduce stress and anxiety.

Research shows that deep breathing can:
- Lower blood pressure
- Reduce cortisol levels
- Improve immune function
- Enhance cognitive performance

The 4-7-8 breathing technique, developed by Dr. Andrew Weil, is particularly effective. It involves inhaling for 4 seconds, holding for 7 seconds, and exhaling for 8 seconds. This pattern helps regulate the nervous system and promotes deep relaxation.

Regular practice of deep breathing can lead to:
- Better stress management
- Improved sleep quality
- Enhanced emotional regulation
- Increased mindfulness

To get the most out of your deep breathing practice:
1. Find a quiet space
2. Sit comfortably with good posture
3. Focus on your breath
4. Practice regularly
5. Be patient with yourself

Remember, like any skill, deep breathing takes practice. Start with just a few minutes each day and gradually increase your practice time.`,
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024"
    }
  },
  {
    id: "body-scan",
    name: "Body Scan",
    icon: Sun,
    duration: 420,
    description: "Progressive relaxation through body awareness",
    color: "from-amber-500 to-orange-500",
    benefits: [
      "Releases physical tension",
      "Improves body awareness",
      "Enhances sleep quality",
      "Reduces muscle stiffness"
    ],
    instructions: [
      "Lie down in a comfortable position",
      "Start by focusing on your toes",
      "Gradually move your attention up through your body",
      "Notice any areas of tension",
      "Breathe into those areas to release tension",
      "Complete the scan from toes to head"
    ],
    tips: "Move slowly and methodically through each part of your body, spending extra time on areas that feel tense.",
    article: {
      title: "The Art of Body Scanning",
      content: `Body scanning is a mindfulness practice that helps you develop a deeper connection with your physical self. It's particularly effective for stress reduction and improving sleep quality.

The practice originated from traditional mindfulness techniques and has been adapted for modern therapeutic use. Studies have shown that regular body scanning can:
- Reduce chronic pain
- Improve sleep quality
- Enhance body awareness
- Decrease anxiety levels

The key to effective body scanning is:
1. Moving slowly through each body part
2. Noticing sensations without judgment
3. Breathing into areas of tension
4. Maintaining a gentle awareness

Common challenges include:
- Difficulty staying focused
- Impatience with the process
- Discomfort with certain body parts
- Falling asleep during practice

Tips for success:
- Start with shorter sessions
- Use guided recordings
- Practice in a comfortable position
- Be patient with yourself

Remember that body scanning is a skill that develops over time. Regular practice will help you become more attuned to your body's signals and needs.`,
      author: "Dr. Michael Chen",
      date: "March 18, 2024"
    }
  },
  {
    id: "sound",
    name: "Sound Meditation",
    icon: Music,
    duration: 360,
    description: "Focus on ambient sounds to find peace",
    color: "from-purple-500 to-pink-500",
    benefits: [
      "Enhances auditory awareness",
      "Promotes deep relaxation",
      "Improves concentration",
      "Reduces mental chatter"
    ],
    instructions: [
      "Choose your preferred ambient sound",
      "Close your eyes and focus on the sound",
      "Notice how the sound changes and evolves",
      "Let go of any thoughts that arise",
      "Simply be present with the sound"
    ],
    tips: "Try to identify different layers and frequencies within the sound to deepen your focus.",
    article: {
      title: "The Healing Power of Sound",
      content: `Sound meditation is an ancient practice that uses various sounds to induce deep states of relaxation and healing. Modern research has shown that certain frequencies can have profound effects on our mental and physical well-being.

Different types of sound meditation:
- Binaural beats
- Singing bowls
- Nature sounds
- Mantra chanting

Benefits of sound meditation:
- Reduces stress and anxiety
- Improves sleep quality
- Enhances focus and concentration
- Promotes emotional healing

The science behind sound healing:
- Brainwave entrainment
- Resonance effects
- Vibration therapy
- Sound frequency impact

Tips for effective practice:
1. Choose sounds that resonate with you
2. Create a comfortable environment
3. Use quality headphones or speakers
4. Practice regularly
5. Be open to the experience

Remember that sound meditation is a personal journey. What works for one person may not work for another. Experiment with different sounds and find what works best for you.`,
      author: "Dr. Emily Rodriguez",
      date: "March 20, 2024"
    }
  },
  {
    id: "visual",
    name: "Visual Focus",
    icon: Sparkles,
    duration: 300,
    description: "Use visual elements to enhance concentration",
    color: "from-emerald-500 to-teal-500",
    benefits: [
      "Improves visual focus",
      "Enhances mental clarity",
      "Reduces eye strain",
      "Promotes creative thinking"
    ],
    instructions: [
      "Choose a visual focus point",
      "Maintain soft gaze on the object",
      "Notice details and patterns",
      "Allow your vision to soften",
      "Breathe naturally while maintaining focus"
    ],
    tips: "If your mind wanders, gently bring your attention back to the visual object without judgment.",
    article: {
      title: "Visual Meditation: Seeing Beyond the Surface",
      content: `Visual meditation is a powerful practice that combines the benefits of mindfulness with visual stimulation. It's particularly effective for those who find traditional meditation challenging.

Types of visual meditation:
- Candle gazing
- Mandala meditation
- Nature observation
- Color visualization

Scientific benefits:
- Improves visual processing
- Enhances attention span
- Reduces eye strain
- Promotes creative thinking

The practice involves:
1. Selecting a visual focus point
2. Maintaining a soft gaze
3. Observing without judgment
4. Noticing subtle changes
5. Staying present with the experience

Common challenges:
- Eye fatigue
- Difficulty maintaining focus
- Visual distractions
- Mental wandering

Tips for success:
- Start with short sessions
- Choose appropriate lighting
- Take breaks when needed
- Practice regularly

Visual meditation can be particularly helpful for people who work with screens or need to improve their visual focus. It's a versatile practice that can be adapted to various settings and needs.`,
      author: "Dr. James Wilson",
      date: "March 22, 2024"
    }
  },
];

const ambientSounds = [
  { 
    id: "rain", 
    name: "Rain", 
    icon: Waves,
    description: "Gentle rainfall creates a peaceful atmosphere, perfect for relaxation and sleep",
    benefits: "Helps reduce stress and anxiety, promotes deep relaxation"
  },
  { 
    id: "forest", 
    name: "Forest", 
    icon: Bird,
    description: "Natural forest sounds with birdsong and rustling leaves",
    benefits: "Enhances connection with nature, improves mood and focus"
  },
  { 
    id: "bell", 
    name: "Singing Bowl", 
    icon: Bell,
    description: "Harmonious tones from Tibetan singing bowls",
    benefits: "Promotes deep meditation, clears mental clutter"
  },
];

const benefits = [
  {
    icon: Brain,
    title: "Mental Clarity",
    description: "Regular meditation improves focus and cognitive function"
  },
  {
    icon: HeartPulse,
    title: "Stress Reduction",
    description: "Lowers cortisol levels and promotes relaxation"
  },
  {
    icon: Target,
    title: "Better Focus",
    description: "Enhances attention span and concentration"
  },
  {
    icon: Leaf,
    title: "Emotional Balance",
    description: "Helps manage emotions and improve mood"
  }
];

export default function MindfulMinutePage() {
  const [selectedType, setSelectedType] = useState(meditationTypes[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [selectedSound, setSelectedSound] = useState(ambientSounds[0]);
  const [isMuted, setIsMuted] = useState(false);
  const [showGuides, setShowGuides] = useState(false);
  const [currentGuide, setCurrentGuide] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showArticle, setShowArticle] = useState(false);

  const guides = [
    "Find a comfortable position",
    "Close your eyes gently",
    "Take a deep breath in...",
    "And slowly exhale...",
    "Let go of any tension",
    "Be present in this moment",
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isPlaying) {
      setIsPlaying(false);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeRemaining]);

  const startMeditation = () => {
    setTimeRemaining(selectedType.duration);
    setIsPlaying(true);
    setShowGuides(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -top-64 -right-64"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl -bottom-64 -left-64"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Mindful Space
          </motion.h1>
          <motion.p
            className="text-xl text-zinc-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Choose your meditation practice and find your moment of peace
          </motion.p>
        </motion.header>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800/60 backdrop-blur-lg rounded-xl p-6"
            >
              <benefit.icon className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-zinc-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Meditation Types */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {meditationTypes.map((type) => (
            <motion.button
              key={type.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedType(type);
                setShowArticle(true);
              }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${type.color} ${
                selectedType.id === type.id
                  ? "ring-4 ring-white/20"
                  : "opacity-80 hover:opacity-100"
              } transition-all duration-300 text-left`}
            >
              <div className="flex items-start justify-between mb-4">
                <type.icon className="w-8 h-8" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDetails(!showDetails);
                  }}
                  className="p-2 rounded-full hover:bg-white/10"
                >
                  <Info size={20} />
                </button>
              </div>
              <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
              <p className="text-sm text-white/80 mb-2">{type.description}</p>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} />
                <span>{formatTime(type.duration)}</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                <span>Read Article</span>
                <ArrowRight size={16} />
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Article Modal */}
        <AnimatePresence>
          {showArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowArticle(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-zinc-800/90 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{selectedType.article.title}</h2>
                      <div className="flex items-center gap-4 text-sm text-zinc-400">
                        <span>By {selectedType.article.author}</span>
                        <span>•</span>
                        <span>{selectedType.article.date}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowArticle(false)}
                      className="p-2 rounded-full hover:bg-zinc-700 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    {selectedType.article.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-zinc-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Play size={20} />
                      Start Meditation
                    </button>
                    <button
                      onClick={() => setShowArticle(false)}
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Meditation Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-zinc-800/60 backdrop-blur-lg rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">{selectedType.name}</h3>
              <p className="text-zinc-400">{selectedType.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-3 bg-zinc-700/50 rounded-full hover:bg-zinc-600 transition-colors"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
            </div>
          </div>

          {/* Timer Display */}
          <div className="text-center mb-8">
            <motion.div
              className="text-7xl font-bold mb-4"
              key={timeRemaining}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {formatTime(timeRemaining)}
            </motion.div>
            <div className="flex justify-center gap-4">
              {ambientSounds.map((sound) => (
                <button
                  key={sound.id}
                  onClick={() => setSelectedSound(sound)}
                  className={`p-3 rounded-full transition-colors ${
                    selectedSound.id === sound.id
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-zinc-700/50 text-zinc-400 hover:bg-zinc-600"
                  }`}
                >
                  <sound.icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Meditation Guide */}
          <AnimatePresence>
            {showGuides && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-zinc-700/30 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Guided Meditation</h4>
                  <button
                    onClick={() => setShowGuides(false)}
                    className="text-zinc-400 hover:text-white"
                  >
                    Hide
                  </button>
                </div>
                <motion.p
                  key={currentGuide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-lg text-center"
                >
                  {guides[currentGuide]}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Meditation Details */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 bg-zinc-700/30 rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold mb-4">Meditation Details</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-medium mb-2">Benefits</h5>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-zinc-300">
                      {selectedType.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Instructions</h5>
                    <ol className="list-decimal pl-4 space-y-1 text-sm text-zinc-300">
                      {selectedType.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Tips</h5>
                    <p className="text-sm text-zinc-300">{selectedType.tips}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-zinc-400"
        >
          <p className="text-sm">
            "The present moment is the only moment available to us, and it is the door to all moments."
          </p>
          <p className="mt-2 text-xs">— Thich Nhat Hanh</p>
        </motion.div>
      </div>
    </div>
  );
}
