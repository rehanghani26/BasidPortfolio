import { useMemo, useState } from "react";
import { DRIVE_COLLECTION_URL, PORTFOLIO } from "../data";

export default function Portfolio() {
  const categories = useMemo(
    () => ["All", ...new Set(PORTFOLIO.map((item) => item.category))],
    []
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleItems =
    activeCategory === "All"
      ? PORTFOLIO
      : PORTFOLIO.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="section-label">Selected Work</div>
            <h2 className="font-display font-black text-5xl mb-4">
              Portfolio{" "}
              <em className="gold-text-simple not-italic">Highlights</em>
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Selected photos embedded from Google Drive, with direct links to
              open the original files and the complete collection.
            </p>
            <a
              href={DRIVE_COLLECTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-sm font-bold text-amber-400 transition-all hover:-translate-y-1 hover:bg-amber-400 hover:text-zinc-950"
            >
              View Full Drive Collection -&gt;
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full border text-xs font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-amber-400 border-amber-400 text-zinc-950"
                    : "bg-white/5 border-white/10 text-zinc-400 hover:border-amber-400/40 hover:text-amber-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {visibleItems.map((item, index) => (
            <article
              key={item.title}
              className="reveal rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-amber-400/30 hover:-translate-y-2 hover:shadow-2xl transition-all group"
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <div className="aspect-[4/3] bg-[#0f0f18] relative flex items-center justify-center overflow-hidden">
                {item.embedUrl ? (
                  <iframe
                    src={item.embedUrl}
                    title={`${item.title} preview`}
                    loading="lazy"
                    allow="autoplay"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 portfolio-mesh opacity-70" />
                    <span className="relative z-10 text-7xl group-hover:scale-110 transition-transform duration-500">
                      {item.emoji}
                    </span>
                  </>
                )}
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#050508]/80 border border-white/10 text-xs text-amber-400 font-mono tracking-[2px] uppercase">
                  {item.category}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display font-bold text-2xl mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {item.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/15 text-xs text-amber-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={item.driveUrl || DRIVE_COLLECTION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-amber-400 font-medium hover:gap-4 transition-all"
                >
                  Read More on Drive -&gt;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
