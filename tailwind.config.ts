import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,vue,js,ts}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        xxs: "360px",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "zoom-in-out": "zoom 0.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
