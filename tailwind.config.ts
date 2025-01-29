import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        archivo: "var(--font-archivo)",
      },
      colors: {
        gray: {
          150: "var(--color-surface-secondary)",
          650: "var(--color-cta-fill-primary)",
          750: "var(--color-text-primary)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
