"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("contacts", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM("phone", "email"),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      person_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "persons",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("contacts");
  },
};
