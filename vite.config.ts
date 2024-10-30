import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({}), react()],
  base: '/react-i18next-locales/',
  resolve: {
    alias: {
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
