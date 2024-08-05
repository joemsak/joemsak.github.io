import react from "@vitejs/plugin-react";
import compress from "vite-plugin-compress";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"),
        legal: resolve(__dirname, "./src/privacy/index.html"),
      },
    },
  },
  plugins: [compress, react],
});
