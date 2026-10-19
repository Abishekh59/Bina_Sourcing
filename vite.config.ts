import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = fileURLToPath(new URL(".", import.meta.url))
const publicUrl = process.env.PUBLIC_URL?.replace(/\/+$/, "")

export default defineConfig(({ mode }) => ({
  base: publicUrl ? `${publicUrl}/` : "/",
  build: {
    sourcemap: mode === "development" ? "inline" : false,
    minify: mode !== "development",
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(projectRoot, "./src"),
    },
  },
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: Number.parseInt(process.env.PORT || "8443", 10),
    strictPort: true,
  },
  preview: {
    host: process.env.HOST || "0.0.0.0",
    port: Number.parseInt(process.env.PORT || "8443", 10),
  },
}))
