const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fillBar: {
          from: { width: "0%" },
          to: { width: "var(--target-width)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        "scroll-reverse": "scroll 20s linear infinite reverse",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fill-bar": "fillBar 1.5s ease-out forwards",
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
