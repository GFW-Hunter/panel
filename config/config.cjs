module.exports = {
  config: "./config/config.cjs",
  "migration-path": "./migrations",
  "migration-file-extension": "cjs",
  development: {
    dialect: "sqlite",
    storage: "./src/database/hunterpanel-dev.db",
  },
  production: {
    dialect: "sqlite",
    storage: "/data/sequelize.db",
  },
};
