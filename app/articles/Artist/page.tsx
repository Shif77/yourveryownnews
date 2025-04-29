"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Artist {
  name: string;
  genre: string;
  image: string;
  bio: string;
  achievements: string[];
  social: {
    instagram: string;
    twitter: string;
    spotify: string;
  };
}

const topArtists: Artist[] = [
  {
    name: "Encore",
    genre: "Music",
    image: "/images/artist/encore.jpg",
    bio: "Encore is a prominent Bangladeshi rock band formed in 2004. They are known for their energetic live performances, catchy melodies, and heartfelt lyrics. Encore is composed of James (lead vocals, guitar), Bappa (bass, vocals), Jewel (drums, vocals), and Akash (keyboards, vocals). They have released several hit songs and won multiple awards, including the Bangladesh National Film Award for Best Music Direction in 2016.",
    achievements: ["Over 1M listeners", "Featured in National Awards"],
    social: {
      instagram: "@encore",
      twitter: "@encore",
      spotify: "Encore"
    }
  },
  {
    name: "Bagdhara",
    genre: "Music",
    image: "/images/artist/bagdhara.jpg",
    bio: "Bagdhara is an alternative rock band from Bangladesh. They are known for their music, which has been well-received by listeners, particularly young people. Bagdhara recently released their first album, Pochish Bochhor and a pre-released song, Proticchobi  which gained significant popularity.",
    achievements: ["World Dance Champion 2022", "TEDx Speaker", "Dance Workshop Founder"],
    social: {
      instagram: "@Bagdhara",
      twitter: "@Bagdhara",
      spotify: "Bagdhara"
    }
  },
  {
    name: "Karnival",
    genre: "Music",
    image: "/images/artist/karnival.jpg",
    bio: "Karnival is a Bangladeshi rock band known for its experimental and innovative sound, starting as a passion project among friends in 2006. They have released albums like Indraloy, Attotshorgo, Dysfunctional Motion Picture, and Mohomukti, and their music includes popular songs like Bhrom, Amar Shotto and Sheishob Din Ratri. Karnivals music has been described as highly experimental and ahead of its time.",
    achievements: ["International Mural Festival Winner", "Public Art Grant Recipient", "Community Art Program Director"],
    social: {
      instagram: "@karnival",
      twitter: "@karnival",
      spotify: "Karnival"
    }
  },
];

const localArtists: Artist[] = [
  {
    name: "Owned",
    genre: "Music",
    image: "/images/artist/owned.jpg",
    bio: "The music band Owned is a Bangladeshi band. Their name is derived from the bassist Ratul's catchphrase, owned. The band is also known for Ratul's talent as a guitarist, as he also plays in another band called Breach. Owned has plans to release two new albums, Republic and Tribute, and is working on songs called Nei and Abaro, which they intend to perform solo at a concert.",
    achievements: ["NYC Underground Artist of the Year", "Independent Music Award Winner", "Local Community Activist"],
    social: {
      instagram: "@Owned",
      twitter: "@Owned",
      spotify: "Owned"
    }
  },
  {
    name: "Sunehra Tasnim",
    genre: "Content Creator",
    image: "/images/artist/sunehra.jpg",
    bio: "Sunehra Tasnim is a well-known Bangladeshi content creator, influencer, and freelancer who focuses on lifestyle, fashion, and travel.",
    achievements: ["Fasion Award Winner", "Soul Train Fasion Award Nominee", "Community Youth Mentor"],
    social: {
      instagram: "@Sunehra",
      twitter: "@Sunehra",
      spotify: "Sunehra"
    }
  },
  {
    name: "Nadir On The Go",
    genre: "Travel Vlogger",
    image: "/images/artist/nadir.jpg",
    bio: "A multi-award-winning travel filmmaker and content creator who has built a global brand with over 7 Million followers.",
    achievements: ["LA Art Council Award", "International Street Art Festival Headliner", "Art Education Program Founder"],
    social: {
      instagram: "@Nadir",
      twitter: "@Nadir",
      spotify: "Nadir"
    }
  },
];

export default function ArtistPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Add effect to control body overflow
  useEffect(() => {
    if (isModalOpen || isStoryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isStoryOpen]);

  const openArtistModal = (artist: Artist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setCurrentTime(progress);
      if (audioRef.current.ended) {
        setIsPlaying(false);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const value = parseFloat(e.target.value);
      const time = (value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = time;
      setCurrentTime(value);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const openStory = () => {
    setIsStoryOpen(true);
  };

  const closeStory = () => {
    setIsStoryOpen(false);
  };

  const handleTrackClick = (index: number) => {
    if (selectedTrack === index) {
      // If clicking the currently playing track, toggle play/pause
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    } else {
      // If clicking a different track, stop current track and play new one
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setSelectedTrack(index);
      setIsPlaying(true);
      // Use setTimeout to ensure the audio element is updated before playing
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 0);
    }
  };

  // Add useEffect to handle cleanup
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y }}
        >
          <Image
            src="/images/artist/urban2.jpg"
            alt="Urban Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
        </motion.div>
        <motion.div 
          className="z-10 px-6 md:px-12"
          style={{ opacity }}
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-9xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
              Urban Artists
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl md:text-3xl opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the stars shaping the future of urban culture through music, art, and movement.
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Artist */}
      <section id="featured" className="py-20 px-6 md:px-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-indigo-900/20" />
        <h2 className="text-4xl font-semibold mb-12 text-center relative">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            🌟 Featured Artist
          </span>
        </h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
          <motion.div 
            className="relative w-72 h-72 rounded-full overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => openArtistModal({
              name: "Ayush Gauchan",
              genre: "Music",
              image: "/images/artist/ayush.jpg",
              bio: "A rising star in the music industry, Ayush Gauchan is a singer-songwriter known for his soulful voice and introspective lyrics.",
              achievements: ["2023 Best New Artist", "Over 1M monthly listeners", "Featured in Rolling Stone"],
              social: {
                instagram: "@ayushgauchan",
                twitter: "@ayushgauchan",
                spotify: "Ayush Gauchan"
              }
            })}
          >
            <div className="max-w-[90vw] max-h-[90vh] overflow-hidden rounded-2xl">
  <Image
    src="/images/artist/ayush.jpg"
    alt="Ayush Gauchan"
    width={500}
    height={500}
    className="w-full h-auto object-cover"
  />
</div>
          </motion.div>
          <div className="flex-1">
            <h3 className="text-4xl font-light mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Ayush Gauchan
            </h3>
            <p className="text-xl opacity-80 mb-6">Solo Artist</p>
            <p className="opacity-60 mb-8 text-lg">
              Music
            </p>
            
            {/* Audio Player */}
            <div className="space-y-1">
              <p className="text-sm opacity-80">Listen to his music</p>
              <div className="bg-white/5 p-2 backdrop-blur-lg border border-white/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-opacity"
                  >
                    {isPlaying ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-white/60 mb-0.5">
                      <span>{formatTime(currentTime * (duration / 100))}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={currentTime}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        setCurrentTime(value);
                        if (audioRef.current) {
                          const time = (value / 100) * audioRef.current.duration;
                          audioRef.current.currentTime = time;
                        }
                      }}
                      className="w-full h-0.5 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                    />
                  </div>
                </div>
                <audio
                  ref={audioRef}
                  src="/images/artist/ayush.mp3"
                  onTimeUpdate={() => {
                    if (audioRef.current) {
                      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
                      setCurrentTime(progress);
                    }
                  }}
                  onLoadedMetadata={(e) => {
                    setDuration(e.currentTarget.duration);
                    const progress = (e.currentTarget.currentTime / e.currentTarget.duration) * 100;
                    setCurrentTime(progress);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Artists Grid */}
      <section id="artists" className="py-20 px-6 md:px-20 relative">
        <h2 className="text-4xl font-semibold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            🚀 Top Urban Artists
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topArtists.map((artist, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`bg-white/5 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all group cursor-pointer overflow-hidden ${
                index % 3 === 0 ? 'rounded-tl-3xl rounded-br-3xl' : 
                index % 3 === 1 ? 'rounded-tr-3xl rounded-bl-3xl' : 
                'rounded-3xl'
              }`}
              onClick={() => openArtistModal(artist)}
            >
              <div className="relative w-full h-64">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-medium">{artist.name}</h3>
                <p className="text-sm opacity-70">{artist.genre}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Local Artists Section */}
      <section className="py-20 px-6 md:px-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/20 to-teal-900/20" />
        <h2 className="text-4xl font-semibold mb-12 text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            🏙️ Local Artists to Follow
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {localArtists.map((artist, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`bg-white/5 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all group cursor-pointer overflow-hidden ${
                index % 3 === 0 ? 'rounded-tl-3xl rounded-br-3xl' : 
                index % 3 === 1 ? 'rounded-tr-3xl rounded-bl-3xl' : 
                'rounded-3xl'
              }`}
              onClick={() => openArtistModal(artist)}
            >
              <div className="relative w-full h-64">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-medium">{artist.name}</h3>
                <p className="text-sm opacity-70">{artist.genre}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Artist Spotlight Section */}
      <section className="py-20 px-6 md:px-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20" />
        <div className="relative">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              ✨ Artist Spotlight
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden"
            >
              {/* Removed the X button from here */}
              <Image
                src="/images/artist/weeknd.jpg"
                alt="Artist Spotlight"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold mb-2">Featured Artist of the Month</h3>
                <p className="text-lg opacity-90 mb-4">Discover the stories behind the music</p>
                <button 
                  onClick={openStory}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-opacity"
                >
                  View Story
                </button>
              </div>
            </motion.div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Featured Tracks</h3>
              {[
                { 
                  title: "Starboy", 
                  duration: "3:20", 
                  plays: "3.2B",
                  src: "/images/artist/starboy.mp3"
                },
                { 
                  title: "Reminder", 
                  duration: "3:35", 
                  plays: "2.1B",
                  src: "/images/artist/reminder.mp3"
                },
                { 
                  title: "One Of The Girls", 
                  duration: "3:50", 
                  plays: "2.8B",
                  src: "/images/artist/girls.mp3"
                }
              ].map((track, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`bg-white/5 backdrop-blur-lg p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group ${
                    selectedTrack === index ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => handleTrackClick(index)}
                        className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          {selectedTrack === index && isPlaying ? (
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                        </div>
                      </button>
                      <div>
                        <h4 className="text-lg font-medium">{track.title}</h4>
                        <p className="text-sm opacity-70">{track.duration} • {track.plays} plays</p>
                      </div>
                    </div>
                  </div>
                  {selectedTrack === index && (
                    <div className="mt-4">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-0.5 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-1.5 [&::-webkit-slider-thumb]:h-1.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                      />
                      <audio
                        ref={audioRef}
                        src={track.src}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleTimeUpdate}
                        onEnded={() => setIsPlaying(false)}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            UrbanVibes
          </h3>
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} UrbanVibes. All rights reserved.
          </p>
        </div>
      </footer>

     {/* Artist Modal */}
     {isModalOpen && selectedArtist && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={closeModal}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className="bg-black/95 backdrop-blur-lg rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/10"
      onClick={e => e.stopPropagation()}
    >
      {/* Top Section: Image */}
      <div className="relative w-full aspect-square max-h-[50vh] overflow-hidden rounded-t-3xl">
        <Image
          src={selectedArtist.image}
          alt={selectedArtist.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 42rem"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/80 hover:bg-black/90 transition-colors border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6 bg-black/95">
        <h2 className="text-3xl font-bold mb-2 text-white">{selectedArtist.name}</h2>
        <p className="text-lg text-white/90 mb-4">{selectedArtist.genre}</p>
        <p className="text-white/90 mb-6">{selectedArtist.bio}</p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Achievements</h3>
          <div className="flex flex-wrap gap-2">
            {selectedArtist.achievements.map((achievement, index) => (
              <span key={index} className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/90">
                {achievement}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {/* Instagram Link */}
          <a
            href={selectedArtist.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            {/* Instagram SVG */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
            </svg>
            Instagram
          </a>

          {/* Twitter Link */}
          <a
            href={selectedArtist.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            {/* Twitter SVG */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Twitter
          </a>

          {/* Spotify Link */}
          <a
            href={selectedArtist.social.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            {/* Spotify SVG */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Spotify
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
)}




      {/* Story Modal */}
{isStoryOpen && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={closeStory}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-black/95 backdrop-blur-lg rounded-3xl max-w-4xl w-full border border-white/10 max-h-[90vh] overflow-y-auto"
      onClick={e => e.stopPropagation()}
    >
      <div className="relative h-96">
        <Image
          src="/images/artist/weeknd2.jpg"
          alt="Artist Story"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        {/* Top Right X Button */}
        <button
          onClick={closeStory}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/80 hover:bg-black/90 transition-colors border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-8 space-y-6">
        <h2 className="text-4xl font-bold">The Weeknd: From Underground to Global Stardom</h2>
        <div className="space-y-4">
          <p className="text-lg text-white/90">
            Abel Makkonen Tesfaye, known professionally as The Weeknd, began his journey in Toronto's underground music scene. His mysterious persona and unique blend of R&B, pop, and alternative music quickly gained attention through his early mixtapes.
          </p>
          <p className="text-lg text-white/90">
            The breakthrough came with his debut studio album "Kiss Land" in 2013, but it was his 2015 album "Beauty Behind the Madness" that catapulted him to global fame, featuring hits like "Can't Feel My Face" and "The Hills." His distinctive falsetto voice and dark, atmospheric production style have become his signature sound.
          </p>
          <p className="text-lg text-white/90">
            The Weeknd's 2020 album "After Hours" and its lead single "Blinding Lights" broke numerous records, becoming one of the most successful songs of all time. His Super Bowl LV halftime show performance in 2021 further cemented his status as a global superstar.
          </p>
        </div>

        {/* Key Milestones Section */}
        <div className="pt-4 border-t border-white/10">
          <h3 className="text-2xl font-semibold mb-4">Key Milestones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { year: "2011", event: "Released debut mixtape 'House of Balloons'" },
              { year: "2015", event: "Won Grammy for Best Urban Contemporary Album" },
              { year: "2020", event: "Released record-breaking 'After Hours' album" },
              { year: "2021", event: "Performed at Super Bowl LV Halftime Show" },
              { year: "2022", event: "Released 'Dawn FM' album" },
              { year: "2023", event: "Starred in HBO's 'The Idol'" }
            ].map((milestone, index) => (
              <div key={index} className="bg-white/5 p-4 rounded-xl">
                <span className="text-purple-400 font-medium">{milestone.year}</span>
                <p className="text-white/90">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Achievements Section */}
        <div className="pt-4 border-t border-white/10">
          <h3 className="text-2xl font-semibold mb-4">Notable Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { achievement: "4 Grammy Awards", detail: "Including Best Urban Contemporary Album" },
              { achievement: "20 Billboard Music Awards", detail: "Most wins in a single year (2016)" },
              { achievement: "Diamond Certification", detail: "For 'Blinding Lights' and 'Starboy'" },
              { achievement: "Spotify Records", detail: "Most monthly listeners (over 100 million)" }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-lg font-medium text-purple-400">{item.achievement}</h4>
                <p className="text-white/90">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Close Button */}
        <div className="flex justify-center mt-8">
          
        </div>
      </div>
    </motion.div>
  </motion.div>
)}

    </div>
  );
}
