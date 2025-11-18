module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("admins", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        unique: true,
        allowNull: false,
      },
      groupId: { type: DataTypes.INTEGER, defaultValue: 0 },
      isActive: DataTypes.BOOLEAN,
      dataUsage: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      dataLimit: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      expireDate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      adminId: DataTypes.TINYINT,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
    await queryInterface.createTable("nodes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
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
        allowNull: false,
      },
      ip: {
        type: DataTypes.STRING,
      },
      config: { type: DataTypes.JSON },
      alive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
    await queryInterface.createTable("proxies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nodeId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: DataTypes.STRING,
      address: DataTypes.STRING,
      port: DataTypes.INTEGER,
      settings: DataTypes.JSON,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
    await queryInterface.createTable("hosts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      type: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      port: { type: DataTypes.INTEGER, allowNull: false },
      tls: { type: DataTypes.STRING, allowNull: false },
      sni: { type: DataTypes.STRING, allowNull: false },
      userAgent: { type: DataTypes.STRING, allowNull: false },
      allowInsecure: { type: DataTypes.BOOLEAN, allowNull: false },
      obfs: { type: DataTypes.STRING, allowNull: false },
      singboxJson: { type: DataTypes.STRING, allowNull: false },
      createdAt: { allowNull: false, type: DataTypes.DATE },
      updatedAt: { allowNull: false, type: DataTypes.DATE },
    });
    await queryInterface.createTable("groups", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
    await queryInterface.createTable("user_groups", {
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
    });
    await queryInterface.createTable("group_proxies", {
      proxyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "proxies", key: "id" },
        onDelete: "CASCADE",
      },
      groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "groups", key: "id" },
        onDelete: "CASCADE",
      },
    });
    await queryInterface.createTable("nodeUsage", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nodeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      usage: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
    await queryInterface.createTable("userUsage", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      up: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      down: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {},
};
