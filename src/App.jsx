import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About.jsx";
import Cursor from "./components/Cursor.jsx";
import Hero from "./components/Hero.jsx";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import Particles from "./components/Particles .jsx";
import { Photography, Videography } from "./components/Photovideo.jsx";
import Portfolio from "./components/Portfolio.jsx";
import {
  Awards,
  Brands,
  Certifications,
  Experience,
  SocialMedia,
} from "./components/Socialbrandsawards.jsx";
import {
  Blog,
  Contact,
  FAQ,
  Footer,
  Instagram,
  YouTube,
} from "./components/Socialyoutubefaqcontact.jsx";
import {
  CaseStudies,
  Statistics,
  Testimonials,
} from "./components/Statstestimonials.jsx";
import { Services, Skills, Story } from "./components/Storyskillsservices.jsx";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.localStorage.getItem("theme") || "dark";
}

function ScrollToHash({ loading }) {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (loading) {
      return;
    }

    window.requestAnimationFrame(() => {
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const target = document.querySelector(hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash, loading, pathname]);

  return null;
}

function HomePage() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Story />
      <Skills />
      {/* <Services /> */}
      <Portfolio />
      {/* <Photography /> */}
      <Videography />
      <SocialMedia />
      <Brands />
      <Awards />
      <Certifications />
      <Experience />
      <Statistics />
      <CaseStudies />
      <Testimonials />
      <Instagram />
      <YouTube />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (loading) {
      return undefined;
    }

    const elements = document.querySelectorAll(".reveal, .reveal-l, .reveal-r");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [loading]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050508] text-zinc-100">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Better Text Readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 -z-10" />

      {loading ? <Loader onDone={() => setLoading(false)} /> : null}
      <Particles />
      <Cursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ScrollToHash loading={loading} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
