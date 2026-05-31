const TAGS = [
  "📸 Photographer",
  "🎬 Videographer",
  "📱 Content Creator",
  "📊 Social Media Manager",
  "🏆 Award Winner",
  "🎓 B.Tech Civil Engg",
];
const PILLARS = [
  {
    icon: "🎯",
    title: "Vision",
    desc: "To create visual content that inspires, connects, and drives real impact across digital and physical spaces.",
  },
  {
    icon: "🚀",
    title: "Mission",
    desc: "Delivering premium creative solutions that help brands and individuals tell their stories authentically and powerfully.",
  },
  {
    icon: "💡",
    title: "Approach",
    desc: "Every project begins with deep understanding, executed with artistic precision, and measured by real-world results.",
  },
  {
    icon: "🌟",
    title: "Future Goals",
    desc: "Building a global creative agency, partnering with leading brands, and inspiring the next generation of creators.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-[#0a0a10]">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="reveal-l relative hidden lg:block">
            <div
              className="aspect-[4/5] rounded-3xl overflow-hidden relative"
              style={{ background: "linear-gradient(135deg,#0f0f18,#0a0a10)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-black text-[10rem] gold-text-simple opacity-20">
                  BE
                </span>
              </div>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top,rgba(5,5,8,0.8) 0%,transparent 60%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-2xl font-bold text-white">
                  Basid Emam
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Content Creator & Visual Storyteller
                </p>
              </div>
            </div>
            {/* Float badge */}
            <div
              className="absolute top-[20%] right-[-30px] px-5 py-4 rounded-xl border border-white/20 shadow-2xl animate-float"
              style={{ background: "#050508" }}
            >
              <strong className="block font-display text-3xl font-black text-amber-400">
                5+
              </strong>
              <span className="text-xs text-zinc-500">Years of Excellence</span>
            </div>
          </div>

          {/* Content */}
          <div className="reveal-r">
            <div className="section-label">About Me</div>
            <h2 className="font-display font-black text-5xl leading-tight mb-6">
              Crafting Visual{" "}
              <em className="gold-text-simple not-italic">Stories</em> That
              Inspire
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="space-y-4 text-zinc-400 leading-relaxed mb-8">
              <p>
                I'm Basid Emam — a creative professional and award-winning
                content creator from India, passionate about visual
                storytelling, photography, and building powerful digital
                presences. With over 5 years of hands-on experience, I've turned
                my passion into a professional journey that bridges art and
                strategy.
              </p>
              <p>
                As the official Social Media Manager for MMDU University and a
                featured photographer at major events including Hardy Sandhu's
                concert, I bring a unique blend of creative vision and strategic
                thinking to every project I undertake.
              </p>
              <p>
                Currently pursuing B.Tech in Civil Engineering, I balance
                technical precision with artistic flair — a combination that
                defines my approach to every visual project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
