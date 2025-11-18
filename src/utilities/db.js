import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

let sequelize;

if (process.env.DIALECT === "sqlite") {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: process.env.DB_STORAGE || "./sequelize.db",
    logging: false,
  });
} else if (process.env.DIALECT === "mysql2") {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST || "localhost",
      dialect: "mysql",
      logging: false,
    }
  );
} else {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./sequelize.db",
    logging: false,
  });
}

export default sequelize;
