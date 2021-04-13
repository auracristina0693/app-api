const { Schema, model } = require("mongoose");

const studenSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  lastname: {
    type: String,
    required: [true, "Last name is required"],
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Email is required"],
  },
});

const Student = model("Student", studenSchema);

module.exports = Student;
