const { defineConfig } = require("vite");
const { resolve } = require("path");
module.exports = defineConfig({
  root: "./",
  base: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        discover: resolve(__dirname, "discover.html"),
        blog: resolve(__dirname, "blog.html"),
        fundedGrantDetail: resolve(__dirname, "funded-grant-detail.html"),
        fundedGrant: resolve(__dirname, "funded-grant.html"),
        grantee: resolve(__dirname, "grantee.html"),
        blogPost: resolve(__dirname, "blog-post.html"),
        faq: resolve(__dirname, "faq.html"),
        brandAssets: resolve(__dirname, "brand-assets.html"),
      },
    },
  },
});
