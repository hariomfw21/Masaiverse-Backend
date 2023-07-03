const express = require("express");
const { adminModel } = require("../Model/adminModel");
const adminRouter = express.Router();

adminRouter.post("/login", async (req, res) => {
  const {Email,Password } = req.body;
  try {
   const data = await adminModel.findOne({Email, Password});
   if(data){
    res.status(200).send({message: data});
   }else{
    res.status(401).send({message: "Invalid Credentials"});
   }
   console.log(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    console.log(error.message);
  }
});

module.exports = {
  adminRouter,
};
