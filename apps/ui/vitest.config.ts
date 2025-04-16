import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  define: {
    "import.meta.env.IS_MOCK_ACTIVE": JSON.stringify("true"),
  },
  test: {
    reporters: ["verbose"],
    include: ["./**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    globals: true,
    environment: "jsdom",
    // coverage: {
    //   all: false,
    //   enabled: true,
    //   provider: 'v8',
    //   reporter: ['text', 'json', 'html', 'cobertura', 'lcov'],
    //   reportsDirectory: './tests/unit/coverage'
    //   // include: ['./logic/**']
    // }
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "./"),
    },
  },
});
