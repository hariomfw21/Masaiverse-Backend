const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: String,
  Age: Number,
  Place: String,
  BatchName: {
    type: String,
    emum: [" WEB-13", "WEB-14", "WEB-15"],
  },
  Profession: {
    type: String,
    emum: ["FSD", "Frontend", "Backend", "Student" ],
  }
});

const UserModle = mongoose.model("User",userSchema);

module.exports={
    UserModle
}
