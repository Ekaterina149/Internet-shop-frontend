import { fileURLToPath, resolve, URL } from "node:url";

import { defineConfig, splitVendorChunkPlugin } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import VueComponents from "unplugin-vue-components/vite";
// import type { PreRenderedAsset } from "rollup";

// function assetFileNames(assetInfo: PreRenderedAsset) {
//   let extType = assetInfo.name!.split(".").at(1);
//   if (/css/i.test(extType!)) {
//     return `assets/css/[name]-[extname]`;
//   }
//   if (/woff|woff2|otf|ttf|eot/i.test(extType!)) {
//     return `assets/font/[name][extname]`;
//   }
//   if (/wav|mp3|mp4/i.test(extType!)) {
//     return `assets/media/[name][extname]`;
//   }
//   return `assets/img/[name][extname]`;
// }

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    VueJsx(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/stores", "src/locales"],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    VueComponents({
      dirs: ["src/components"],

      // allow auto load markdown components under `./src/components/`
      extensions: ["vue"],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],

      dts: "src/components.d.ts",
    }),
  ],
  base: mode == "development" ? "" : "./",
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1000,
    // minify: true,
    // sourcemap: false,

    // plugins: [splitVendorChunkPlugin()],
    // rollupOptions: {
    // input: {
    // main: resolve(__dirname, "index.html"),
    // },
    // output: [
    //   {
    //     name: "main",
    //     assetFileNames,
    //     chunkFileNames: "assets/js/chunk-[name].js", // "assets/js/chunk-[name]-[hash].js",
    //     entryFileNames: "assets/js/entry-[name].js", // "assets/js/entry-[name]-[hash].js",
    //   },
    // ],
    // },
  },
  // server: {
  //  https: {
  //   cert: readFileSync(resolve(__dirname, "misc/file.crt")).toString(),
  //   key: readFileSync(resolve(__dirname, "misc/file.key")).toString(),
  // },
  // host: "127.0.0.1",
  // port: 8080,
  // headers: {},
  // proxy: {
  //   "/api": {
  //     target:  "uri",
  //     changeOrigin: true,
  //     secure: false,
  //     ws: true,
  //     configure: (proxy, _options) => {
  //       proxy.on("error", (err, _req, _res) => {
  //         console.log("proxy error", err);
  //       });
  //   },
  // },
  // },
}));
