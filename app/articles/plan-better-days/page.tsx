"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Map, 
  Clock, 
  DollarSign, 
  Heart,
  Share2,
  Bookmark,
  Grid,
  List,
  Tag,
  Star,
  Coffee,
  Sun,
  Sunset,
  Moon,
  Users,
  TrendingUp,
  Activity
} from "lucide-react";
import PlanningFeatures from '../../components/PlanningFeatures';

const categories = [
  { id: "all", label: "All Plans", icon: Grid },
  { id: "outdoor", label: "Outdoor", icon: Map },
  { id: "indoor", label: "Indoor", icon: Coffee },
  { id: "night", label: "Night Life", icon: Star },
];

const days = [
  { id: "all", label: "All Days", icon: Calendar },
  { id: "monday", label: "Monday", icon: Sun },
  { id: "tuesday", label: "Tuesday", icon: Sun },
  { id: "wednesday", label: "Wednesday", icon: Sun },
  { id: "thursday", label: "Thursday", icon: Sun },
  { id: "friday", label: "Friday", icon: Sunset },
  { id: "saturday", label: "Saturday", icon: Star },
  { id: "sunday", label: "Sunday", icon: Moon },
];

const weekendPlans = [
  // Monday Plans
  {
    id: 1,
    title: "Morning Gym Session 🧘‍♀️",
    description: "Start your week with energy and mindfulness. Join a local Gym or practice at home.",
    quote: "Monday sets the tone for the week.",
    category: "indoor",
    day: "monday",
    duration: "1 hour",
    cost: "BDT 100",
    bestTime: "7 AM - 8 AM",
    location: "Local Gym or home",
    tips: [
      "Wear comfortable clothes",
      "Bring your own mat",
      "Stay hydrated",
      "Follow your breath"
    ],
    likes: 156,
    bookmarks: 42,
    difficulty: "Easy"
  },
  // Tuesday Plans
  {
    id: 2,
    title: "Cooking Class 👨‍🍳",
    description: "Learn to cook a new cuisine. Perfect for expanding your culinary skills.",
    quote: "Tuesday is for new skills.",
    category: "indoor",
    day: "tuesday",
    duration: "2 hours",
    cost: "BDT 300-500",
    bestTime: "6 PM - 8 PM",
    location: "At your Home",
    tips: [
      "An apron",
      "Take recipe notes",
      "Ask questions",
      "Make friends"
    ],
    likes: 189,
    bookmarks: 67,
    difficulty: "Medium"
  },
  // Wednesday Plans
  {
    id: 3,
    title: "Midweek Concert 🎵",
    description: "Catch a live music show at a Dhaka University. Perfect midweek escape.",
    quote: "Music makes everything better.",
    category: "night",
    day: "wednesday",
    duration: "2-3 hours",
    cost: "Free",
    bestTime: "8 PM - 11 PM",
    location: "Dhaka university",
    tips: [
      "Check the lineup",
      "Reserve spot early",
      "Arrive on time",
      "Support local artists"
    ],
    likes: 234,
    bookmarks: 78,
    difficulty: "Easy"
  },
  // Thursday Plans
  {
    id: 4,
    title: "Art Gallery Night 🎨",
    description: "Visit local galleries during their evening events. Often includes complementary snacks and drinks",
    quote: "Thursday is the new Friday.",
    category: "indoor",
    day: "thursday",
    duration: "2-3 hours",
    cost: "BDT 100",
    bestTime: "6 PM - 9 PM",
    location: "Art district",
    tips: [
      "Dress smart casual",
      "Network with artists",
      "Take gallery maps",
      "Follow favorite artists"
    ],
    likes: 167,
    bookmarks: 45,
    difficulty: "Easy"
  },
  // Friday Plans
  {
    id: 5,
    title: "Sunset at Urban",
    description: "End your work week with a relaxing beach picnic watching the sunset.",
    quote: "Friday feels better at the river.",
    category: "outdoor",
    day: "friday",
    duration: "2-3 hours",
    cost: "BDT 200-300",
    bestTime: "5 PM - 8 PM",
    location: "Uttara Diyabari",
    tips: [
      "Pack light snacks",
      "Bring blankets",
      "Check sunset times",
      "Bring music"
    ],
    likes: 312,
    bookmarks: 89,
    difficulty: "Easy"
  },
  // Saturday Plans
  {
    id: 6,
    title: "Weekend Market Adventure 🛍️",
    description: "Explore local farmers markets and artisan crafts. Perfect for fresh finds.",
    quote: "Saturday mornings are for discoveries.",
    category: "outdoor",
    day: "saturday",
    duration: "2-3 hours",
    cost: "Varies",
    bestTime: "8 AM - 11 AM",
    location: "City center",
    tips: [
      "Bring cash",
      "Come early",
      "Bring your own bags",
      "Try samples"
    ],
    likes: 278,
    bookmarks: 92,
    difficulty: "Easy"
  },
  // Sunday Plans
  {
    id: 7,
    title: "Library Visit",
    description: "End your week with a refreshing Library Visit Perfect for reflection.",
    quote: "Sunday is for soul refreshing.",
    category: "outdoor",
    day: "sunday",
    duration: "3-4 hours",
    cost: "Free",
    bestTime: "9 AM - 1 PM",
    location: "Local Library",
    tips: [
      "Wear comfortable clothes",
      "Bring water",
      "Don't forget eyeglass",
      "Check weather"
    ],
    likes: 245,
    bookmarks: 76,
    difficulty: "Medium"
  },
];

export default function PlanYourWeekendPage() {
  const [index, setIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDay, setSelectedDay] = useState("all");
  const [viewMode, setViewMode] = useState("card");
  const [likedPlans, setLikedPlans] = useState<number[]>([]);
  const [bookmarkedPlans, setBookmarkedPlans] = useState<number[]>([]);

  const filteredPlans = weekendPlans.filter(
    plan => (selectedCategory === "all" || plan.category === selectedCategory) &&
            (selectedDay === "all" || plan.day === selectedDay)
  );

  const nextPlan = () => {
    setIndex((prev) => (prev + 1) % filteredPlans.length);
  };

  const prevPlan = () => {
    setIndex((prev) => (prev - 1 + filteredPlans.length) % filteredPlans.length);
  };

  const toggleLike = (planId: number) => {
    setLikedPlans(prev => 
      prev.includes(planId) 
        ? prev.filter(id => id !== planId)
        : [...prev, planId]
    );
  };

  const toggleBookmark = (planId: number) => {
    setBookmarkedPlans(prev => 
      prev.includes(planId) 
        ? prev.filter(id => id !== planId)
        : [...prev, planId]
    );
  };

  // Calculate statistics
  const totalLikes = weekendPlans.reduce((sum, plan) => sum + plan.likes, 0);
  const totalBookmarks = weekendPlans.reduce((sum, plan) => sum + plan.bookmarks, 0);
  const activeUsers = 1234; // This would come from your backend in a real app

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .pulse-animation {
          animation: pulse 4s ease-in-out infinite;
        }
        .gradient-text {
          background: linear-gradient(to right, #FF6B6B, #4ECDC4);
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>

      <div className="min-h-screen bg-[#0B0B19] overflow-x-hidden relative">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -top-48 -right-48 pulse-animation" />
          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -bottom-48 -left-48 pulse-animation" style={{ animationDelay: '2s' }} />
          <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pulse-animation" style={{ animationDelay: '3s' }} />
          
          {/* Floating decorative elements */}
          <div className="absolute top-20 right-20 text-6xl opacity-20 float-animation">
            ✨
          </div>
          <div className="absolute bottom-20 left-20 text-6xl opacity-20 float-animation" style={{ animationDelay: '2s' }}>
            🌙
          </div>
          <div className="absolute top-1/3 left-1/4 text-6xl opacity-20 float-animation" style={{ animationDelay: '3s' }}>
            ⭐
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-6xl opacity-20 float-animation" style={{ animationDelay: '4s' }}>
            🌠
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Header Section */}
          <header className="relative py-20 text-center px-4">
            <motion.h1 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-7xl font-extrabold gradient-text mb-6"
            >
              Plan Your Perfect Weekend
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-xl max-w-2xl mx-auto mb-12"
            >
              Discover unique experiences and create unforgettable memories
            </motion.p>

            {/* Statistics Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 flex items-center gap-2">
                  <Activity className="w-6 h-6" />
                  {weekendPlans.length}
                </div>
                <div className="text-gray-400 text-sm">Activities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  {totalLikes}
                </div>
                <div className="text-gray-400 text-sm">Total Likes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  {activeUsers}
                </div>
                <div className="text-gray-400 text-sm">Active Users</div>
              </div>
            </motion.div>
          </header>

          {/* Progress Bar */}
          <div className="max-w-6xl mx-auto px-4 mb-8">
            <div className="flex items-center gap-4 text-gray-400 mb-2">
              <Clock size={16} />
              <span>Time of Day</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                style={{ 
                  width: `${(new Date().getHours() / 24) * 100}%`,
                  transition: 'width 1s ease-in-out'
                }}
              />
            </div>
          </div>

          {/* Day Filter - New Addition */}
          <div className="flex justify-center gap-3 mb-8 px-4 overflow-x-auto pb-4 max-w-6xl mx-auto">
            {days.map((day) => {
              const Icon = day.icon;
              return (
                <motion.button
                  key={day.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDay(day.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                    selectedDay === day.id
                      ? "bg-purple-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  <Icon size={16} />
                  {day.label}
                </motion.button>
              );
            })}
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12 px-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-purple-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  <Icon size={18} />
                  {category.label}
                </motion.button>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setViewMode("card")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "card"
                  ? "bg-purple-500 text-white"
                  : "bg-white/10 text-gray-300"
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-purple-500 text-white"
                  : "bg-white/10 text-gray-300"
              }`}
            >
              <List size={20} />
            </button>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 mb-20">
            {viewMode === "card" ? (
              // Card View
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={filteredPlans[index].id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl p-8 border border-white/20 max-w-3xl mx-auto"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <h2 className="text-4xl font-bold text-white">
                        {filteredPlans[index].title}
                      </h2>
                      <div className="flex gap-3">
                        <button
                          onClick={() => toggleLike(filteredPlans[index].id)}
                          className={`p-2 rounded-full transition-all duration-300 ${
                            likedPlans.includes(filteredPlans[index].id)
                              ? "bg-red-500 text-white"
                              : "bg-white/10 text-gray-300 hover:bg-white/20"
                          }`}
                        >
                          <Heart size={20} />
                        </button>
                        <button
                          onClick={() => toggleBookmark(filteredPlans[index].id)}
                          className={`p-2 rounded-full transition-all duration-300 ${
                            bookmarkedPlans.includes(filteredPlans[index].id)
                              ? "bg-purple-500 text-white"
                              : "bg-white/10 text-gray-300 hover:bg-white/20"
                          }`}
                        >
                          <Bookmark size={20} />
                        </button>
                        <button className="p-2 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-all duration-300">
                          <Share2 size={20} />
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-8">
                      {filteredPlans[index].description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-300">
                          <Clock size={20} />
                          <span>{filteredPlans[index].duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <DollarSign size={20} />
                          <span>{filteredPlans[index].cost}</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-300">
                          <Calendar size={20} />
                          <span>{filteredPlans[index].bestTime}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <Map size={20} />
                          <span>{filteredPlans[index].location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Tag size={20} />
                        Pro Tips
                      </h3>
                      <ul className="grid grid-cols-2 gap-4">
                        {filteredPlans[index].tips.map((tip, i) => (
                          <li key={i} className="text-gray-300 flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center gap-4">
                      <button
                        onClick={prevPlan}
                        className="p-4 bg-white/10 backdrop-blur-lg rounded-full shadow-lg hover:bg-purple-500/30 transition-all duration-300 border border-white/20"
                      >
                        <ArrowLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={nextPlan}
                        className="p-4 bg-white/10 backdrop-blur-lg rounded-full shadow-lg hover:bg-purple-500/30 transition-all duration-300 border border-white/20"
                      >
                        <ArrowRight className="w-6 h-6 text-white" />
                      </button>
                    </div>

                    {/* Add PlanningFeatures component */}
                    <PlanningFeatures
                      activityId={filteredPlans[index].id}
                      title={filteredPlans[index].title}
                      cost={filteredPlans[index].cost}
                      location={filteredPlans[index].location}
                      bestTime={filteredPlans[index].bestTime}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              // List View
              <div className="grid gap-6">
                {filteredPlans.map((plan) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {plan.title}
                        </h3>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleLike(plan.id)}
                          className={`p-2 rounded-full transition-all duration-300 ${
                            likedPlans.includes(plan.id)
                              ? "bg-red-500 text-white"
                              : "bg-white/10 text-gray-300 hover:bg-white/20"
                          }`}
                        >
                          <Heart size={16} />
                        </button>
                        <button
                          onClick={() => toggleBookmark(plan.id)}
                          className={`p-2 rounded-full transition-all duration-300 ${
                            bookmarkedPlans.includes(plan.id)
                              ? "bg-purple-500 text-white"
                              : "bg-white/10 text-gray-300 hover:bg-white/20"
                          }`}
                        >
                          <Bookmark size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {plan.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={14} />
                        {plan.cost}
                      </span>
                      <span className="flex items-center gap-1">
                        <Map size={14} />
                        {plan.location}
                      </span>
                    </div>

                    {/* Add PlanningFeatures component */}
                    <PlanningFeatures
                      activityId={plan.id}
                      title={plan.title}
                      cost={plan.cost}
                      location={plan.location}
                      bestTime={plan.bestTime}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="relative mt-20 border-t border-white/10 pt-12 pb-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-4">Trending Activities</h3>
                  <div className="space-y-2">
                    {weekendPlans
                      .sort((a, b) => b.likes - a.likes)
                      .slice(0, 3)
                      .map(plan => (
                        <div key={plan.id} className="flex items-center gap-2 text-gray-400">
                          <TrendingUp size={14} />
                          <span>{plan.title}</span>
                        </div>
                      ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4">Quick Tips</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Plan ahead for better experiences</li>
                    <li>• Check weather before outdoor activities</li>
                    <li>• Share plans with friends</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4">Get Updates</h3>
                  <p className="text-gray-400 mb-4">Stay informed about new activities and events</p>
                  <button className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="text-center text-gray-500 mt-12">
                © {new Date().getFullYear()} Weekend Planner. Make every day count.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
