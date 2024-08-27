import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default {
  build: {
    rollupOptions: {
      external: ['main.jsx'], // add this if you want to externalize the module
    },
  },
};
