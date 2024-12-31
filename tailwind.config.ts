import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,vue,js,ts}"], // Mettez vos chemins ici
  theme: {
    extend: {
      screens: {
        xs: "450px",
        xxs: "360px",
      },
    },
  },
  plugins: [],
};

export default config;
