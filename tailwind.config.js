/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#052719",
        "navy-light": "#0b3d2c",
        gold: "#d8b670",
        terracotta: "#87651f",
        paper: "#f8f6f1",
        ink: "#292520",
        muted: "#756e66",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        display: ['"Gilda Display"', "Georgia", "serif"],
        gothic: ['"Gilda Display"', "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 18px 48px rgba(38, 29, 23, 0.1)",
      },
      letterSpacing: {
        editorial: "-0.035em",
      },
      keyframes: {
        "page-enter": {
          from: { opacity: "0", transform: "translate3d(0, 12px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "home-hero-enter": {
          from: { opacity: "0", transform: "translate3d(0, 20px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "home-content-enter": {
          from: { opacity: "0", transform: "translate3d(0, 14px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "soft-rise": {
          from: { opacity: "0", transform: "translate3d(0, 16px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "partner-scroll": {
          to: { transform: "translateX(-50%)" },
        },
        "brand-mark-draw": {
          to: { strokeDashoffset: "0" },
        },
        "brand-mark-fill": {
          to: { opacity: "1" },
        },
        "brand-text-reveal": {
          from: { opacity: "0", transform: "translateY(9px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "brand-lockup-arrive": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "brand-rule-draw": {
          to: { transform: "scaleX(1)" },
        },
        "brand-particle-float": {
          "0%, 100%": { opacity: "0", transform: "translate3d(0, 10px, 0) scale(0.7)" },
          "35%, 65%": { opacity: "0.22", transform: "translate3d(7px, -7px, 0) scale(1)" },
        },
        "brand-progress": {
          to: { transform: "scaleX(1)" },
        },
        "brand-intro-exit": {
          to: { opacity: "0", visibility: "hidden" },
        },
        "wind-sweep": {
          "0%": { opacity: "0", strokeDashoffset: "0", transform: "translateX(-1.5%)" },
          "16%": { opacity: "0.38" },
          "82%": { opacity: "0.2" },
          "100%": { opacity: "0", strokeDashoffset: "-760", transform: "translateX(1.5%)" },
        },
      },
      animation: {
        "page-enter": "page-enter 520ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "home-hero-enter": "home-hero-enter 850ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "home-content-enter": "home-content-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "soft-rise": "soft-rise 620ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "partner-scroll": "partner-scroll 36s linear infinite",
        "brand-mark-draw": "brand-mark-draw 1050ms ease-out 150ms forwards",
        "brand-mark-fill": "brand-mark-fill 500ms ease-out 800ms forwards",
        "brand-mark-line": "brand-mark-draw 650ms ease-out 950ms forwards",
        "brand-window-fill": "brand-mark-fill 350ms ease-out 1200ms forwards",
        "brand-name-reveal": "brand-text-reveal 600ms ease-out 550ms forwards",
        "brand-caption-reveal": "brand-text-reveal 550ms ease-out 800ms forwards",
        "brand-rule-reveal": "brand-text-reveal 500ms ease-out 1050ms forwards",
        "brand-lockup-arrive": "brand-lockup-arrive 900ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "brand-particle-float": "brand-particle-float 2.6s ease-in-out infinite",
        "brand-rule-draw": "brand-rule-draw 550ms ease-out 1150ms forwards",
        "brand-progress": "brand-progress 1.9s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        "brand-intro-exit": "brand-intro-exit 450ms ease-in 1.85s both",
        "wind-sweep": "wind-sweep 19s linear infinite",
      },
    },
  },
};
