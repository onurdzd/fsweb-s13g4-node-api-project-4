const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  const userName = req.body["user_name"];
  const password = req.body.password;
  try {
    if (!userName || !password) {
      res.status(400).json({ message: "Kullanıcı bilgileri hatalı" });
    } else {
      res.send("Login başarılı,hoşgeldin");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
