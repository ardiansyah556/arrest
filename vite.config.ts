import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

const pwaOptions = {
  registerType: "autoUpdate",
  // Other PWA options...
};

const plugins = [react(), VitePWA(pwaOptions)];
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  // The 'root' property is removed to avoid ambiguity in the Vercel build environment.
  build: {
    // The output directory is set to 'dist' at the project root.
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      // Explicitly specify the entry point, as 'root' is no longer defined.
      input: {
        app: path.resolve(import.meta.dirname, "client/index.html"),
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
