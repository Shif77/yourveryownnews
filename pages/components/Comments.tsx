export default function Comments() {
    return (
      <section className="mt-16 border-t border-zinc-700 pt-6">
        <h2 className="text-xl text-yellow-400 mb-4">Leave a comment</h2>
        <textarea className="w-full p-3 rounded-lg text-zinc-900" placeholder="Share your thoughts..." rows={4}></textarea>
        <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Post</button>
      </section>
    );
  }
  