import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  server: {
    port: 5000,
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {},
});
