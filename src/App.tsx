import { useEffect, useLayoutEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import ServicesPage from "./pages/ServicesPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import BrandIntro from "./components/BrandIntro";

function getPath() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.slice(1));
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }
  document.getElementById(id)?.scrollIntoView();
}

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.28, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.18, ease: "easeIn" as const } }
};

export default function App() {
  const [path, setPath] = useState(getPath);
  const [showIntro, setShowIntro] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    restDelta: 0.001
  });

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => setPath(getPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (!showIntro) return;
    const timer = window.setTimeout(() => setShowIntro(false), 2300);
    return () => window.clearTimeout(timer);
  }, [showIntro]);

  useEffect(() => {
    if (!showIntro) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showIntro]);

  useEffect(() => {
    if (showIntro || !window.location.hash) return;
    const hash = window.location.hash;
    const frame = requestAnimationFrame(() => {
      scrollToHash(hash);
    });
    return () => cancelAnimationFrame(frame);
  }, [path, showIntro]);

  function handleInternalNavigation(event: MouseEvent<HTMLDivElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest("a");
    if (!link || link.target || link.hasAttribute("download")) return;

    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin) return;

    const nextPath = destination.pathname.replace(/\/+$/, "") || "/";
    const supportedRoutes = ["/", "/about", "/services", "/portfolio", "/contact"];
    if (!supportedRoutes.includes(nextPath)) return;

    event.preventDefault();
    const nextUrl = `${nextPath}${destination.search}${destination.hash}`;
    if (nextUrl === `${window.location.pathname}${window.location.search}${window.location.hash}`) return;

    window.history.pushState(null, "", nextUrl);
    setPath(nextPath);

    if (destination.hash && nextPath === path) {
      requestAnimationFrame(() => {
        scrollToHash(destination.hash);
      });
    } else if (!destination.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const activePage =
    path === "/portfolio" ? "Portfolio" :
    path === "/about" ? "About & Alliance" :
    path === "/services" ? "Services" :
    path === "/contact" ? "Contact Us" :
    "Home";

  const page =
    path === "/portfolio" ? <PortfolioPage /> :
    path === "/about" ? <AboutPage /> :
    path === "/services" ? <ServicesPage /> :
    path === "/contact" ? <ContactPage /> :
    <HomePage />;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-0.5 origin-left bg-terracotta"
        style={{ scaleX }}
      />
      
      <div onClick={handleInternalNavigation}>
        <Header activePage={activePage} />

        <div aria-hidden={showIntro} className="relative min-h-screen overflow-x-clip bg-paper">
          <AnimatePresence mode="wait">
            <motion.div
              key={path}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-screen"
            >
              {page}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {showIntro && <BrandIntro />}
    </>
  );
}
