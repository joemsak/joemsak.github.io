import react from "@vitejs/plugin-react";
import compress from "vite-plugin-compress";
import process from "process";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "./src/index.html"),
        privacy: resolve(process.cwd(), "./src/privacy/index.html"),
        terms: resolve(process.cwd(), "./src/terms/index.html"),
      },
    },
  },
  plugins: [compress, react()],
});
