import { defineConfig } from "vite";
import { vitePluginMdToHTML } from "./plugin";

export default defineConfig({
  plugins: [
    vitePluginMdToHTML({
      syntaxHighlight: true,
    }),
  ],
});
