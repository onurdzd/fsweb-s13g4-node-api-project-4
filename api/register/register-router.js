const express = require("express");
const router = express.Router();
const User=require("../users/users-model")
const mw=require("../middleware/middleware")

router.post("/",mw.checkSameUserName,mw.validateNewUser, (req, res) => {
  let user=req.user;
  let createdUser=User.createNewUser(user);
  res.status(201).json(createdUser)
} )

module.exports = router;
