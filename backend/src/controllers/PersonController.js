const { Person } = require("../models");

const PersonController = {
  findAll: async (req, res) => {
    try {
      const persons = await Person.findAll();
      res.json(persons);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = PersonController;
