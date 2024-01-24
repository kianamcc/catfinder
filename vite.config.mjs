import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "",
  plugins: [react()],
  proxy: {
    "/proxy": {
      target: "https://api.petfinder.com/v2",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/proxy/, ""),
    },
  },
  server: {
    open: true,
  },
});
