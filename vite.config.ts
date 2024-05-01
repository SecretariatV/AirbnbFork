import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@features": "/src/features",
      "@pages": "/src/pages",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
    },
  },
});
