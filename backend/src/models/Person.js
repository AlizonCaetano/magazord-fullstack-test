"use strict";

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Person = sequelize.define(
    "Person",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true
      }
    },
    {
      tableName: "persons"
    }
  );

  Person.associate = (models) => {
    Person.hasMany(models.Contact, {
      foreignKey: "person_id"
    });
    Person.hasOne(models.User, {
      foreignKey: "person_id"
    });
  };

  return Person;
};
