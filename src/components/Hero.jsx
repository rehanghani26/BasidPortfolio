import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCamera,
  FaDownload,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTrophy,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { HERO_STATS, HOME_PHOTOS, ROLES } from "../data";

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/basiidemam?igsh=MTFtMDBocHZ1aHA4Zw==",
    label: "Instagram",
    Icon: FaInstagram,
  },
  // { href: "https://youtube.com", label: "YouTube", Icon: FaYoutube },
  {
    href: "https://www.linkedin.com/in/basid-emam-970bba250?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "https://wa.me/919801656971",
    label: "WhatsApp",
    Icon: FaWhatsapp,
  },
];

function AnimCounter({ target, suffix = "+" }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1600;
          const start = Date.now();

          const run = () => {
            const p = Math.min((Date.now() - start) / dur, 1);
            setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(run);
          };

          run();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) io.observe(ref.current);

    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [typed, setTyped] = useState("");
  const [photoIdx, setPhotoIdx] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhotoIdx((current) => (current + 1) % HOME_PHOTOS.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setCharIdx((c) => c + 1);
          setTyped(current.slice(0, charIdx + 1));
        }, 90);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else if (charIdx > 0) {
      timeout = setTimeout(() => {
        setCharIdx((c) => c - 1);
        setTyped(current.slice(0, charIdx - 1));
      }, 55);
    } else {
      setDeleting(false);
      setRoleIdx((r) => (r + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  const activePhoto = HOME_PHOTOS[photoIdx];

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-[72px] px-4 md:px-16"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 40%,rgba(232,201,122,0.07),transparent 70%),radial-gradient(ellipse 40% 40% at 20% 80%,rgba(80,200,176,0.05),transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 grid-bg"
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] right-[-100px] top-[-100px] rounded-full animate-orb"
          style={{
            background:
              "radial-gradient(circle,rgba(232,201,122,0.12),transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] left-[-50px] bottom-[-50px] rounded-full animate-orb"
          style={{
            background:
              "radial-gradient(circle,rgba(80,200,176,0.08),transparent 70%)",
            filter: "blur(80px)",
            animationDelay: "-4s",
            animationDuration: "13s",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="animate-[slideUp_0.9s_0.2s_cubic-bezier(0.4,0,0.2,1)_both]">
          <h1 className="font-display font-black leading-none mb-4 animate-[slideUp_0.9s_0.35s_cubic-bezier(0.4,0,0.2,1)_both]">
            <span className="block text-6xl md:text-8xl gold-text">Basid</span>
            <span className="block text-6xl md:text-8xl text-zinc-400">
              Emam
            </span>
          </h1>

          <div className="flex items-center gap-3 mb-7 animate-[slideUp_0.9s_0.45s_cubic-bezier(0.4,0,0.2,1)_both]">
            <span className="font-mono text-lg text-teal">{typed}</span>
            <span className="inline-block w-0.5 h-5 bg-teal animate-blink" />
          </div>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10 animate-[slideUp_0.9s_0.5s_cubic-bezier(0.4,0,0.2,1)_both]">
            Creative and passionate content creator crafting cinematic visual
            stories through photography, videography, and strategic social media
            management. Turning moments into memories that last forever.
          </p>

          <div className="flex flex-wrap gap-4 animate-[slideUp_0.9s_0.6s_cubic-bezier(0.4,0,0.2,1)_both]">
            <Link
              to="/#portfolio"
              className="gold-btn px-8 py-3.5 text-sm flex items-center gap-2"
            >
              View Portfolio
              <FaArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            <Link
              to="/#contact"
              className="px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 hover:border-white/20 hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              <FaPhoneAlt className="h-3.5 w-3.5" aria-hidden="true" />
              Contact
            </Link>
          </div>

          <div className="grid grid-cols-5 mt-12 rounded-xl overflow-hidden border border-white/8 animate-[slideUp_0.9s_0.7s_cubic-bezier(0.4,0,0.2,1)_both]">
            {HERO_STATS.map(({ num, suffix, label }) => (
              <div
                key={label}
                className="bg-[#050508] border-r border-white/8 last:border-r-0 py-4 text-center"
              >
                <div className="font-display text-2xl font-black text-amber-400">
                  <AnimCounter target={num} suffix={suffix} />
                </div>
                <div className="text-[0.62rem] uppercase tracking-[2px] text-zinc-500 mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center animate-[slideUp_0.9s_0.4s_cubic-bezier(0.4,0,0.2,1)_both]">
          <div className="relative w-full max-w-[420px] aspect-[4/5]">
            <div className="absolute inset-[-20px] rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm" />
            <div className="hero-photo-frame absolute inset-0 rounded-3xl overflow-hidden border border-white/15 bg-[#0f0f18] shadow-2xl">
              {HOME_PHOTOS.map((photo, index) => (
                <div
                  key={photo.postId}
                  className={`hero-photo-slide ${
                    photoIdx === index ? "is-active" : ""
                  }`}
                >
                  <iframe
                    src={photo.embedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    allow="encrypted-media"
                    title={photo.label}
                    style={{ minHeight: "500px" }}
                  />
                </div>
              ))}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 bg-gradient-to-t from-[#050508]/95 via-[#050508]/45 to-transparent">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs text-amber-400 uppercase tracking-[3px] mb-1">
                      Home Gallery
                    </div>
                    <div className="font-display text-2xl font-bold">
                      {activePhoto.label}
                    </div>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-zinc-950">
                    <FaCamera className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-[#050508]/80 p-2 backdrop-blur-xl">
              {HOME_PHOTOS.map((photo, index) => (
                <button
                  key={photo.postId}
                  type="button"
                  onClick={() => setPhotoIdx(index)}
                  aria-label={`Show ${photo.label}`}
                  className={`h-2.5 rounded-full transition-all ${
                    photoIdx === index
                      ? "w-8 bg-amber-400"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <div className="absolute top-[10%] right-[-22px] lg:right-[-82px] px-4 py-3 rounded-xl bg-[#050508]/90 backdrop-blur-xl border border-white/15 animate-float">
              <div className="text-[0.6rem] text-zinc-500 uppercase tracking-[2px]">
                Awards Won
              </div>
              <div className="flex items-center gap-2 font-display text-xl font-bold text-amber-400">
                15+
                <FaTrophy className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
            <div
              className="absolute bottom-[15%] left-[-22px] lg:left-[-80px] px-4 py-3 rounded-xl bg-[#050508]/90 backdrop-blur-xl border border-white/15 animate-float"
              style={{ animationDelay: "-2s" }}
            >
              <div className="text-[0.6rem] text-zinc-500 uppercase tracking-[2px]">
                Experience
              </div>
              <div className="font-display text-xl font-bold text-amber-400">
                5+ Years
              </div>
            </div>

            <div className="absolute left-4 lg:left-[-70px] top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-sm hover:bg-amber-400/15 hover:border-amber-400/40 hover:text-amber-400 hover:scale-110 transition-all"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
