import type { Config } from "tailwindcss";

const config: Config = {
  content: [ "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      }
    },
  },
  plugins: [],
};
export default config;

