"use strict";

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Contact = sequelize.define(
    "Contact",
    {
      type: {
        type: DataTypes.ENUM("phone", "email"),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      person_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "contacts"
    }
  );

  Contact.associate = (models) => {
    Contact.belongsTo(models.Person, { foreignKey: "person_id" });
  };

  return Contact;
};
