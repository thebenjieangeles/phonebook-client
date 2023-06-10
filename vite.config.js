import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/phonebook-client/",
  plugins: [react()],
  server: {
    proxy: "https://phonebook-backend-let6.onrender.com",
  },
});
