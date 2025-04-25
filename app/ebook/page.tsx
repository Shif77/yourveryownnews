'use client';

import { useState, useEffect } from 'react';
import { PlayCircle, PauseCircle, X, Heart, Share2, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stories = [
  {
    title: "From Rock Bottom to Rise",
    name: "Fahad Rahaman Udoy",
    quote: "Rock bottom was the solid ground I needed to rebuild.",
    story:
      "Fahad lost his job during the pandemic. With no income and mounting anxiety, he started freelancing as a writer. Within a year, he created a content agency helping small businesses tell their stories. Now, he mentors others facing career shifts.",
    image: "/images/ebook/udoy.jpg",
    audio: "/images/audio/udoy.mp3",
    tags: ["Career", "Mental Health"],
    date: "April 18, 2025",
  },
  {
    title: "The Career Comeback",
    name: "Saykut",
    quote: "It's never too late to become what you might have been.",
    story:
      "After working 15 years in a factory, saykut taught himself programming through YouTube. He now works remotely for a Canadian startup and teaches others in his village how to code.",
    image: "/images/ebook/saykut.jpg",
    audio: "/audio/saykut.mp3",
    tags: ["Career", "Inspiration"],
    date: "April 10, 2025",
  },
  {
    title: "Owning My Identity",
    name: "Suraiya Jabin",
    quote: "The moment I accepted myself, the world became brighter.",
    story:
      "Growing up with self-doubt and fear, Suraiya struggled to express herself. Through writing and community, she embraced her uniqueness and now helps others do the same.",
    image: "/images/ebook/suraiya.jpg",
    audio: "/audio/suraiya.mp3",
    tags: ["Identity", "Confidence"],
    date: "March 27, 2025",
  },
];

export default function MotivationalStories() {
  const [playingId, setPlayingId] = useState<number | null>(null);
const [selectedStory, setSelectedStory] = useState<any>(null);
const [likes, setLikes] = useState<{[key: number]: boolean}>({});
const [bookmarks, setBookmarks] = useState<{[key: number]: boolean}>({});
const [progressBars, setProgressBars] = useState<{[key: number]: number}>({});
const [audioDurations, setAudioDurations] = useState<{[key: number]: number}>({});
const [currentTimes, setCurrentTimes] = useState<{[key: number]: number}>({});

const formatTime = (time: number): string => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

// Clean up audio when component unmounts
useEffect(() => {
  return () => {
    document.querySelectorAll('audio').forEach((a) => a.pause());
  };
}, []);

// Update the audio progress tracking effect
useEffect(() => {
  if (playingId !== null) {
    const audio = document.getElementById(`audio-${playingId}`) as HTMLAudioElement;
    
    const updateProgress = () => {
      if (audio && !isNaN(audio.duration)) {
        const percentage = (audio.currentTime / audio.duration) * 100;
        setProgressBars(prev => ({...prev, [playingId]: percentage}));
        setCurrentTimes(prev => ({...prev, [playingId]: audio.currentTime}));
        setAudioDurations(prev => ({...prev, [playingId]: audio.duration}));
      }
    };
    
    const progressInterval = setInterval(updateProgress, 500);
    audio?.addEventListener('timeupdate', updateProgress);
    audio?.addEventListener('loadedmetadata', updateProgress);
    
    return () => {
      clearInterval(progressInterval);
      audio?.removeEventListener('timeupdate', updateProgress);
      audio?.removeEventListener('loadedmetadata', updateProgress);
    };
  }
}, [playingId]);

const toggleAudio = (index: number) => (e: React.MouseEvent) => {
  e.stopPropagation();
  const audio = document.getElementById(`audio-${index}`) as HTMLAudioElement;
  if (!audio) return;

  if (audio.paused) {
    // Pause all other audio before playing new one
    document.querySelectorAll('audio').forEach((a) => a.pause());
    
    // Play with error handling
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error("Audio playback error:", error);
        setPlayingId(null);
      });
    }
    
    setPlayingId(index);
  } else {
    audio.pause();
    setPlayingId(null);
  }
};

const toggleLike = (index: number) => (e: React.MouseEvent) => {
  e.stopPropagation();
  setLikes(prev => ({...prev, [index]: !prev[index]}));
};

const toggleBookmark = (index: number) => (e: React.MouseEvent) => {
  e.stopPropagation();
  setBookmarks(prev => ({...prev, [index]: !prev[index]}));
};

const handleShare = (story: any) => (e: React.MouseEvent) => {
  e.stopPropagation();
  if (navigator.share) {
    navigator.share({
      title: story.title,
      text: `Check out this inspiring story: ${story.quote} - ${story.name}`,
      url: window.location.href,
    }).catch((err) => {
      console.error('Error sharing:', err);
    });
  } else {
    alert('Share functionality not supported on this browser');
  }
};

return (
  <main className="bg-zinc-900 text-white min-h-screen p-6">

    
      
        {/* Modern Magazine-style Layout */}
<div className="max-w-7xl mx-auto">
  {/* Simple Header */}
  <div className="border-b border-zinc-800 mb-8">
    <div className="px-6 py-4">
      <div className="flex items-baseline gap-2">
        <h1 className="text-2xl font-bold tracking-tight">
          The <span className="text-yellow-400">Climb</span>
        </h1>
        <span className="text-sm text-zinc-500">Stories of Transformation</span>
      </div>
    </div>
  </div>

  {/* Hero Section */}
  <div className="relative h-[70vh] mb-12">
    <div className="absolute inset-0">
      <img 
        src={stories[0].image} 
        alt="Hero background" 
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
    </div>

    <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          The Climb
        </h1>
        
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-zinc-200">
            {stories[0].quote}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSelectedStory(stories[0])}
              className="flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-100 transition-colors"
            >
              <PlayCircle className="w-5 h-5" />
              Play Featured Story
            </button>
            <span className="text-zinc-400">By {stories[0].name}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Stories Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {stories.map((story, index) => (
      <motion.div
        key={index}
        className="bg-zinc-700/70 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer border border-zinc-600/50 group"
        onClick={() => setSelectedStory(story)}
        whileHover={{ scale: 1.03, y: -5 }}
      >
        <div className="relative">
          <img
            src={story.image}
            alt={story.name}
            className="w-full h-56 object-cover transition-transform group-hover:scale-105 duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
          <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-xs text-white px-2 py-1 rounded-full">
            {story.date}
          </div>
        </div>
        <div className="p-4 text-left space-y-2">
          <h2 className="text-lg font-semibold text-yellow-300">
            {story.title}
          </h2>
          <p className="italic text-zinc-300 text-sm">"{story.quote}"</p>
          
          {/* Audio and progress bar */}
<div className="mt-3 space-y-2">
  <div className="flex items-center gap-2">
    <button
      onClick={toggleAudio(index)}
      className="text-yellow-400 hover:text-yellow-300 flex-shrink-0"
      aria-label={playingId === index ? "Pause audio" : "Play audio"}
    >
      {playingId === index ? (
        <PauseCircle className="w-6 h-6" />
      ) : (
        <PlayCircle className="w-6 h-6" />
      )}
    </button>
    
    <div className="flex-1 space-y-1">
      <input
        type="range"
        min="0"
        max="100"
        value={progressBars[index] || 0}
        onChange={(e) => {
          const audio = document.getElementById(`audio-${index}`) as HTMLAudioElement;
          if (audio) {
            const time = (parseFloat(e.target.value) * audio.duration) / 100;
            audio.currentTime = time;
          }
        }}
        className="w-full h-1.5 bg-zinc-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow-400"
      />
      
      <div className="flex justify-between text-xs text-zinc-400">
        <span>{formatTime(currentTimes[index] || 0)}</span>
        <span>{formatTime(audioDurations[index] || 0)}</span>
      </div>
    </div>
    
    <audio 
      id={`audio-${index}`} 
      src={story.audio} 
      preload="metadata" 
      onEnded={() => setPlayingId(null)}
    />
  </div>
</div>
          
          <div className="flex items-center justify-between border-t border-zinc-600/50 pt-2 mt-2">
            <span className="text-xs text-zinc-400">— {story.name}</span>
            <div className="flex gap-2">
              <button
                onClick={toggleLike(index)}
                className={`${likes[index] ? 'text-red-500' : 'text-zinc-400 hover:text-red-500'} transition-colors`}
                aria-label="Like this story"
              >
                <Heart className="w-5 h-5" fill={likes[index] ? "currentColor" : "none"} />
              </button>
              <button
                onClick={toggleBookmark(index)}
                className={`${bookmarks[index] ? 'text-yellow-400' : 'text-zinc-400 hover:text-yellow-400'} transition-colors`}
                aria-label="Bookmark this story"
              >
                <Bookmark className="w-5 h-5" fill={bookmarks[index] ? "currentColor" : "none"} />
              </button>
              <button
                onClick={handleShare(story)}
                className="text-zinc-400 hover:text-blue-400 transition-colors"
                aria-label="Share this story"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>

        {/* Enhanced Submission CTA */}
<div className="mt-8 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-yellow-900/20 to-orange-900/20 blur-xl"></div>
  
  <div className="relative bg-gradient-to-b from-zinc-800/80 to-zinc-900/90 rounded-xl p-8 border border-zinc-700/50">
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl"></div>
    <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
    
    <div className="relative z-10 flex flex-col items-center">
      {/* Icon container with animated ring */}
      <div className="relative mb-6 group">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur animate-pulse"></div>
        <div className="relative bg-zinc-900 p-4 rounded-full border-2 border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-300">
          <svg 
            className="w-8 h-8 text-yellow-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          </svg>
        </div>
      </div>

      <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-3">
        Share Your Journey
      </h3>
      
      <p className="text-zinc-400 text-center max-w-md mb-6">
        Your story has the power to inspire others. Join our community of storytellers and make a difference.
      </p>

      <a
        href="/submit-story"
        className="group relative inline-flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-zinc-900 font-semibold text-sm hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 flex items-center gap-2">
          Start Writing
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </a>
    </div>
  </div>
</div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              className="bg-zinc-800 text-white rounded-xl overflow-hidden max-w-xl w-full relative shadow-lg border border-zinc-700"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.name}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-yellow-400 mb-1">{selectedStory.date}</div>
                  <h2 className="text-2xl font-bold text-white">
                    {selectedStory.title}
                  </h2>
                  <p className="text-zinc-300 italic">"{selectedStory.quote}"</p>
                </div>
                <button
                  className="absolute top-4 right-4 text-white hover:text-yellow-400 bg-black bg-opacity-50 rounded-full p-1"
                  onClick={() => setSelectedStory(null)}
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <p className="text-zinc-200 leading-relaxed">{selectedStory.story}</p>
                
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center text-yellow-400 font-semibold">
                    {selectedStory.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-white">{selectedStory.name}</div>
                    <div className="text-xs text-zinc-400">{selectedStory.tags.join(" • ")}</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-zinc-700">
                  <div className="flex gap-3">
                    {selectedStory.audio && (
                      <button
                        onClick={(e) => {
                          const index = stories.findIndex(s => s.title === selectedStory.title);
                          if (index !== -1) toggleAudio(index)(e);
                        }}
                        className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-zinc-900 px-4 py-2 rounded-full font-medium"
                      >
                        {playingId !== null && stories[playingId]?.title === selectedStory.title ? (
                          <>
                            <PauseCircle className="w-5 h-5" />
                            <span>Pause</span>
                          </>
                        ) : (
                          <>
                            <PlayCircle className="w-5 h-5" />
                            <span>Listen</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={toggleLike(stories.findIndex(s => s.title === selectedStory.title))}
                      className={`p-2 rounded-full ${
                        likes[stories.findIndex(s => s.title === selectedStory.title)] 
                          ? 'bg-red-500 text-white' 
                          : 'bg-zinc-700 text-zinc-300'
                      }`}
                      aria-label="Like this story"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    <button
                      onClick={toggleBookmark(stories.findIndex(s => s.title === selectedStory.title))}
                      className={`p-2 rounded-full ${
                        bookmarks[stories.findIndex(s => s.title === selectedStory.title)] 
                          ? 'bg-yellow-400 text-zinc-900' 
                          : 'bg-zinc-700 text-zinc-300'
                      }`}
                      aria-label="Bookmark this story"
                    >
                      <Bookmark className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleShare(selectedStory)}
                      className="p-2 rounded-full bg-zinc-700 text-zinc-300 hover:text-white"
                      aria-label="Share this story"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}