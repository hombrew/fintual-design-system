import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    cjsInterop({
      dependencies: ["inline-style-prefixer", "inline-style-prefixer/**/*"],
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
  ssr: {
    noExternal: ["uniwind"],
  },
  resolve: {
    alias: { "react-native": path.resolve(`node_modules/react-native`) },
  },
});
