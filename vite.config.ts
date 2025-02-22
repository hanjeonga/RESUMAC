import { defineConfig } from "vite";
import next from "vite-plugin-next";

export default defineConfig({
  plugins: [next()],
  server: {
    port: 3000,
  },
});
