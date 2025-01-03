import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  root: "./src",
  mode:"development",
  publicDir: "../public",
  server: {
    port: 3001,
    open: true,
  },
  resolve: {
    extensions: [".tsx", ".ts"],
  },
});
