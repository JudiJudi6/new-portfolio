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
        white: "#ede8e4",
      },
      screens: {
        sm400: "400px",
        sm500: "500px",
        sm600: "600px",
        md800: "800px",
        md900: "900px",
        sc: "1500px",
      },
      // fontSize: {
      //   sm: "max(12px,0.76vw)",
      //   smm: "max(13px,0.86vw)",
      //   md: "max(14px,0.95vw)",
      //   mdd: "max(15px,1.05vw)",
      //   base: "max(16px,1.15vw)",
      //   lg: "max(18px,1.35vw)",
      //   xl: "max(20px,1.55vw)",
      //   "2xl": "max(24px,1.95vw)",
      //   "3xl": "max(30px,1.95vw)",
      //   "4xl": "max(36px,2.55vw)",
      //   "5xl": "max(48px,3.35vw)",
      //   "6xl": "max(60px,4.55vw)",
      //   "7xl": "max(72px,5.75vw)",
      // },
    },
  },
  plugins: [],
};
export default config;
