import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:"15px"
      },

      colors:{
        accent: "#800080",
        blackish: "#1b1b1b",
      },
    },
  },
  plugins: [],
} satisfies Config;
