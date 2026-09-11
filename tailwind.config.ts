import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f1eee8",
        cream: "#f7efe6",
        "cream-secondary": "#f4e8da",
        ink: "#0c0c0d",
        text: "#121212",
        ash: "#6b6b66",
        "text-grey": "#6b6b66",
        "text-grey-light": "#9e9e99",
        "text-secondary": "#757575",
        "border-grey": "#d9d6cf",
        "border-charcoal": "#2e2e2e",
        "border-tan": "#d1c9bd",
        "deep-blue": "#2f6ea8",
        "receipt-paper": "#fff0e2",
        primary: "#cb8b58",
        "primary-light": "#e6af85",
        "status-warning": "#ff76b7",
        "status-info": "#649fff",
      },
      fontFamily: {
        body: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-prata)", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
        space: ["var(--font-space-grotesk)", "sans-serif"],
        fraunces: ["var(--font-fraunces)", "serif"],
      },
      borderRadius: {
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;
