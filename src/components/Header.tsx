import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Portfolio", "/portfolio"],
  ["About & Alliance", "/about"],
  ["Services", "/services"],
  ["Contact Us", "/contact"],
];

interface HeaderProps {
  activePage?: string;
}

export default function Header({ activePage = "Home" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHiddenOnPortfolio, setIsHiddenOnPortfolio] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;
    const root = document.documentElement;
    const previousFilterOffset = root.style.getPropertyValue("--portfolio-filter-offset");
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldHideHeader =
        activePage === "Portfolio" &&
        !menuOpen &&
        currentScrollY > 120 &&
        currentScrollY > previousScrollY;
      setIsScrolled(currentScrollY > 8);
      setIsHiddenOnPortfolio(shouldHideHeader);
      root.style.setProperty("--portfolio-filter-offset", shouldHideHeader ? "0px" : "88px");
      previousScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (previousFilterOffset) {
        root.style.setProperty("--portfolio-filter-offset", previousFilterOffset);
      } else {
        root.style.removeProperty("--portfolio-filter-offset");
      }
    };
  }, [activePage, menuOpen]);

  return (
    <header className={`sticky top-0 z-[250] border-b border-[#1e422f] bg-[#00180e]/95 backdrop-blur-md transition-[transform,box-shadow] duration-300 ${isHiddenOnPortfolio ? "pointer-events-none -translate-y-full" : "translate-y-0"} ${isScrolled ? "shadow-[0_8px_24px_rgba(0,24,14,0.24)]" : ""}`}>
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <a className="flex items-center" href="/" aria-label="Keyland Properties home">
          <span className="grid h-[74px] w-[100px] shrink-0 place-items-center">
            <img
              src="/keyland-logo-new.png"
              alt="Keyland Properties · Sri Lanka"
              className="h-full w-full object-contain"
            />
          </span>
        </a>
        <nav className="hidden h-full items-center gap-7 xl:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`relative flex h-full items-center text-[10px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 hover:text-gold after:absolute after:bottom-[20px] after:left-0 after:right-0 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                label === activePage
                  ? "text-gold after:scale-x-100"
                  : "text-white/80"
              }`}
              aria-current={label === activePage ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        {/* <a
          href="/contact#consultation"
          className="group hidden min-h-11 items-center justify-center gap-3 border border-gold bg-gold px-4 py-3 text-[9px] font-medium uppercase tracking-[0.12em] text-navy shadow-sm transition-colors hover:bg-[#c5a04b] sm:inline-flex xl:px-5 xl:tracking-[0.17em]"
        >
          <span className="hidden lg:inline xl:hidden">Talk to Keyland</span>
          <span className="lg:hidden xl:inline">Private consultation</span>
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a> */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center text-white xl:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="border-t border-[#1e422f] bg-[#00180e] px-5 py-3 shadow-lg shadow-black/5 xl:hidden" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              aria-current={label === activePage ? "page" : undefined}
              className={`block border-b border-[#1e422f] py-3.5 text-[11px] uppercase tracking-[0.14em] last:border-0 ${label === activePage ? "font-medium text-gold" : "text-white/80"
                }`}
            >
              {label}
            </a>
          ))}
          {/* <a href="/contact#consultation" onClick={() => setMenuOpen(false)} className="mt-4 inline-flex items-center bg-gold px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-navy">
            Private consultation
          </a> */}
        </nav>
      )}
    </header>
  );
}
