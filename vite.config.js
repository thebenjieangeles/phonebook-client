import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/phonebook-client",
  plugins: [react()],
  server: {
    proxy: "https://phonebook-app-6ojd.onrender.com",
  },
});
