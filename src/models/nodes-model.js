import sequelize from "../utilities/db.js";
import { DataTypes, Model } from "sequelize";

class Node extends Model {}

Node.init(
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    uuid: {
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(32),
      unique: true,
      allowNull: false,
    },
    ip: {
      type: DataTypes.STRING,
      validate: {
        isIpOrUrl(value) {
          const ipRegex =
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;
          const urlRegex =
            /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

          if (!ipRegex.test(value) && !urlRegex.test(value)) {
            throw new Error("Value must be a valid IP address or URL");
          }
        },
      },
    },

    config: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    alive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Node",
    tableName: "nodes",
    timestamps: true,
  }
);
export default Node;
