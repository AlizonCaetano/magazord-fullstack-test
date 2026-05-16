const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM("admin", "viewer"),
        allowNull: false
      },
      person_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "users"
    }
  );

  User.associate = (models) => {
    User.belongsTo(models.Person, {
      foreignKey: "person_id"
    });
  };

  return User;
};
