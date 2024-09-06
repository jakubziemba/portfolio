import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background-hsl))",
        foreground: "hsl(var(--foreground-hsl))",
        "foreground-dimmed": "hsl(var(--foreground-hsl-dimmed))",
      },
      letterSpacing: {
        text: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
