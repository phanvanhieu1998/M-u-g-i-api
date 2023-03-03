const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    // themeColor: manifestJSON.theme_color,
    // name: manifestJSON.short_name,
    // msTileColor: manifestJSON.background_color,
    // appleMobileWebAppCapable: "yes",
    // appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/sw",
    },
  },
});
