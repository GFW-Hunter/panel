import { Model, DataTypes } from "sequelize";
import sequelize from "../utilities/db.js";

class Admin extends Model {}

Admin.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSudo: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Admin",
    tableName: "admins",
    timestamps: false,
  }
);

export default Admin;
