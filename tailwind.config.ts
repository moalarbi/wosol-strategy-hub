import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Quiet luxury palette — sourced from the WOSOL × Kingdom Centre brand kit
        ink: {
          DEFAULT: "#0B1220", // deep navy ink — primary surface
          900: "#0B1220",
          800: "#101A2C",
          700: "#162238",
          600: "#1C2A44",
          500: "#243353"
        },
        cream: {
          DEFAULT: "#F5EFE4", // warm cream — primary "paper"
          50: "#FBF8F2",
          100: "#F5EFE4",
          200: "#EDE5D2",
          300: "#E3D7BC",
          400: "#D6C5A2"
        },
        champagne: {
          DEFAULT: "#B89968", // muted champagne gold
          50: "#E9DCC2",
          100: "#DDCBA8",
          200: "#CDB68A",
          300: "#B89968",
          400: "#9C8050",
          500: "#7E6740"
        },
        marble: {
          DEFAULT: "#E8E2D2",
          warm: "#EFE9DA",
          cool: "#DCD6C8"
        },
        shadow: {
          900: "#08080A",
          800: "#0C0C10",
          700: "#15151B"
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', "system-ui", "sans-serif"],
        serif: ['var(--font-serif)', "Georgia", "serif"],
        arabic: ['var(--font-arabic)', "system-ui", "sans-serif"]
      },
      fontSize: {
        // Editorial type scale
        "display-2xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "eyebrow": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.28em" }]
      },
      letterSpacing: {
        widest: "0.28em"
      },
      spacing: {
        editorial: "clamp(4rem, 10vw, 9rem)",
        chapter: "clamp(2.5rem, 6vw, 5rem)"
      },
      maxWidth: {
        prose: "68ch",
        editorial: "1240px",
        wide: "1440px"
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        cinematic: "cubic-bezier(0.65, 0, 0.35, 1)"
      },
      backgroundImage: {
        "grain-light": "radial-gradient(rgba(11,18,32,0.04) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        "champagne-fade":
          "linear-gradient(180deg, rgba(184,153,104,0) 0%, rgba(184,153,104,0.5) 50%, rgba(184,153,104,0) 100%)"
      },
      boxShadow: {
        editorial: "0 30px 80px -40px rgba(11,18,32,0.45)",
        whisper: "0 1px 0 rgba(184,153,104,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
