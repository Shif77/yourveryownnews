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
    audio: "/audio/udoy.mp3",
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
  
  // Clean up audio when component unmounts
  useEffect(() => {
    return () => {
      document.querySelectorAll('audio').forEach((a) => a.pause());
    };
  }, []);

  // Handle audio progress tracking
  useEffect(() => {
    if (playingId !== null) {
      const audio = document.getElementById(`audio-${playingId}`) as HTMLAudioElement;
      
      const updateProgress = () => {
        if (audio && !isNaN(audio.duration)) {
          const percentage = (audio.currentTime / audio.duration) * 100;
          setProgressBars(prev => ({...prev, [playingId]: percentage}));
        }
      };
      
      const progressInterval = setInterval(updateProgress, 500);
      audio?.addEventListener('timeupdate', updateProgress);
      
      return () => {
        clearInterval(progressInterval);
        audio?.removeEventListener('timeupdate', updateProgress);
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
      <div className="bg-zinc-800 rounded-2xl shadow-lg p-6 space-y-6 text-center border border-zinc-700 max-w-6xl mx-auto">
        <h1 className="text-3xl font-serif text-yellow-400 font-extrabold tracking-wide mb-4">
        The Climb
        </h1>
        
        <p className="text-zinc-300 max-w-2xl mx-auto">
          Real stories from real people who transformed their challenges into opportunities.
          Listen to their journeys and find inspiration for your own path.
        </p>

       {/* Featured Story */}
<div className="mt-10 mb-12 p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out">
  <div className="text-sm text-gray-400 font-medium mb-3">FEATURED STORY</div>
  <h2 className="text-2xl text-white font-semibold mb-4">{stories[0].title}</h2>
  <p className="text-gray-300 italic mb-6 text-lg">“{stories[0].quote}”</p>
  
  <button
    className="px-6 py-3 bg-transparent border-2 border-gray-500 text-gray-200 rounded-full font-medium transition-colors duration-200 ease-in-out hover:bg-gray-700 hover:text-white"
    onClick={() => setSelectedStory(stories[0])}
  >
    <PlayCircle className="w-5 h-5 mr-3" />
    
  </button>
</div>


        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-zinc-700 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer border border-zinc-600"
              onClick={() => setSelectedStory(story)}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
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
                    <div className="w-full bg-zinc-600 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-yellow-400 h-full rounded-full transition-all duration-300"
                        style={{ width: `${progressBars[index] || 0}%` }}
                      ></div>
                    </div>
                    <audio 
                      id={`audio-${index}`} 
                      src={story.audio} 
                      preload="none" 
                      onEnded={() => setPlayingId(null)}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-t border-zinc-600 pt-2 mt-2">
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

        {/* Submission CTA */}
        <div className="mt-10 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-lg p-6 text-center shadow-md border border-zinc-600">
          <h3 className="text-xl font-semibold text-white mb-2">Have a story to share?</h3>
          <p className="text-zinc-300 mb-4">Your journey could inspire others facing similar challenges.</p>
          <a
            href="/submit-story"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-zinc-900 px-5 py-2 rounded-full font-medium transition-colors"
          >
            Submit Your Story
          </a>
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