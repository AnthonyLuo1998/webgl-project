import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: "./index_triangle.js",
    },
  },

  plugins: [react(), glsl()],
});
