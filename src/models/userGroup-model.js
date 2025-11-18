import { DataTypes, Model } from "sequelize";
import sequelize from "../utilities/db.js";

class UserGroup extends Model {}

UserGroup.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "groups", key: "id" },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "UserGroup",
    tableName: "user_groups",
    timestamps: false ,
    indexes: [
      { unique: true, fields: ["userId", "groupId"] },
    ],
  }
);

export default UserGroup;
