import sequelize from "../utilities/db.js";
import { DataTypes, Model } from "sequelize";

class Group extends Model {}

Group.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Group",
    tableName: "groups",
    timestamps: true,
  }
);

export default Group;
