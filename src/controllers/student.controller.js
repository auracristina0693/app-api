const { findOneAndDelete } = require("../models/student.model");
const Student = require("../models/student.model");

//CRUD
//CREATE
//READ
//UPDATE
//DELETE

module.exports = {
  //Crear un estudiante
  async create(req, res) {
    const data = req.body;

    try {
      await Student.create(data);
      res.status(201).json();
    } catch (error) {
      res.status(400).json();
    }
  },

  async list(req, res) {
    const students = await Student.find();
    res.status(200).json(students);
  },

  async findOne(req, res) {
    const { id } = req.params;

    const student = await Student.findById(id);
    res.status(200).json(student);
  },

  async findOneAndDelete(req, res) {
    const { id } = req.params;

    await Student.findByIdAndDelete(id);
    res.status(200).json();
  },
};
