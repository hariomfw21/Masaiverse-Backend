const mongoose = require("mongoose");

const adminSchama = mongoose.Schema({
  Name:{
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Role:{
    type: String,
    default:"admin",
  }
});

const adminModel = mongoose.model("admin",adminSchama);

module.exports = {
  adminModel
};
