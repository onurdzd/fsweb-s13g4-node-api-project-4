const express=require("express")
const router=express.Router()
const User=require("./users-model.js")

router.get("/", (req, res) => {
   res.status(201).json(User.getAllUsers())});

module.exports=router