import { DataTypes, Model } from "sequelize";
import sequelize from "../utilities/db.js";
import Node from "./nodes-model.js";

class Proxy extends Model {}

Proxy.init(
  {
    nodeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "nodes",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    port: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    settings: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {},
    },
  },
  {
    sequelize,
    modelName: "Proxy",
    tableName: "proxies",
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["nodeId", "tag"],
      },
    ],
  }
);

if (Node) {
  Node.hasMany(Proxy, {
    foreignKey: "nodeId",
    as: "proxies",
    onDelete: "CASCADE",
  });
  Proxy.belongsTo(Node, { foreignKey: "nodeId", as: "node" });
}

export default Proxy;
