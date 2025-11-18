import { DataTypes, Model } from "sequelize";
import sequelize from "../utilities/db.js";

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      set(value) {
        this.setDataValue("username", value.toLowerCase());
      },
      validate: {
        is: {
          args: /^[a-z0-9_]+$/,
          msg: "Username must contain only lowercase letters, numbers, and underscores (_).",
        },
      },
    },
    uuid: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    dataUsage: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    dataLimit: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    expireDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
  }
);
export default User;
