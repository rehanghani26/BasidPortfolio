import { STORY, SKILLS, SKILL_PILLS, SERVICES } from "../data";

export function Story() {
  return (
    <section id="story" className="py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="section-header center text-center mb-16 reveal">
          <div className="section-label justify-center">My Journey</div>
          <h2 className="font-display font-black text-5xl mb-4">
            The <em className="gold-text-simple not-italic">Story</em> So Far
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Every great creative journey starts with a single click of the
            shutter. Here's mine — from a curious student to a professional
            content creator.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom,transparent,#e8c97a,rgba(255,255,255,0.1),transparent)",
            }}
          />
          {STORY.map((item, i) => (
            <div
              key={i}
              className={`reveal flex items-center gap-6 md:gap-8 mb-16 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}
            >
              <div
                className={`flex-1 ${item.side === "right" ? "md:text-right" : ""}`}
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                  <div className="font-mono text-xs tracking-[3px] text-amber-400 mb-2">
                    {item.year}
                  </div>
                  <div className="font-display font-bold text-lg mb-2">
                    {item.title}
                  </div>
                  <div className="text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#0a0a10] border-2 border-amber-400 flex items-center justify-center font-mono text-[0.6rem] text-amber-400">
                  {item.year.slice(2)}
                </div>
                <div className="absolute inset-[-6px] rounded-full border border-amber-400/20" />
              </div>
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, pct }) {
  return (
    <div className="reveal p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20">
      <div className="flex justify-between items-center mb-3">
        <span className="font-medium text-sm">{name}</span>
        <span className="font-mono text-xs text-amber-400">{pct}%</span>
      </div>
      <div className="h-1 bg-[#0f0f18] rounded overflow-hidden">
        <div
          className="h-full rounded"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg,#c8a850,#e8c97a)",
            boxShadow: "0 0 8px rgba(232,201,122,0.4)",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal mb-12">
          <div className="section-label">Expertise</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Skills &{" "}
            <em className="gold-text-simple not-italic">Proficiency</em>
          </h2>
          <p className="text-zinc-400 max-w-lg">
            A comprehensive toolkit built through years of hands-on practice and
            real-world application.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 ">
          {SKILLS.map((s) => (
            <SkillBar key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal text-center mb-16">
          <div className="section-label justify-center">What I Offer</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Creative <em className="gold-text-simple not-italic">Services</em>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            From capturing raw moments to crafting complete digital strategies —
            end-to-end creative solutions.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="reveal p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/30 hover:-translate-y-1.5 hover:shadow-2xl transition-all relative overflow-hidden group cursor-pointer"
              style={{ transitionDelay: `${(i % 4) * 0.07}s` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(232,201,122,0.06),transparent)",
                }}
              />
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
              <span className="block mt-4 text-amber-400 text-lg group-hover:translate-x-2 transition-transform duration-200">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
