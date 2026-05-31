import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaCameraRetro, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#story", label: "Story" },
  { href: "#skills", label: "Skills" },
  // { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  // { href: "#photography", label: "Photos" },
  { href: "#videography", label: "Videos" },
  { href: "#brands", label: "Brands" },
  { href: "#awards", label: "Awards" },
  { href: "#statistics", label: "Stats" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const routeTo = (hash) => `/${hash}`;

export default function Navbar({ theme = "dark", toggleTheme = () => {} }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(location.hash || "#hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      setActive(location.hash);
    }
  }, [location.hash]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const y = window.scrollY + 100;

      document.querySelectorAll("section[id]").forEach((section) => {
        if (
          y >= section.offsetTop &&
          y < section.offsetTop + section.offsetHeight
        ) {
          setActive(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] h-[72px] flex items-center px-4 md:px-12 transition-all duration-400 ${
          scrolled
            ? theme === "dark"
              ? "bg-[#050508]/85 backdrop-blur-xl border-b border-white/8 shadow-2xl"
              : "bg-[#f8f5f0]/85 backdrop-blur-xl border-b border-black/8 shadow-lg"
            : ""
        }`}
      >
        <Link
          to="/#hero"
          onClick={closeMenu}
          className="font-display font-black text-2xl mr-auto flex items-center gap-2 flex-shrink-0"
          style={{
            background: "linear-gradient(135deg,#e8c97a,#f0ede8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <FaCameraRetro
            className="h-5 w-5"
            aria-hidden="true"
            style={{ WebkitTextFillColor: "#e8c97a" }}
          />
          Basid<span style={{ WebkitTextFillColor: "#e8c97a" }}>.</span>
        </Link>

        <ul className="hidden xl:flex items-center mx-auto">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                to={routeTo(href)}
                className={`px-3 py-2 text-[0.73rem] uppercase tracking-wide transition-colors duration-300 relative group ${
                  active === href
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-px bg-amber-400 transform origin-center transition-transform duration-300 ${
                    active === href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`fixed inset-0 z-[999] bg-[#050508]/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-2 transition-transform duration-500 overflow-y-auto py-24 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {LINKS.map(({ href, label }) => (
          <Link
            key={href}
            to={routeTo(href)}
            onClick={closeMenu}
            className="font-display text-2xl text-zinc-400 hover:text-amber-400 transition-colors py-2"
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
