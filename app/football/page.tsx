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

interface League {
  name: string;
  image: string;
  matches: number;
  teams: number;
}

interface LeagueTeam {
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  position: number;
  logo: string;
}

interface TopScorer {
  name: string;
  team: string;
  goals: number;
  assists: number;
  matches: number;
  image: string;
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
      country: "England"
    },
    {
      name: "La Liga",
      image: "/images/football/laliga.jpg",
      country: "Spain"
    },
    {
      name: "Serie A",
      image: "/images/football/serie.jpg",
      country: "Italy"
    },
    {
      name: "Bundesliga",
      image: "/images/football/bundesliga.jpg",
      country: "Germany"
    },
    {
      name: "Ligue 1",
      image: "/images/football/ligue1.jpg",
      country: "France"
    }
  ];

  const articles = [
    {
      title: "Haaland's Record-Breaking Performance",
      image: "/images/football/article1.jpg",
      category: "Premier League",
      date: "2 hours ago",
      excerpt: "Manchester City's striker continues to dominate with another spectacular display, setting new records in the Premier League. The Norwegian phenomenon has been unstoppable this season, showcasing his exceptional finishing ability and positioning. With his latest hat-trick against Brighton, Haaland has now scored an impressive 32 goals in just 28 appearances, surpassing last season's Golden Boot tally. His combination of physical presence, blistering pace, and clinical finishing has made him virtually unstoppable for opposition defenses. City manager Pep Guardiola praised his striker's mentality and work ethic, highlighting how Haaland has seamlessly integrated into the team's playing style. The 23-year-old's achievement is even more remarkable considering he's still adapting to English football, suggesting there might be even more to come from City's prolific frontman. Premier League defenders have struggled to contain his powerful runs and intelligent movement, with several managers admitting they've had to completely reshape their defensive strategies when facing him...",
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
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
      {/* Latest Articles Section */}
      <section className="py-16 px-4 border-b border-zinc-700/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Latest Football News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full lg:col-span-2 bg-zinc-800/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-yellow-500/10 transition-shadow duration-300"
            >
              <div 
                className="cursor-pointer group" 
                onClick={() => setSelectedArticle(articles[0])}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative h-72 md:h-full overflow-hidden">
                    <img 
                      src={articles[0].image}
                      alt={articles[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-yellow-500 text-black rounded-full text-sm font-semibold shadow-lg">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 text-sm text-yellow-400 mb-4">
                      <span className="font-medium">{articles[0].category}</span>
                      <span>•</span>
                      <span className="text-zinc-400">{articles[0].date}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300">{articles[0].title}</h3>
                    <p className="text-zinc-400 line-clamp-4">{articles[0].excerpt}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Articles */}
            {articles.slice(1).map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-500/10 transition-shadow duration-300"
              >
                <div 
                  className="cursor-pointer group" 
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-yellow-400 mb-3">
                      <span className="font-medium">{article.category}</span>
                      <span>•</span>
                      <span className="text-zinc-400">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">{article.title}</h3>
                    <p className="text-sm text-zinc-400 line-clamp-2">{article.excerpt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Scores Section */}
      <section className="py-16 px-4 bg-zinc-800/30 border-b border-zinc-700/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Live Scores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveMatches.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-500/10 transition-shadow duration-300"
              >
                <div 
                  className="p-6 cursor-pointer group"
                  onClick={() => setSelectedMatch(selectedMatch?.id === match.id ? null : match)}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm font-medium">{match.competition}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-zinc-400">{match.time}</span>
                      <motion.div
                        animate={{ rotate: selectedMatch?.id === match.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between group-hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-zinc-700/50 p-2">
                          <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-medium text-lg">{match.homeTeam.name}</span>
                      </div>
                      <span className="text-3xl font-bold text-yellow-400">{match.homeTeam.score}</span>
                    </div>
                    <div className="flex items-center justify-between group-hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-zinc-700/50 p-2">
                          <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-medium text-lg">{match.awayTeam.name}</span>
                      </div>
                      <span className="text-3xl font-bold text-yellow-400">{match.awayTeam.score}</span>
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {selectedMatch?.id === match.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: 1,
                        height: "auto",
                        transition: {
                          height: {
                            duration: 0.3,
                            ease: "easeOut"
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
                          }
                        }
                      }}
                      className="border-t border-zinc-700/50 bg-zinc-800/30 p-6"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                          <h5 className="text-sm text-zinc-400 mb-3">Possession</h5>
                          <div className="flex items-center justify-center space-x-3">
                            <span className="text-xl font-bold text-yellow-400">{match.homeTeam.stats.possession}%</span>
                            <span className="text-zinc-500">-</span>
                            <span className="text-xl font-bold text-yellow-400">{match.awayTeam.stats.possession}%</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <h5 className="text-sm text-zinc-400 mb-3">Shots (On Target)</h5>
                          <div className="flex items-center justify-center space-x-3">
                            <span className="text-xl font-bold text-yellow-400">
                              {match.homeTeam.stats.shots} ({match.homeTeam.stats.shotsOnTarget})
                            </span>
                            <span className="text-zinc-500">-</span>
                            <span className="text-xl font-bold text-yellow-400">
                              {match.awayTeam.stats.shots} ({match.awayTeam.stats.shotsOnTarget})
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <h5 className="text-sm text-zinc-400 mb-3">Corners</h5>
                          <div className="flex items-center justify-center space-x-3">
                            <span className="text-xl font-bold text-yellow-400">{match.homeTeam.stats.corners}</span>
                            <span className="text-zinc-500">-</span>
                            <span className="text-xl font-bold text-yellow-400">{match.awayTeam.stats.corners}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leagues Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Top Leagues</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {leagues.map((league, index) => (
              <Link 
                key={index}
                href={`/football/leagues/${league.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="block group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group-hover:-translate-y-2"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={league.image} 
                      alt={league.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300">{league.name}</h3>
                      <p className="text-sm text-zinc-400">{league.country}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
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
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
              onClick={() => setSelectedArticle(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed inset-x-4 top-[10%] max-h-[80vh] overflow-y-auto bg-zinc-800/90 backdrop-blur-sm rounded-2xl p-8 z-50 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl shadow-2xl"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-72 object-cover rounded-xl mb-8 shadow-lg"
              />
              <div className="flex items-center space-x-2 text-sm text-yellow-400 mb-4">
                <span className="font-medium">{selectedArticle.category}</span>
                <span>•</span>
                <span className="text-zinc-400">{selectedArticle.date}</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">{selectedArticle.title}</h2>
              <p className="text-zinc-300 leading-relaxed">{selectedArticle.excerpt}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

      {/* Match Timeline/Commentary */}
      <section className="py-16 px-4 border-b border-zinc-700/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Match Timeline</h2>
          <div className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg p-6">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-6 w-px bg-zinc-700/50"></div>
              <div className="space-y-8">
                <div className="relative flex items-center">
                  <div className="absolute left-0 w-12 h-12 flex items-center justify-center bg-yellow-500/10 rounded-full">
                    <span className="text-yellow-400 font-bold">90'</span>
                  </div>
                  <div className="ml-20">
                    <h3 className="text-lg font-bold mb-1">Full Time</h3>
                    <p className="text-zinc-400">Manchester City 3 - 1 Arsenal</p>
                  </div>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute left-0 w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-full">
                    <span className="text-green-400 font-bold">85'</span>
                  </div>
                  <div className="ml-20">
                    <h3 className="text-lg font-bold mb-1">GOAL! Manchester City</h3>
                    <p className="text-zinc-400">Haaland scores his second of the match!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Match Predictions & Social Integration */}
      <section className="py-16 px-4 bg-zinc-800/30 border-b border-zinc-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Predictions */}
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Match Predictions</h2>
              <div className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img src="/images/football/team1.png" alt="Team 1" className="w-12 h-12" />
                    <span className="text-lg font-medium">vs</span>
                    <img src="/images/football/team2.png" alt="Team 2" className="w-12 h-12" />
                  </div>
                  <span className="text-sm text-zinc-400">Tomorrow 20:00</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-400">Home Win</span>
                      <span className="text-yellow-400">45%</span>
                    </div>
                    <div className="h-2 bg-zinc-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-400">Draw</span>
                      <span className="text-yellow-400">30%</span>
                    </div>
                    <div className="h-2 bg-zinc-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-400">Away Win</span>
                      <span className="text-yellow-400">25%</span>
                    </div>
                    <div className="h-2 bg-zinc-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Feed */}
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Fan Zone</h2>
              <div className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-700/50 overflow-hidden">
                      <img src="/images/football/user1.jpg" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium">John Doe</span>
                        <span className="text-sm text-zinc-400">@johndoe</span>
                      </div>
                      <p className="text-zinc-300">What a game! Haaland is unstoppable! 🔥⚽️ #MCFC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-16 px-4 border-b border-zinc-700/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Interactive Zone</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Fantasy League</h3>
              <p className="text-zinc-400 mb-4">Build your dream team and compete with other fans</p>
              <button className="w-full bg-yellow-500 text-black font-medium py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
                Join Now
              </button>
            </div>
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Predict & Win</h3>
              <p className="text-zinc-400 mb-4">Predict match results and win exciting prizes</p>
              <button className="w-full bg-yellow-500 text-black font-medium py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
                Start Predicting
              </button>
            </div>
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Fan Polls</h3>
              <p className="text-zinc-400 mb-4">Vote on the latest football topics</p>
              <button className="w-full bg-yellow-500 text-black font-medium py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
                Vote Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Section */}
      <section className="py-16 px-4 bg-zinc-800/30 border-b border-zinc-700/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Transfer Center</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-yellow-400">Latest Transfer</span>
                  <span className="text-sm text-zinc-400">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <img src="/images/football/player2.jpg" alt="Player" className="w-16 h-16 rounded-full" />
                  <div>
                    <h3 className="font-bold mb-1">Player Name</h3>
                    <div className="flex items-center space-x-2">
                      <img src="/images/football/team1.png" alt="From Team" className="w-6 h-6" />
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <img src="/images/football/team2.png" alt="To Team" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm">Transfer fee: €50M</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Match Center */}
      <section className="py-16 px-4 border-b border-zinc-700/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Match Center</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Match Details</h3>
                <span className="text-sm text-zinc-400">Kickoff: 20:00</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Stadium</span>
                  <span className="font-medium">Anfield</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Referee</span>
                  <span className="font-medium">Michael Oliver</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Weather</span>
                  <span className="font-medium">18°C, Clear</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Analysis */}
      <section className="py-16 px-4 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Technical Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Formation Analysis</h3>
              <div className="aspect-video bg-green-900/30 rounded-lg relative mb-4">
                {/* Add formation visualization */}
              </div>
              <p className="text-zinc-400">Detailed breakdown of team tactics and player positions</p>
            </div>
            <div className="bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Heat Map</h3>
              <div className="aspect-video bg-zinc-900/50 rounded-lg relative mb-4">
                {/* Add heat map visualization */}
              </div>
              <p className="text-zinc-400">Player movement and positioning analysis</p>
            </div>
          </div>
        </div>
      </section>
