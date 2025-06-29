"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  author: string
  readTime: string
  featured?: boolean
  slug: string // Added slug for navigation
}

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Art of Storytelling in Modern Journalism",
      excerpt:
        "Discover how narrative techniques can transform ordinary news into compelling stories that resonate with readers.",
      category: "Journalism",
      date: "May 15, 2023",
      image: "/images/articles/all.jpg",
      author: "Emma Rodriguez",
      readTime: "8 min read",
      featured: true,
      slug: "storytelling-journalism",
    },
    {
      id: 2,
      title: "Data Journalism: Finding Stories in Numbers",
      excerpt:
        "Learn how to uncover hidden narratives in data sets and present them in ways that engage your audience.",
      category: "Data",
      date: "May 10, 2023",
      image: "/images/articles/hidden.jpg",
      author: "Michael Chen",
      readTime: "6 min read",
      slug: "data-journalism",
    },
    {
      id: 3,
      title: "The Rise of Independent Media Platforms",
      excerpt: "Explore how independent journalists are creating their own platforms and building dedicated audiences.",
      category: "Media",
      date: "May 5, 2023",
      image: "/images/batman.jpg",
      author: "Sarah Johnson",
      readTime: "10 min read",
      slug: "independent-media",
    },
    {
      id: 4,
      title: "Visual Storytelling: Beyond Words",
      excerpt: "How photojournalism and visual elements enhance narrative impact in digital news environments.",
      category: "Visual",
      date: "April 28, 2023",
      image: "/images/peaky.jpg",
      author: "David Williams",
      readTime: "7 min read",
      featured: true,
      slug: "visual-storytelling",
    },
    {
      id: 5,
      title: "Ethical Challenges in Modern Reporting",
      excerpt: "Navigating the complex ethical landscape of journalism in the age of social media and instant news.",
      category: "Ethics",
      date: "April 22, 2023",
      image: "/images/money.png",
      author: "Priya Patel",
      readTime: "9 min read",
      slug: "ethical-challenges",
    },
    {
      id: 6,
      title: "Podcasting: The New Frontier of Journalism",
      excerpt: "How audio storytelling is revolutionizing the way news is consumed and produced.",
      category: "Audio",
      date: "April 15, 2023",
      image: "/images/articles/hidden.jpg",
      author: "James Wilson",
      readTime: "5 min read",
      slug: "podcasting-journalism",
    },
  ]

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      {/* Hero Section - Changed color scheme from purple/indigo to teal/blue */}
      <motion.section
        className="relative bg-gradient-to-br from-teal-700 to-blue-900 py-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Blog</h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover insights, stories, and perspectives from our community of writers
          </p>

          {/* Search Bar - FIXED */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-5 py-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-gray-300 transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-3 text-white/70 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Search Results Counter */}
          {searchQuery && (
            <motion.p
              className="mt-4 text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found for "{searchQuery}"
            </motion.p>
          )}
        </div>
      </motion.section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && !searchQuery && (
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link href={`/blogs/${post.slug}`} key={post.id}>
                  <motion.div
                    className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <span>{post.category}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
                          <span className="text-sm">{post.author}</span>
                        </div>
                        <span className="text-sm text-gray-400">{post.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{searchQuery ? "Search Results" : "All Posts"}</h2>

          {filteredPosts.length === 0 ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-400 mb-2">
                {searchQuery ? `No posts found for "${searchQuery}"` : "No posts found matching your criteria."}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-colors"
                >
                  Clear Search
                </button>
              )}
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link href={`/blogs/${post.slug}`} key={post.id}>
                  <motion.div
                    className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <span>{post.category}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
                          <span className="text-sm">{post.author}</span>
                        </div>
                        <span className="text-sm text-gray-400">{post.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section - Also updated to match new color scheme */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-900 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-200 mb-8">
            Get the latest articles, resources, and insights delivered to your inbox weekly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-5 py-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-300"
            />
            <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">YourVeryOwnNews</h3>
            <p className="mb-4">
              Your source for insightful articles, stories, and perspectives on topics that matter.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Journalism
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Data
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Visual
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ethics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Audio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/football" className="hover:text-white transition-colors">
                  Football
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-white transition-colors">
                  Store
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-zinc-800 text-center">
          <p>&copy; {new Date().getFullYear()} YourVeryOwnNews. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
