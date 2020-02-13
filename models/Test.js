//Test
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestSchema = new Schema({
  content: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  tag: [String]
});

const Test = mongoose.model("Test", TestSchema);

module.exports = { Test, TestSchema };
