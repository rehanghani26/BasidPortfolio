import { useState } from "react";
import { IG_EMOJIS, YT_VIDEOS, BLOGS, FAQS } from "../data";

const HIGHLIGHTS = [
  { emoji: "🎸", label: "Hardy Show" },
  { emoji: "🎓", label: "MMDU" },
  { emoji: "📸", label: "Photography" },
  { emoji: "🎬", label: "BTS" },
  { emoji: "✈️", label: "Travel" },
  { emoji: "🏆", label: "Awards" },
];

export function Instagram() {
  return (
    <section id="instagram" className="">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal text-center mb-2">
          <div className="section-label justify-center">@basid.emam</div>
          <h2 className="font-display font-black text-5xl">
            Instagram <em className="gold-text-simple not-italic">Feed</em>
          </h2>
        </div>
        {/* Profile */}
        <div className="reveal flex flex-col md:flex-row items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
          <div
            className="w-24 h-24 rounded-full border-3 border-amber-400 flex items-center justify-center font-display font-black text-2xl text-zinc-900 flex-shrink-0"
            style={{
              background: "linear-gradient(135deg,#c8a850,#e8c97a)",
              borderWidth: 3,
            }}
          >
            BE
          </div>
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-xl mb-1">
              Basid Emam
            </div>
            <div className="text-zinc-500 text-sm mb-3">
              @basid.emam · Content Creator & Photographer
            </div>
            <div className="flex gap-6 justify-center md:justify-start">
              {[
                ["250+", "Posts"],
                ["5K+", "Followers"],
                ["2K+", "Following"],
              ].map(([n, l]) => (
                <div key={l} className="text-center">
                  <strong className="block font-display font-bold text-lg text-amber-400">
                    {n}
                  </strong>
                  <span className="text-xs text-zinc-500">{l}</span>
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://www.instagram.com/basid.emam/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:ml-auto gold-btn px-7 py-2.5 text-sm"
          >
            Follow ✦
          </a>
        </div>
        {/* Highlights */}

      </div>
    </section>
  );
}

export function YouTube() {
  return (
    <section id="youtube" className="py-32 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal mb-10">
          <div className="section-label">YouTube Channel</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Visual Stories on{" "}
            <em className="gold-text-simple not-italic">YouTube</em>
          </h2>
        </div>
        <div
          className="reveal flex flex-col md:flex-row items-center gap-6 p-8 rounded-3xl border border-red-500/20 mb-10"
          style={{
            background:
              "linear-gradient(135deg,rgba(255,0,0,0.07),rgba(255,0,0,0.02))",
          }}
        >
          <span className="text-5xl text-red-500">▶</span>
          <div>
            <div className="font-display font-bold text-xl mb-1">
              Basid Emam
            </div>
            <div className="text-zinc-500 text-sm mb-3">
              @basidemam · Visual Stories & BTS
            </div>
            <div className="flex gap-6">
              <div>
                <span className="font-display font-bold text-2xl text-red-400">
                  2.5K+
                </span>
                <br />
                <span className="text-xs text-zinc-500">Subscribers</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-teal">
                  50K+
                </span>
                <br />
                <span className="text-xs text-zinc-500">Total Views</span>
              </div>
            </div>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="md:ml-auto px-6 py-3 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all hover:-translate-y-0.5"
          >
            ▶ Subscribe
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {YT_VIDEOS.map((v, i) => (
            <div
              key={i}
              className="reveal rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="aspect-video bg-[#0f0f18] flex items-center justify-center relative group cursor-pointer">
                <span className="text-4xl opacity-30">{v.emoji}</span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-3xl">
                  ▶
                </div>
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 font-mono text-xs">
                  {v.duration}
                </div>
              </div>
              <div className="p-4">
                <div className="font-semibold text-sm mb-1 leading-snug">
                  {v.title}
                </div>
                <div className="text-xs text-zinc-500">
                  {v.views} views · {v.ago}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  return (
    <section id="blog" className="py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal text-center mb-14">
          <div className="section-label justify-center">Insights</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Blog &{" "}
            <em className="gold-text-simple not-italic">Creative Guides</em>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Sharing knowledge and creative insights to help fellow creators
            level up their craft.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {BLOGS.map((b, i) => (
            <div
              key={i}
              className="reveal rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-1.5 hover:shadow-2xl transition-all cursor-pointer"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="aspect-video bg-[#0f0f18] flex items-center justify-center text-5xl relative">
                {b.emoji}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-400 text-zinc-900 text-xs font-bold uppercase tracking-wide">
                  {b.cat}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-zinc-500 text-xs mb-3">
                  <span>{b.date}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600" />
                  <span>{b.read}</span>
                </div>
                <h3 className="font-display font-bold text-lg leading-snug mb-3">
                  {b.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {b.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-amber-400 font-medium hover:gap-4 transition-all">
                  Read Article →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-32 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal text-center mb-14">
          <div className="section-label justify-center">Got Questions?</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Frequently Asked{" "}
            <em className="gold-text-simple not-italic">Questions</em>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Everything you need to know before we work together.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3 reveal">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden bg-white/5 border transition-all ${open === i ? "border-amber-400/50" : "border-white/10"}`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 gap-4 text-left hover:text-amber-400 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-sm">{faq.q}</span>
                <span
                  className={`w-7 h-7 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-sm flex-shrink-0 transition-all ${open === i ? "bg-amber-400/15 border-amber-400/40 text-amber-400 rotate-45" : "text-zinc-500"}`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${open === i ? "max-h-64" : "max-h-0"}`}
              >
                <div className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal mb-12">
          <div className="section-label">Get In Touch</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Let's Create Something{" "}
            <em className="gold-text-simple not-italic">Extraordinary</em>
          </h2>
          <p className="text-zinc-400 max-w-lg">
            Have a project in mind? Let's talk. I'm always open to new creative
            opportunities.
          </p>
        </div>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div className="reveal-l">
            <h3 className="font-display text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Whether you need event coverage, brand photography, social media
              management, or full creative direction — reach out through any
              channel below.
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: "📞",
                  label: "Phone / Call",
                  value: "+91 XXXXX XXXXX",
                  href: "tel:+91",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "basid.emam@email.com",
                  href: "mailto:basid.emam@email.com",
                },
                {
                  icon: "📸",
                  label: "Instagram",
                  value: "@basid.emam",
                  href: "https://instagram.com",
                },
                {
                  icon: "💼",
                  label: "LinkedIn",
                  value: "/in/basidemam",
                  href: "https://linkedin.com",
                },
                {
                  icon: "💬",
                  label: "WhatsApp",
                  value: "Chat Directly",
                  href: "https://wa.me/91",
                },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-amber-400/5 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-xl flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 mb-0.5">{label}</div>
                    <div className="font-medium text-sm">{value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-[#0f0f18] h-48 flex items-center justify-center text-zinc-500 text-sm">
              📍 MMDU University, Mullana, Haryana, India
            </div>
          </div>
          <div className="reveal-r p-10 rounded-3xl bg-white/5 border border-white/10">
            <div className="mb-7">
              <div className="font-display font-bold text-2xl mb-1">
                Send a Message
              </div>
              <div className="text-xs text-zinc-500">
                I'll respond within 24 hours
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-400 mb-2 font-medium tracking-wide">
                    First Name
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0f18] border border-white/10 text-sm focus:border-amber-400/50 outline-none transition-colors text-white placeholder:text-zinc-600"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-2 font-medium tracking-wide">
                    Last Name
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0f18] border border-white/10 text-sm focus:border-amber-400/50 outline-none transition-colors text-white placeholder:text-zinc-600"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-zinc-400 mb-2 font-medium tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-[#0f0f18] border border-white/10 text-sm focus:border-amber-400/50 outline-none transition-colors text-white placeholder:text-zinc-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-400 mb-2 font-medium tracking-wide">
                  Service
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#0f0f18] border border-white/10 text-sm focus:border-amber-400/50 outline-none transition-colors text-zinc-400">
                  <option value="">Select a service...</option>
                  {[
                    "Photography",
                    "Videography",
                    "Wedding Shoot",
                    "Event Coverage",
                    "Social Media Management",
                    "Content Creation",
                    "Brand Promotions",
                    "Video Editing",
                    "Other",
                  ].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-zinc-400 mb-2 font-medium tracking-wide">
                  Project Details
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-[#0f0f18] border border-white/10 text-sm focus:border-amber-400/50 outline-none transition-colors text-white placeholder:text-zinc-600 resize-y min-h-[120px]"
                  placeholder="Tell me about your project — event date, location, requirements, budget..."
                />
              </div>
              <button
                type="submit"
                className={`w-full py-4 rounded-full font-bold text-sm transition-all ${sent ? "bg-teal text-white" : "gold-btn"}`}
              >
                {sent
                  ? "✓ Message Sent! I'll get back to you soon."
                  : "✦ Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const FOOTER_LINKS = {
  Services: [
    "Photography",
    "Videography",
    "Event Coverage",
    "Social Media Management",
    "Content Creation",
    "Video Editing",
    "Brand Promotions",
  ],
  Explore: [
    "About Me",
    "Portfolio",
    "Awards",
    "Certifications",
    "Case Studies",
    "Blog",
    "FAQ",
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0a0a10] border-t border-white/8 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="block font-display font-black text-3xl mb-4 gold-text-simple">
              Basid Emam
            </span>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mb-6">
              Award-winning content creator, photographer, and videographer
              crafting visual stories that inspire and connect. Based in India,
              working globally.
            </p>
            <div className="flex gap-3">
              {["📸", "▶", "💼", "💬", "✉️"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-sm hover:bg-amber-400/15 hover:border-amber-400/40 hover:text-amber-400 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-xs uppercase tracking-[3px] text-amber-400 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[3px] text-amber-400 mb-4">
              Newsletter
            </h4>
            <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
              Photography tips, BTS stories, and creative inspiration delivered
              weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2.5 rounded-lg bg-white/8 border border-white/10 text-sm focus:border-amber-400/50 outline-none text-white placeholder:text-zinc-600"
              />
              <button className="px-4 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-zinc-900 font-bold text-sm transition-all">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/8 gap-4">
          <div className="text-xs text-zinc-600">
            © 2026 <span className="text-amber-400">Basid Emam</span>. All
            rights reserved. Made with ❤️ and creativity.
          </div>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
