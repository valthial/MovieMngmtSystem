// vite.config.ts
import { reactRouter } from "file:///D:/Programming/repos/MovieMngmtSystem/Front/movie-mngmt-system/node_modules/@react-router/dev/dist/vite.js";
import tailwindcss from "file:///D:/Programming/repos/MovieMngmtSystem/Front/movie-mngmt-system/node_modules/@tailwindcss/vite/dist/index.mjs";
import { defineConfig } from "file:///D:/Programming/repos/MovieMngmtSystem/Front/movie-mngmt-system/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///D:/Programming/repos/MovieMngmtSystem/Front/movie-mngmt-system/node_modules/vite-tsconfig-paths/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths()
  ],
  server: {
    proxy: {
      "^/api/.*": {
        target: process.env.API_URL,
        changeOrigin: true,
        configure(proxy) {
          proxy.on("error", (err, _, __) => {
            console.error(err);
          });
          proxy.on("proxyReq", (_, req, _res) => {
            console.log("Proxing equest to:", `[${req.method}]`, req.url);
          });
          proxy.on("proxyRes", (proxyRes, req, _res) => {
            console.log("Received response from:", proxyRes.statusCode, req.url);
          });
        },
        rewrite: (path) => path.replace(/\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9ncmFtbWluZ1xcXFxyZXBvc1xcXFxNb3ZpZU1uZ210U3lzdGVtXFxcXEZyb250XFxcXG1vdmllLW1uZ210LXN5c3RlbVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvZ3JhbW1pbmdcXFxccmVwb3NcXFxcTW92aWVNbmdtdFN5c3RlbVxcXFxGcm9udFxcXFxtb3ZpZS1tbmdtdC1zeXN0ZW1cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2dyYW1taW5nL3JlcG9zL01vdmllTW5nbXRTeXN0ZW0vRnJvbnQvbW92aWUtbW5nbXQtc3lzdGVtL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVhY3RSb3V0ZXIgfSBmcm9tIFwiQHJlYWN0LXJvdXRlci9kZXYvdml0ZVwiO1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHRhaWx3aW5kY3NzKCksXHJcbiAgICByZWFjdFJvdXRlcigpLFxyXG4gICAgdHNjb25maWdQYXRocygpXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHByb3h5OiB7XHJcbiAgICAgICdeL2FwaS8uKic6IHtcclxuICAgICAgICB0YXJnZXQ6IHByb2Nlc3MuZW52LkFQSV9VUkwsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyZShwcm94eSkge1xyXG4gICAgICAgICAgcHJveHkub24oXCJlcnJvclwiLCAoZXJyLCBfLCBfXykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgcHJveHkub24oJ3Byb3h5UmVxJywgKF8sIHJlcSwgX3JlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb3hpbmcgZXF1ZXN0IHRvOlwiLCBgWyR7cmVxLm1ldGhvZH1dYCwgcmVxLnVybCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHByb3h5Lm9uKCdwcm94eVJlcycsIChwcm94eVJlcywgcmVxLCBfcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCByZXNwb25zZSBmcm9tOicsIHByb3h5UmVzLnN0YXR1c0NvZGUsIHJlcS51cmwpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9cXC9hcGkvLCAnJyksXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdYLFNBQVMsbUJBQW1CO0FBQ3BaLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBRTFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLFlBQVk7QUFBQSxJQUNaLGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLFFBQ1YsUUFBUSxRQUFRLElBQUk7QUFBQSxRQUNwQixjQUFjO0FBQUEsUUFDZCxVQUFVLE9BQU87QUFDZixnQkFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTztBQUNoQyxvQkFBUSxNQUFNLEdBQUc7QUFBQSxVQUNuQixDQUFDO0FBRUQsZ0JBQU0sR0FBRyxZQUFZLENBQUMsR0FBRyxLQUFLLFNBQVM7QUFDckMsb0JBQVEsSUFBSSxzQkFBc0IsSUFBSSxJQUFJLE1BQU0sS0FBSyxJQUFJLEdBQUc7QUFBQSxVQUM5RCxDQUFDO0FBQ0QsZ0JBQU0sR0FBRyxZQUFZLENBQUMsVUFBVSxLQUFLLFNBQVM7QUFDNUMsb0JBQVEsSUFBSSwyQkFBMkIsU0FBUyxZQUFZLElBQUksR0FBRztBQUFBLFVBQ3JFLENBQUM7QUFBQSxRQUNIO0FBQUEsUUFDQSxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsU0FBUyxFQUFFO0FBQUEsTUFDN0M7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
