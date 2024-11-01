import { fileURLToPath, URL } from "url";
import { defineConfig, mergeConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { tanstackViteConfig } from '@tanstack/config/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({}), react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

// export default mergeConfig(
//   config,
//   tanstackViteConfig()
// )
