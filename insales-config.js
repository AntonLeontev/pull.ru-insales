"use strict";

/**
 * Настройки поумолчанию
 */
module.exports = {
  account: {
    id: "1dd41c0e636a0d1034d9e19d063a4d36",
    token: "6192b219a1ac01c9bbdc6e4597db6633",
    url: "pull.ru",
    http: true,
  },
  theme: {
    id: "6306050",
    root: ".",
    backup: true,
    assetsSync: true,
    excludeFiles: [],
    onUpdate: function onUpdate() {
      // обновление темы
    },
    assetsDomain: "https://assets.insales.ru",
  },
  util: {
    openBrowser: true,
  },
  plugins: {
    exclude: ["*.min.js", "*.min.css", "*.liquid"],
  },
  chokidarOptions: {
    ignored: /[\/\\]\./,
    ignoreInitial: true,
    followSymlinks: true,
    usePolling: false,
    interval: 200,
    delay: 0,
    binaryInterval: 300,
    alwaysStat: true,
    depth: 99,
    awaitWriteFinish: {
      stabilityThreshold: 100,
      pollInterval: 100,
    },
    ignorePermissionErrors: true,
  },
};
