import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f5f1",
        ink: "#0c0c0d",
        text: "#121212",
        "text-grey": "#6b6b66",
        "text-grey-light": "#9e9e99",
        "border-grey": "#d9d6cf",
        "deep-blue": "#2f6ea8",
        "signal-blue": "#9cc7e8",
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
