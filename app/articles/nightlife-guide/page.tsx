// /app/articles/weekend-restaurant/page.tsx
import Link from 'next/link';

const WeekendRestaurant = () => {
  return (
    <main className="bg-zinc-900 text-white min-h-screen p-6">
      <header className="text-3xl font-bold mb-4 text-center">Top Restaurant for Your Weekend Chill</header>

      <section className="relative bg-zinc-800 rounded-xl shadow-md">
        <img
          src="/article-1.jpg"
          alt="Weekend Restaurant"
          className="w-full h-[350px] object-cover rounded-t-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-2">Top Restaurant for Your Weekend Chill</h3>
          <p className="text-sm">Discover the perfect spot to relax, eat, and vibe this weekend with your friends.</p>
        </div>
      </section>

      <section className="bg-zinc-800 rounded-xl shadow-md p-6 mt-6">
        <p>Looking for a place to relax and enjoy a meal with friends this weekend? Here’s a curated list of the top restaurants to chill, eat, and enjoy the vibes. Whether you’re into casual dining or fine dining, this guide has something for everyone.</p>
        <p className="mt-4">From cozy, hidden gems to iconic, trendy spots, explore the best places to visit this weekend!</p>
      </section>

      <Link href="/">
        <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg mt-6">
          Back to Homepage
        </button>
      </Link>
    </main>
  );
};

export default WeekendRestaurant;
