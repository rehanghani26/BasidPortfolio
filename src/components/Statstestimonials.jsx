import { STATS, CASE_STUDIES, TESTIMONIALS } from "../data";

function AnimStat({ target, suffix, label }) {
  return (
    <div
      className="reveal p-10 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-amber-400/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden group"
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{
          background: "linear-gradient(90deg,transparent,#e8c97a,transparent)",
        }}
      />
      <span className="block font-display font-black text-5xl text-amber-400 leading-none">
        {target}
        <span className="text-3xl">{suffix}</span>
      </span>
      <div className="text-xs uppercase tracking-[3px] text-zinc-400 mt-3">
        {label}
      </div>
    </div>
  );
}

export function Statistics() {
  return (
    <section
      id="statistics"
      className="py-32 bg-[#0a0a10] relative overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg,rgba(232,201,122,0.04),transparent 60%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal text-center mb-14">
          <div className="section-label justify-center">Numbers</div>
          <h2 className="font-display font-black text-5xl">
            By The <em className="gold-text-simple not-italic">Numbers</em>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {STATS.map((s, i) => (
            <AnimStat
              key={i}
              {...s}
              style={{ transitionDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal text-center mb-14">
          <div className="section-label justify-center">Deep Dives</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Case <em className="gold-text-simple not-italic">Studies</em>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Detailed breakdowns of landmark projects — challenges faced,
            solutions applied, and results achieved.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs, i) => (
            <div
              key={i}
              className="reveal rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-video bg-[#0f0f18] flex items-center justify-center relative">
                <span className="text-6xl">{cs.emoji}</span>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top,rgba(5,5,8,0.7),transparent)",
                  }}
                />
                <div className="absolute top-4 left-4 font-mono text-xs text-amber-400 tracking-[3px]">
                  Case Study #{cs.num}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display font-bold text-xl mb-3">
                  {cs.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {cs.summary}
                </p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="text-center py-3 rounded-lg bg-[#0f0f18]"
                    >
                      <div className="font-display font-bold text-xl text-amber-400">
                        {m.val}
                      </div>
                      <div className="text-[0.65rem] text-zinc-500 mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-amber-400 font-medium hover:gap-4 transition-all"
                >
                  Read Full Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-[#0a0a10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal text-center mb-12">
          <div className="section-label justify-center">What They Say</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Client <em className="gold-text-simple not-italic">Testimonials</em>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Real words from real people who trusted their most important moments
            to my creative vision.
          </p>
        </div>
        <div
          className="flex gap-6 overflow-x-auto pb-4 reveal"
          style={{ scrollbarWidth: "none" }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="min-w-[340px] p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 flex-shrink-0 transition-all"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex gap-1 text-amber-400 mb-4 text-sm">
                {"★★★★★"}
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-zinc-900 flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#c8a850,#e8c97a)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
