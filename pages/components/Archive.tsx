export default function Archive() {
    const articles = [
      { title: "Panthapath Lake Retreat", slug: "panthapath-lake" },
      { title: "Gulshan Hills Spot", slug: "gulshan-hills" },
    ];
  
    return (
      <section className="mt-20">
        <h2 className="text-2xl text-yellow-400 mb-4">Weekly Archives</h2>
        <ul className="space-y-2">
          {articles.map((a, i) => (
            <li key={i}>
              <a href={`/articles/${a.slug}`} className="hover:underline text-yellow-300">{a.title}</a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  