import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // TanStack Router options
  tsr: {
    autoCodeSplitting: true,
  },
  // Vite plugins — do NOT add tanstackRouter() or tanstackStart() here;
  // defineConfig from @tanstack/react-start handles those automatically.
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
    ],
  },
  // Nitro preset is injected via NITRO_PRESET env var at build time (see vercel.json)
  // so local dev works without any changes here.
  server: {},
});
