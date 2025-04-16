'use client';

export default function EbookPage() {
  const books = [
    {
      title: "The Wonders of the World",
      description: "An introduction to magnetism with easy-to-understand concepts and experiments.",
      image: "/images/ebook/end.jpg",
      downloadLink: "/images/books/Seven Wonders.pdf",
    },
    {
      title: "Quantum Physics Simplified",
      description: "Learn the basics of quantum physics with simple explanations and real-world examples.",
      image: "/images/ebook/quantum.jpg",
      downloadLink: "/images/books/quantum.pdf",
    },
    {
      title: "Unseenness Of the World",
      description: "Dive deeper into the world of algebra with advanced problems and solutions.",
      image: "/images/ebook/unseen.jpg",
      downloadLink: "/images/books/unseen.pdf",
    },
    {
      title: "History of Science",
      description: "A journey through the history of scientific discoveries and breakthroughs.",
      image: "/images/ebook/history.jpeg",
      downloadLink: "/images/books/history.pdf",
    },
    {
      title: "Python Programming for Beginners",
      description: "Learn Python programming from scratch with hands-on examples.",
      image: "/images/ebook/python.jpeg",
      downloadLink: "/images/books/python.pdf",
    },
    {
      title: "Research",
      description: "Start a thesis paper.",
      image: "/images/ebook/research.jpeg",
      downloadLink: "/images/books/research.pdf",
    },
  ];

  return (
    <main className="bg-zinc-900 text-white min-h-screen p-6">
      <div className="bg-zinc-800 rounded-2xl shadow-lg p-6 space-y-6 text-center border border-zinc-700">
        {/* Stylish Title */}
        <h1 className="text-3xl font-serif text-yellow-400 font-extrabold tracking-wide mb-4">
          eBooks
        </h1>

        {/* Grid Layout for eBooks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
          {books.map((book, index) => (
            <div key={index} className="bg-zinc-700 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              {/* Book Image - taking most of the box */}
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 text-center">
                {/* Book Title */}
                <h2 className="text-sm font-semibold text-white mb-1">{book.title}</h2>

                {/* --- Option 1: Icon + Text --- */}
                <a
  href={book.downloadLink}
  download
  className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-zinc-900 bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
  </svg>
  Download
</a>


               
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
