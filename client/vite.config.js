import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000", // Updated from 3001 to match server/.env PORT
        changeOrigin: true,
        secure: false,
      },
    },
  },
});