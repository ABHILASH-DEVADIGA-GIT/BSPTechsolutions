import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    // tanstackStart handles tanstackRouter internally — do NOT add tanstackRouter separately
    tanstackStart({
      tsr: {
        autoCodeSplitting: true,
      },
    }),
    // nitro plugin with vercel preset for Vercel deployments.
    // For local dev this is ignored; it only affects the production build output.
    nitro({
      preset: "vercel",
    }),
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
  ],
});
