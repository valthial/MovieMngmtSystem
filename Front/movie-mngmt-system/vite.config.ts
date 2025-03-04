import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths()
  ],
  server: {
    proxy: {
      '^/api/.*': {
        // target: process.env.API_URL,
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        configure(proxy) {
          proxy.on("error", (err, _, __) => {
            console.error(err)
          })

          proxy.on('proxyReq', (_, req, _res) => {
            console.log("Proxing equest to:", `[${req.method}]`, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received response from:', proxyRes.statusCode, req.url);
          });
        },
        rewrite: (path) => path.replace(/\/api/, ''),
      }
    }
  }
});
