'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamStats {
  possession: number;
  shots: number;
  shotsOnTarget: number;
  corners: number;
}

interface Team {
  name: string;
  score: number;
  logo: string;
  stats: TeamStats;
}

interface Match {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  time: string;
  competition: string;
}

interface Article {
  title: string;
  image: string;
  category: string;
  date: string;
  excerpt: string;
  featured?: boolean;
}

export default function Football() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
  const liveMatches = [
    {
      id: 1,
      homeTeam: {
        name: "Manchester United",
        score: 2,
        logo: "/images/football/team1.png",
        stats: {
          possession: 55,
          shots: 12,
          shotsOnTarget: 5,
          corners: 6
        }
      },
      awayTeam: {
        name: "Liverpool",
        score: 1,
        logo: "/images/football/team2.png",
        stats: {
          possession: 45,
          shots: 8,
          shotsOnTarget: 3,
          corners: 4
        }
      },
      time: "75'",
      competition: "Premier League"
    },
    {
      id: 2,
      homeTeam: {
        name: "Real Madrid",
        score: 3,
        logo: "/images/football/real.png",
        stats: {
          possession: 60,
          shots: 15,
          shotsOnTarget: 7,
          corners: 8
        }
      },
      awayTeam: {
        name: "Barcelona",
        score: 2,
        logo: "/images/football/barca.png",
        stats: {
          possession: 40,
          shots: 10,
          shotsOnTarget: 4,
          corners: 5
        }
      },
      time: "82'",
      competition: "La Liga"
    },
    {
      id: 3,
      homeTeam: {
        name: "Bayern Munich",
        score: 2,
        logo: "/images/football/bayern.png",
        stats: {
          possession: 58,
          shots: 14,
          shotsOnTarget: 6,
          corners: 7
        }
      },
      awayTeam: {
        name: "Dortmund",
        score: 2,
        logo: "/images/football/dortmund.png",
        stats: {
          possession: 42,
          shots: 9,
          shotsOnTarget: 4,
          corners: 3
        }
      },
      time: "65'",
      competition: "Bundesliga"
    }
  ];

  const leagues = [
    {
      name: "Premier League",
      image: "/images/football/premier.jpg",
      matches: 38,
      teams: 20
    },
    {
      name: "La Liga",
      image: "/images/football/laliga.jpg",
      matches: 38,
      teams: 20
    },
    {
      name: "Serie A",
      image: "/images/football/serie.jpg",
      matches: 38,
      teams: 20
    }
  ];

  const articles = [
    {
      title: "Haaland's Record-Breaking Performance",
      image: "/images/football/article1.jpg",
      category: "Premier League",
      date: "2 hours ago",
      excerpt: "Manchester City's striker continues to dominate with another spectacular display...",
      featured: true
    },
    {
      title: "Champions League Quarter-Final Draw",
      image: "/images/football/article2.jpg",
      category: "Champions League",
      date: "5 hours ago",
      excerpt: "Europe's elite teams learn their fate in the quest for continental glory..."
    },
    {
      title: "Transfer Window Latest Updates",
      image: "/images/football/article3.jpg",
      category: "Transfers",
      date: "Yesterday",
      excerpt: "The latest rumors and confirmed deals from the football transfer market..."
    },
    {
      title: "Juventus Tactical Revolution",
      image: "/images/football/article4.jpg",
      category: "Serie A",
      date: "Yesterday",
      excerpt: "How the Old Lady is reinventing their playing style under new management..."
    },
    {
      title: "Barcelona's Youth Revolution",
      image: "/images/football/article5.jpg",
      category: "La Liga",
      date: "2 days ago",
      excerpt: "La Masia continues to produce exceptional talent for the first team..."
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Articles Section with Featured Layout */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Latest Football News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Article - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full lg:col-span-2 bg-zinc-800 rounded-xl overflow-hidden"
            >
              <div 
                className="cursor-pointer" 
                onClick={() => setSelectedArticle(articles[0])}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative h-64 md:h-full">
                    <img 
                      src={articles[0].image}
                      alt={articles[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 text-sm text-yellow-400 mb-3">
                      <span>{articles[0].category}</span>
                      <span>•</span>
                      <span>{articles[0].date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{articles[0].title}</h3>
                    <p className="text-zinc-400">{articles[0].excerpt}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary Articles - Different Layouts */}
            {articles.slice(1).map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-zinc-800 rounded-xl overflow-hidden ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div 
                  className="cursor-pointer" 
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className={`h-full ${index === 0 ? 'grid md:grid-cols-2 lg:grid-cols-1' : ''}`}>
                    <div className="relative h-48">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-2 py-1 bg-zinc-900/80 text-yellow-400 rounded text-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-zinc-400 mb-2">{article.date}</div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-zinc-400 text-sm line-clamp-2">{article.excerpt}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50"
              onClick={() => setSelectedArticle(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed inset-x-4 top-[10%] max-h-[80vh] overflow-y-auto bg-zinc-800 rounded-xl p-6 z-50 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative h-64 md:h-96 mb-6">
                <img 
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-sm text-yellow-400 mb-2">
                    <span>{selectedArticle.category}</span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedArticle.title}</h2>
                </div>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-zinc-300">{selectedArticle.excerpt}</p>
                {/* Add more article content here */}
                <p className="text-zinc-400 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-zinc-400 mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Live Scores Section */}
      <section className="bg-zinc-800/50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Live Scores</h2>
          <div className="grid gap-4">
            {liveMatches.map((match) => (
              <div key={match.id} className="relative">
                <div 
                  className={`bg-zinc-800 p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedMatch?.id === match.id ? 'ring-2 ring-yellow-500' : 'hover:bg-zinc-700'
                  }`}
                  onClick={() => setSelectedMatch(selectedMatch?.id === match.id ? null : match)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-12 h-12" />
                      <div>
                        <h4 className="font-bold">{match.homeTeam.name}</h4>
                        <span className="text-2xl font-bold">{match.homeTeam.score}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm animate-pulse">LIVE</span>
                      <p className="mt-2 text-zinc-400">{match.time}</p>
                      <p className="text-sm text-zinc-500">{match.competition}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <h4 className="font-bold">{match.awayTeam.name}</h4>
                        <span className="text-2xl font-bold">{match.awayTeam.score}</span>
                      </div>
                      <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-12 h-12" />
                    </div>
                  </div>
                </div>

                {/* Match Details Panel */}
                <AnimatePresence>
                  {selectedMatch?.id === match.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      animate={{ 
                        opacity: 1, 
                        height: 'auto',
                        transition: {
                          height: {
                            duration: 0.3,
                            ease: "easeOut"
                          },
                          opacity: {
                            duration: 0.2,
                            ease: "easeInOut"
                          }
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        height: 0,
                        transition: {
                          height: {
                            duration: 0.2,
                            ease: "easeInOut"
                          },
                          opacity: {
                            duration: 0.1
                          }
                        }
                      }}
                      className="mt-2 bg-zinc-800/50 rounded-xl p-6"
                    >
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <h5 className="text-sm text-zinc-400 mb-2">Possession</h5>
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-lg font-bold">{match.homeTeam.stats.possession}%</span>
                            <span className="text-zinc-500">-</span>
                            <span className="text-lg font-bold">{match.awayTeam.stats.possession}%</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <h5 className="text-sm text-zinc-400 mb-2">Shots (On Target)</h5>
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-lg font-bold">
                              {match.homeTeam.stats.shots} ({match.homeTeam.stats.shotsOnTarget})
                            </span>
                            <span className="text-zinc-500">-</span>
                            <span className="text-lg font-bold">
                              {match.awayTeam.stats.shots} ({match.awayTeam.stats.shotsOnTarget})
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <h5 className="text-sm text-zinc-400 mb-2">Corners</h5>
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-lg font-bold">{match.homeTeam.stats.corners}</span>
                            <span className="text-zinc-500">-</span>
                            <span className="text-lg font-bold">{match.awayTeam.stats.corners}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leagues Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Top Leagues</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leagues.map((league, index) => (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-zinc-800 rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => {/* Add league selection handler here */}}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={league.image} 
                      alt={league.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold">{league.name}</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>{league.matches} Matches</span>
                      <span>{league.teams} Teams</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}