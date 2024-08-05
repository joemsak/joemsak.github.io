import { defineConfig } from "vite";
import defaultTheme from "tailwindcss/defaultTheme";

export default defineConfig({
  content: ["./src/**/*"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
});
