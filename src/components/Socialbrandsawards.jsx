import { useEffect, useRef } from "react";
import { SM_STATS, BRANDS, AWARDS, CERTS, EXPERIENCES } from "../data";

function BarChart({ title, bars }) {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          ref.current?.querySelectorAll("[data-w]").forEach((el) => {
            el.style.width = el.dataset.w;
          });
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="p-8 rounded-2xl bg-white/5 border border-white/10"
    >
      <div className="font-semibold text-sm mb-6">{title}</div>
      <div className="space-y-4">
        {bars.map(({ label, pct }) => (
          <div key={label} className="flex items-center gap-4">
            <span className="text-xs text-zinc-400 w-24 flex-shrink-0">
              {label}
            </span>
            <div className="flex-1 h-2 bg-[#0f0f18] rounded overflow-hidden">
              <div
                className="h-full rounded w-0 transition-all duration-[1500ms] ease-out"
                data-w={pct + "%"}
                style={{ background: "linear-gradient(90deg,#c8a850,#e8c97a)" }}
              />
            </div>
            <span className="font-mono text-xs text-amber-400 w-8 text-right">
              {pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SocialMedia() {
  return (
    <section id="social-media" className="py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal mb-12">
          <div className="section-label">Digital Presence</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Social Media <em className="gold-text-simple not-italic">Impact</em>
          </h2>
          <p className="text-zinc-400 max-w-lg">
            Proven track record of growing audiences and delivering measurable
            results across platforms.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {SM_STATS.map((s, i) => (
            <div
              key={i}
              className="reveal p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-1 text-center transition-all"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-display text-2xl font-black text-amber-400">
                {s.num}
              </div>
              <div className="text-xs text-zinc-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <BarChart
            title="📊 Platform Performance"
            bars={[
              { label: "Instagram", pct: 92 },
              { label: "YouTube", pct: 78 },
              { label: "Facebook", pct: 65 },
              { label: "LinkedIn", pct: 55 },
              { label: "Twitter/X", pct: 42 },
            ]}
          />
          <BarChart
            title="📈 Content Performance"
            bars={[
              { label: "Reels", pct: 95 },
              { label: "Carousels", pct: 82 },
              { label: "Videos", pct: 88 },
              { label: "Stories", pct: 70 },
              { label: "Static Posts", pct: 60 },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export function Brands() {
  return (
    <section id="brands" className="py-32 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal text-center mb-14">
          <div className="section-label justify-center">Collaborations</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Brands & Organizations{" "}
            <em className="gold-text-simple not-italic">Worked With</em>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Trusted by institutions, artists, and organizations to deliver
            exceptional creative content.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BRANDS.map((b, i) => (
            <div
              key={i}
              className="reveal p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/30 hover:bg-amber-400/5 hover:-translate-y-1 text-center transition-all"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span className="block text-4xl mb-3">{b.icon}</span>
              <div className="font-semibold text-sm mb-1">{b.name}</div>
              <div className="text-xs text-zinc-500">{b.type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Awards() {
  return (
    <section id="awards" className="py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal text-center mb-14">
          <div className="section-label justify-center">Recognition</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Awards &{" "}
            <em className="gold-text-simple not-italic">Achievements</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS.map((a, i) => (
            <div
              key={i}
              className="reveal p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(232,201,122,0.1)] transition-all relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg,rgba(232,201,122,0.07),rgba(232,201,122,0.02))",
                transitionDelay: `${i * 0.07}s`,
              }}
            >
              <div
                className="absolute top-[-40px] right-[-40px] w-28 h-28 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle,rgba(232,201,122,0.1),transparent 70%)",
                }}
              />
              <div className="text-4xl mb-4">{a.medal}</div>
              <div className="font-display font-bold text-lg text-amber-400 mb-2">
                {a.title}
              </div>
              <div className="text-sm text-zinc-400 mb-1">{a.org}</div>
              <div className="font-mono text-xs text-zinc-500 tracking-[2px] mb-3">
                {a.year}
              </div>
              <div className="text-xs text-zinc-500 leading-relaxed">
                {a.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal text-center mb-14">
          <div className="section-label justify-center">Credentials</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Certifications &{" "}
            <em className="gold-text-simple not-italic">Credentials</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((c, i) => (
            <div
              key={i}
              className="reveal rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="aspect-[4/3] bg-[#0f0f18] flex items-center justify-center text-5xl relative">
                {c.icon}
                <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-amber-400 text-zinc-900 text-[0.6rem] font-bold uppercase">
                  Verified
                </span>
              </div>
              <div className="p-5">
                <div className="font-semibold text-sm mb-1">{c.name}</div>
                <div className="text-xs text-zinc-500 mb-4">{c.issuer}</div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-white/8 border border-white/10 text-xs text-zinc-400 hover:bg-amber-400/10 hover:border-amber-400/30 hover:text-amber-400 transition-all">
                    👁 Preview
                  </button>
                  <button className="flex-1 py-2 rounded-lg bg-white/8 border border-white/10 text-xs text-zinc-400 hover:bg-amber-400/10 hover:border-amber-400/30 hover:text-amber-400 transition-all">
                    ⬇ Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal mb-12">
          <div className="section-label">Work History</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Professional{" "}
            <em className="gold-text-simple not-italic">Experience</em>
          </h2>
          <p className="text-zinc-400 max-w-lg">
            A progressive journey of roles that have shaped my creative
            perspective and professional expertise.
          </p>
        </div>
        <div className="max-w-2xl relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom,#e8c97a,rgba(255,255,255,0.1),transparent)",
            }}
          />
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="reveal flex gap-8 mb-12 last:mb-0"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-[#0a0a10] border-2 border-amber-400 flex items-center justify-center text-xl flex-shrink-0 relative z-10">
                {exp.icon}
              </div>
              <div className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="font-display font-bold text-lg mb-1">
                  {exp.title}
                </div>
                <div className="text-amber-400 text-sm font-medium mb-1">
                  {exp.company}
                </div>
                <div className="font-mono text-xs text-zinc-500 tracking-[2px] mb-4">
                  {exp.period}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/15 text-xs text-amber-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
