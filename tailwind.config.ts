import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // 👈 dark mode toggle ke liye
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // Tailwind blue-500
          dark: "#1E40AF",   // Tailwind blue-900
        },
      },
      boxShadow: {
        "soft": "0 2px 8px rgba(0,0,0,0.08)",
        "glow": "0 4px 20px rgba(59,130,246,0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
