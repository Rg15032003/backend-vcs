const express=require("express");
const userController=require("../controllers/userController");
const { model } = require("mongoose");

const userRouter=express.Router();

userRouter.get("/allUsers",userController.getAllUsers);
userRouter.post("/signup",userController.signup);
userRouter.post("/login",userController.login);
userRouter.get("/getUserProfile",userController.getUserProfile);
userRouter.put("/updateProfile",userController.updateUserProfile);
userRouter.delete("/deleteProfile",userController.deleteUserProfile);

module.exports=userRouter;