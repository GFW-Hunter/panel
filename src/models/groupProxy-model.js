import { DataTypes, Model } from "sequelize";
import sequelize from "../utilities/db.js";

class groupProxy extends Model {}

groupProxy.init(
  {
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "groups", key: "id" },
      onDelete: "CASCADE",
    },
    proxyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "proxies", key: "id" },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "groupProxy",
    tableName: "group_proxies",
    timestamps: false,
    indexes: [{ unique: true, fields: ["groupId", "proxyId"] }],
  }
);

export default groupProxy;
