import { defineConfig } from "vite";
import dts from "unplugin-dts/vite";

export default defineConfig({
  plugins: [dts({ tsconfigPath: "./tsconfig.json", rollupTypes: true })],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "umd"],
      name: "index",
      fileName: (format) =>
        format == "es" ? "index.js" : `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
