import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "",
  plugins: [react()],
  cors: false,
  server: {
    open: true,
  },
});
