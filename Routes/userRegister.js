const express = require("express");
const { UserModle } = require("../Model/userModel");
const userRegister = express.Router();

userRegister.post("/register", async (req, res) => {
  const { Name, Age, Place, BatchName, Profession } = req.body;
  try {
    const register_user = new UserModle({Name,Age,Place,BatchName,Profession})
    await register_user.save();
    res.status(200).send({Message:"Registration Sucess"});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    console.log(error.message);
  }
});


userRegister.get("/getAllUser",async(req,res)=>{
    try {
        let data = await UserModle.find();
        if(data){
            res.status(200).send({users:data});
        }
        else{
            res.status(200).send({users:"No Data Found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports = {
  userRegister,
};
