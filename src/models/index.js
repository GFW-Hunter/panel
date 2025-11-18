import sequelize from "../utilities/db.js";
import User from "./users-model.js";
import Node from "./nodes-model.js";
import Proxy from "./proxies-model.js";
import UserGroup from "./userGroup-model.js";
import groupProxy from "./groupProxy-model.js";
import Group from "./groups-model.js";

const db = {};
db.sequelize = sequelize;
db.User = User;
db.Node = Node;
db.Group = Group;
db.Proxy = Proxy;
db.UserGroup = UserGroup;
db.groupProxy = groupProxy;

// ---- associations ----

Proxy.belongsToMany(Group, {
  through: groupProxy,
  foreignKey: "proxyId",
  otherKey: "groupId",
  as: "groups",
  onDelete: "CASCADE",
});

Group.belongsToMany(Proxy, {
  through: groupProxy,
  foreignKey: "groupId",
  otherKey: "proxyId",
  as: "proxies",
  onDelete: "CASCADE",
});

User.belongsToMany(Group, {
  through: UserGroup,
  foreignKey: "userId",
  otherKey: "groupId",
  as: "groups",
  onDelete: "CASCADE",
});

Group.belongsToMany(User, {
  through: UserGroup,
  foreignKey: "groupId",
  otherKey: "userId",
  as: "users",
  onDelete: "CASCADE",
});

export default db;
